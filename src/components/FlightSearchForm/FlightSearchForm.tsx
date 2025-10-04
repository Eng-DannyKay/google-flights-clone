import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Autocomplete,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { type Dayjs } from "dayjs";
import { useLocations } from "../../hooks/useLocations";
import { useDebounce } from "../../hooks/useDebounce";
import type { Location } from "../../types/flights";

const FlightSearchForm: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [from, setFrom] = useState<Location | null>(null);
  const [to, setTo] = useState<Location | null>(null);
  const [depart, setDepart] = useState<Dayjs | null>(dayjs());
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [fromInput, setFromInput] = useState("");
  const [toInput, setToInput] = useState("");

  const debouncedFromInput = useDebounce(fromInput, 500);
  const debouncedToInput = useDebounce(toInput, 500);

  const { data: fromLocations = [], isLoading: isLoadingFrom } = useLocations(
    { query: debouncedFromInput },
    debouncedFromInput.length > 2
  );
  const { data: toLocations = [], isLoading: isLoadingTo } = useLocations(
    { query: debouncedToInput },
    debouncedToInput.length > 2
  );

  const getOptionLabel = (option: Location): string =>
    [option.code, option.city, option.name].filter(Boolean).join(" — ");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to || !depart) return;

    const params = new URLSearchParams({
      originSkyId: from.code,
      originEntityId: from.entityId,
      destinationSkyId: to.code,
      destinationEntityId: to.entityId,
      date: depart.format("YYYY-MM-DD"),
      returnDate: returnDate?.format("YYYY-MM-DD") || "",
    });

    navigate(`/results?${params.toString()}`);
  };

  const isFormValid = Boolean(from && to && depart);

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 3,
        maxWidth: "80%",
        mx: "auto",
        mt: 4,
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <Stack
          spacing={2}
          direction={isDesktop ? "row" : "column"}
          alignItems={isDesktop ? "flex-end" : "stretch"}
        >
          <Autocomplete
            fullWidth
            options={fromLocations}
            loading={isLoadingFrom}
            value={from}
            inputValue={fromInput}
            onChange={(_, newValue) => setFrom(newValue)}
            onInputChange={(_, newInputValue) => setFromInput(newInputValue)}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            renderInput={(params) => (
              <TextField
                {...params}
                label="From"
                required
                slotProps={{
                  input: {
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {isLoadingFrom && <CircularProgress size={20} />}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
          />

          <Autocomplete
            fullWidth
            options={toLocations}
            loading={isLoadingTo}
            value={to}
            inputValue={toInput}
            onChange={(_, newValue) => setTo(newValue)}
            onInputChange={(_, newInputValue) => setToInput(newInputValue)}
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            renderInput={(params) => (
              <TextField
                {...params}
                label="To"
                required
                slotProps={{
                  input: {
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {isLoadingTo && <CircularProgress size={20} />}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  },
                }}
              />
            )}
          />

          <DatePicker
            label="Depart"
            value={depart}
            onChange={setDepart}
            slotProps={{
              textField: {
                required: true,
                fullWidth: true,
              },
            }}
          />

          <DatePicker
            label="Return (optional)"
            value={returnDate}
            onChange={setReturnDate}
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
          />

          <Button
            variant="contained"
            size="large"
            type="submit"
            disabled={!isFormValid}
            sx={{
              px: 4,
              py: 1.5,
              minWidth: 120,
              whiteSpace: "nowrap",
              height: "56px",
            }}
          >
            Search
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default FlightSearchForm;

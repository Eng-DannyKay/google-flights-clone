import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Autocomplete,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';

interface AirportOption {
  code: string;
  label: string;
}

const sampleAirports: AirportOption[] = [
  { code: 'JFK', label: 'John F. Kennedy (JFK)' },
  { code: 'LAX', label: 'Los Angeles (LAX)' },
  { code: 'LHR', label: 'London Heathrow (LHR)' },
];

const FlightSearchForm: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [from, setFrom] = useState<AirportOption | null>(null);
  const [to, setTo] = useState<AirportOption | null>(null);
  const [depart, setDepart] = useState<Dayjs | null>(dayjs());
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to || !depart) return;

    const params = new URLSearchParams({
      from: from.code,
      to: to.code,
      depart: depart.format('YYYY-MM-DD'),
      return: returnDate?.format('YYYY-MM-DD') || '',
    });

    navigate(`/results?${params.toString()}`);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 3,
        maxWidth: 900,
        mx: 'auto',
        mt: 4,
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <Stack
          spacing={2}
          direction={isDesktop ? 'row' : 'column'}
          alignItems="center"
        >
          <Autocomplete
            fullWidth
            options={sampleAirports}
            getOptionLabel={(opt) => `${opt.code} — ${opt.label}`}
            isOptionEqualToValue={(o, v) => o.code === v.code}
            value={from}
            onChange={(_, newVal) => setFrom(newVal)}
            sx={{ flex: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="From" required />
            )}
          />

          <Autocomplete
            fullWidth
            options={sampleAirports}
            getOptionLabel={(opt) => `${opt.code} — ${opt.label}`}
            isOptionEqualToValue={(o, v) => o.code === v.code}
            value={to}
            onChange={(_, newVal) => setTo(newVal)}
            sx={{ flex: 1 }}
            renderInput={(params) => (
              <TextField {...params} label="To" required />
            )}
          />

          <DatePicker
            label="Depart"
            value={depart}
            onChange={setDepart}
            slotProps={{
              textField: { required: true, fullWidth: true },
            }}
            sx={{ flex: 1 }}
          />

          <DatePicker
            label="Return (optional)"
            value={returnDate}
            onChange={setReturnDate}
            slotProps={{
              textField: { fullWidth: true },
            }}
            sx={{ flex: 1 }}
          />

          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{
              px: 4,
              py: 1.5,
              minWidth: 120,
              whiteSpace: 'nowrap',
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
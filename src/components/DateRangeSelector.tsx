import { Box } from "@mui/material";
import type { DateRange } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Dayjs } from "dayjs";
import React, { useState } from "react";

const DateRangeSelector: React.FC = () => {
  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);

  return (
    <Box>
      <DateRangePicker
        value={value}
        onChange={(newValue: DateRange<Dayjs>) => setValue(newValue)}
        localeText={{
          start: 'Departure',
          end: 'Return'
        }}
        slotProps={{
          textField: {
            sx: { '&:first-of-type': { mr: 2 } }
          }
        }}
      />
    </Box>
  );
};

export default DateRangeSelector;
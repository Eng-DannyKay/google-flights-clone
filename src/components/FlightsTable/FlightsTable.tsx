import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { Box, Paper, Typography } from '@mui/material';

const rows = [
  { id: 1, airline: 'Delta', from: 'JFK', to: 'LAX', price: 320, depart: '2025-10-10 08:00', arrive: '2025-10-10 11:30' },
  { id: 2, airline: 'American', from: 'LHR', to: 'JFK', price: 540, depart: '2025-10-12 09:15', arrive: '2025-10-12 12:45' },
  { id: 3, airline: 'United', from: 'ORD', to: 'SFO', price: 280, depart: '2025-10-14 07:00', arrive: '2025-10-14 09:30' },
  { id: 4, airline: 'Emirates', from: 'DXB', to: 'LHR', price: 700, depart: '2025-10-15 14:00', arrive: '2025-10-15 18:00' },
  { id: 5, airline: 'Qatar Airways', from: 'DOH', to: 'JFK', price: 750, depart: '2025-10-16 01:00', arrive: '2025-10-16 08:00' },
];

const columns: GridColDef[] = [
  { field: 'airline', headerName: 'Airline', flex: 1, minWidth: 150 },
  { field: 'from', headerName: 'From', flex: 1, minWidth: 100 },
  { field: 'to', headerName: 'To', flex: 1, minWidth: 100 },
  { field: 'depart', headerName: 'Departure', flex: 1, minWidth: 180 },
  { field: 'arrive', headerName: 'Arrival', flex: 1, minWidth: 180 },
  { field: 'price', headerName: 'Price ($)', flex: 1, minWidth: 120, type: 'number' },
];

const ResultsPage: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Flight Results
      </Typography>

      <Paper sx={{ height: 500, width: '100%', p: 2 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5, page: 0 } },
          }}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Paper>
    </Box>
  );
};

export default ResultsPage;

import { DataGrid } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import { useTablePreferences } from "../../hooks/useTablePreferences";
import type { Flight } from "../../types/flights";
import { processFlightData } from "../../utils/FlightsTable";
import { COLUMNS, DEFAULT_PAGE_SIZE, PAGE_SIZE_OPTIONS } from "../../utils/constants";
import NoFlightsOverlay from "../NoFlightsOverlay";
import { TableContainer } from "./FlightsTable.styles";

interface FlightsTableProps {
  flights: Flight[];
}

const FlightsTable: React.FC<FlightsTableProps> = ({ flights }) => {
  const { preferences, savePreferences } = useTablePreferences('flights-table');
  const rows = useMemo(() => processFlightData(flights), [flights]);

  const handlePaginationModelChange = (newModel: { pageSize: number; page: number }) => {
    savePreferences({
      ...preferences,
      pageSize: newModel.pageSize,
    });
  };

  const handleColumnVisibilityChange = (newModel: Record<string, boolean>) => {
    savePreferences({
      ...preferences,
      visibleColumns: newModel,
    });
  };


  return (
    <TableContainer>
      <DataGrid
        rows={rows}
        columns={COLUMNS }
        pageSizeOptions={PAGE_SIZE_OPTIONS}
        initialState={{
          pagination: { 
            paginationModel: { pageSize: preferences?.pageSize || DEFAULT_PAGE_SIZE } 
          },
          columns: {
            columnVisibilityModel: preferences?.visibleColumns || {},
          },
        }}
  
        onPaginationModelChange={handlePaginationModelChange}
        onColumnVisibilityModelChange={handleColumnVisibilityChange}
  
        disableColumnResize={false}
        sortingMode="client"
        filterMode="client"

        slots={{ 
          noRowsOverlay: NoFlightsOverlay 
        }}
        disableRowSelectionOnClick
        sx={{
          "& .MuiDataGrid-cell:focus": { outline: "none" },
          "& .MuiDataGrid-row:hover": { backgroundColor: "action.hover" },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "background.paper",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid",
            borderColor: "divider",
          },
        }}
      />
    </TableContainer>
  );
};

export default FlightsTable;
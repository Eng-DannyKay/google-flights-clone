import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

export const TableContainer = styled(Box)({
  height: 600,
  width: "100%",
});

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-cell:focus": { 
    outline: "none" 
  },
  "& .MuiDataGrid-row:hover": { 
    backgroundColor: theme.palette.action.hover 
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.background.paper,
    fontWeight: "bold",
  },
  "& .MuiDataGrid-cell": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));
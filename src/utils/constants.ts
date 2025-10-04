import type { GridColDef } from "@mui/x-data-grid";
import type { Flight } from "../types/flights";

export const defaultParams = {
  market: "en-US" as const,
  countryCode: "US" as const,
  currency: "USD" as const,
};

export const GRID_HEIGHT = 600;
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 25, 50] as const;

export const formatCurrency = (value: number): string => 
  `$${value.toFixed(2)}`;

export const COLUMNS: GridColDef<Flight>[] = [
  { 
    field: "airline" as const, 
    headerName: "Airline", 
    flex: 1, 
    minWidth: 120,
    maxWidth: 300,
    filterable: true,
    sortable: true,
  },
  { 
    field: "flightNumber" as const, 
    headerName: "Flight #", 
    flex: 1, 
    minWidth: 100,
    maxWidth: 150,
    filterable: true,
    sortable: true,
  },
  { 
    field: "from" as const, 
    headerName: "From", 
    flex: 1, 
    minWidth: 90,
    maxWidth: 150,
    filterable: true,
    sortable: true,
  },
  { 
    field: "to" as const, 
    headerName: "To", 
    flex: 1, 
    minWidth: 90,
    maxWidth: 150,
    filterable: true,
    sortable: true,
  },
  { 
    field: "departTime" as const, 
    headerName: "Depart", 
    flex: 1, 
    minWidth: 140,
    maxWidth: 200,
    filterable: true,
    sortable: true,
  },
  { 
    field: "arrivalTime" as const, 
    headerName: "Arrive", 
    flex: 1, 
    minWidth: 140,
    maxWidth: 200,
    filterable: true,
    sortable: true,
  },
  {
    field: "price" as const,
    headerName: "Price",
    flex: 1,
    minWidth: 100,
    maxWidth: 150,
    type: "number" as const,
    filterable: true,
    sortable: true,
    valueFormatter: (params: { value: number }) => formatCurrency(params.value),
  },
];
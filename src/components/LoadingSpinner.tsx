import React from "react";
import { Box, CircularProgress, Paper } from "@mui/material";

const LoadingSpinner: React.FC = () => (
  <Paper sx={{ p: 3, borderRadius: 2, maxWidth: 600, mx: "auto", mt: 4 }}>
    <Box display="flex" justifyContent="center" alignItems="center" minHeight={400}>
      <CircularProgress />
    </Box>
  </Paper>
);

export default LoadingSpinner;

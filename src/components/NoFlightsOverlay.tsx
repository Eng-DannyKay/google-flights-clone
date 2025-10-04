import React from "react";
import { Box, Typography } from "@mui/material";

const NoFlightsOverlay: React.FC = () => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
    <Typography variant="body2" color="text.secondary">
      No flights found for your search.
    </Typography>
  </Box>
);

export default NoFlightsOverlay;

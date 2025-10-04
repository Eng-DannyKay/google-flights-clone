import React from "react";
import { Paper, Alert } from "@mui/material";

const ErrorAlert: React.FC<{ message: string }> = ({ message }) => (
  <Paper sx={{ p: 3, borderRadius: 2, maxWidth: 600, mx: "auto", mt: 4 }}>
    <Alert severity="error" aria-live="polite">{message}</Alert>
  </Paper>
);

export default ErrorAlert;

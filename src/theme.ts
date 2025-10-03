import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#ff6f00', 
    },
    background: {
      default: '#f8f9fa', 
      paper: '#ffffff',
    },
    text: {
      primary: '#082230',
      secondary: '#5f6368',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h5: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none', 
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12, 
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#f1f3f4', 
        },
      },
    },
  },
});

export default theme;

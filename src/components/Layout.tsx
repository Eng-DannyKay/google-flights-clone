import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">Google Flights Clone</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;

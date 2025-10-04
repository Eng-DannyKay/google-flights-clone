
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

import {
  StyledAppBar,
  StyledToolbar,
  LogoContainer,
  MainContainer,
  BackgroundWrapper,
  ContentContainer,
} from './Layout.styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <BackgroundWrapper>
      <StyledAppBar position="sticky">
        <StyledToolbar>
          <LogoContainer>
            <FlightTakeoffIcon 
              sx={{ 
                fontSize: { xs: 28, sm: 32, md: 36 }, 
                color: 'white',
                transform: 'rotate(-15deg)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'rotate(-15deg) scale(1.1)',
                }
              }} 
            />
            <Typography 
              variant="h5" 
              component="div" 
              sx={{ 
                fontWeight: 600,
                color: 'white',
                letterSpacing: '-0.5px',
                fontSize: { xs: '1.1rem', sm: '1.35rem', md: '1.5rem' }
              }}
            >
              Google Flights Clone
            </Typography>
          </LogoContainer>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                fontSize: { sm: '0.875rem', md: '0.95rem' }
              }}
            >
              Find your perfect flight
            </Typography>
          </Box>
        </StyledToolbar>
      </StyledAppBar>
      
      <ContentContainer>
        <MainContainer>
          {children}
        </MainContainer>
      </ContentContainer>
    </BackgroundWrapper>
  );
};

export default Layout;
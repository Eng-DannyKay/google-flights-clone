import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Box } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 50%, #0d47a1 100%)',
  boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  padding: '0 16px',
  minHeight: '64px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    padding: '0 24px',
    minHeight: '72px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0 32px',
  },
}));

export const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  [theme.breakpoints.up('sm')]: {
    gap: '12px',
  },
}));

export const MainContainer = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 120px)',
  [theme.breakpoints.up('sm')]: {
    minHeight: 'calc(100vh - 140px)',
    borderRadius: '16px',
    padding: '28px 24px',
  },
  [theme.breakpoints.up('md')]: {
    padding: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '40px 48px',
  },
}));

export const BackgroundWrapper = styled(Box)({
  width: '100%',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #fff3e0 100%)',
  overflow: 'hidden',
});

export const ContentContainer = styled(Box)(({ theme }) => ({
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: '16px',
  paddingBottom: '24px',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '24px',
    paddingBottom: '32px',
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: '32px',
    paddingRight: '32px',
    paddingTop: '32px',
    paddingBottom: '40px',
  },
}));
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#6ab7ff' },
    secondary: { main: '#80e27e' },
    background: {
      default: '#0b1020',
      paper: '#11172a',
    },
    divider: 'rgba(255,255,255,0.08)'
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Inter, Roboto, Helvetica, Arial, sans-serif',
    h6: { fontWeight: 600 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: { border: '1px solid rgba(255,255,255,0.06)' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { borderBottom: '1px solid rgba(255,255,255,0.06)' },
      },
    },
  },
});

export default theme;

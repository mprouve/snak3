import { ThemeOptions } from '@mui/material';
import { Colors } from './tokens';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      default: Colors.BgDefault,
      paper: Colors.BgDefault,
    },
    primary: {
      main: Colors.BgAccent,
    },
    secondary: {
      main: Colors.BgAccent,
    },
  },
  zIndex: {
    tooltip: 9999999,
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 767,
      md: 991,
      lg: 1199,
      xl: 1399,
    },
  },
};

export default themeOptions;

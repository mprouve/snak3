import { Components, Theme } from '@mui/material';

const themeRadioOverride = (theme: Theme): Components => ({
  MuiRadio: {
    styleOverrides: {
      root: {
        color: theme.custom.colors.BorderField,
        '&.Mui-checked': {
          color: theme.custom.colors.BgHighlight,
        },
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

export default themeRadioOverride;

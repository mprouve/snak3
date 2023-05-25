import { Components, Theme } from '@mui/material';

const themeMenuOverride = (theme: Theme): Components => ({
  MuiMenu: {
    styleOverrides: {
      paper: {
        margin: '5px 0',
      },
      list: {
        border: `1px solid ${theme.custom.colors.BorderDefault}`,
        backgroundColor: theme.custom.colors.BgLayer1,
        borderRadius: '4px',

        '& .MuiMenuItem-root': {
          height: '40px',
          padding: '0 20px 0 16px',
        },

        '& .Mui-selected': {
          backgroundColor: theme.custom.colors.BgLayer2,
        },
      },
    },
  },
});

export default themeMenuOverride;

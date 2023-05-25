import { Components, Theme } from '@mui/material';

const themeLinearProgressOverride = (theme: Theme): Components => ({
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: `${theme.custom.borderRadius.BorderRadiusRadiusBase}px`,
        backgroundColor: theme.custom.colors.BorderField,
        height: '8px',
      },
      barColorPrimary: {
        backgroundColor: `${theme.custom.colors.BgAccent}`,
        borderRadius: `${theme.custom.borderRadius.BorderRadiusRadiusBase}px`,
      },
    },
  },
});

export default themeLinearProgressOverride;

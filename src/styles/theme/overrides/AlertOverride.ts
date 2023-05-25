import { Components, Theme } from '@mui/material';

// TODO: update colors using rgb from figma tokens generation
const themeAlertOverride = (theme: Theme): Components => ({
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: '4px',
      },
    },
    variants: [
      {
        props: { severity: 'success' },
        style: {
          color: theme.custom.colors.TextSuccess,
          backgroundColor: `rgba(${theme.custom.colors.FieldSuccess}, 0.07)`,
        },
      },
      {
        props: { severity: 'warning' },
        style: {
          color: theme.custom.colors.TextWarning,
          backgroundColor: `rgba(${theme.custom.colors.FieldWarning}, 0.07)`,
        },
      },
      {
        props: { severity: 'error' },
        style: {
          color: theme.custom.colors.TextCritical,
          backgroundColor: `rgba(${theme.custom.colors.TextCritical}, 0.07)`,
        },
      },
      {
        props: { severity: 'info' },
        style: {
          color: theme.custom.colors.TextHighlight,
          backgroundColor: theme.custom.colors.FieldHighlight,
        },
      },
      {
        props: { variant: 'filled' },
        style: {
          borderLeft: '4px solid currentColor',
          backgroundColor: 'black',
        },
      },
    ],
  },
});

export default themeAlertOverride;

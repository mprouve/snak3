import { Components, Theme } from '@mui/material';

const themeAccordionOverride = (theme: Theme): Components => ({
  MuiAccordion: {
    styleOverrides: {
      root: {
        width: '100%',
        maxWidth: '664px',
        backgroundColor: theme.palette.background.default,
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.custom.colors.BorderSeparator}`,
        '&::before': {
          display: 'none',
        },
        '&.Mui-expanded': {
          margin: '0',
          '&::before': {
            display: 'none',
          },
        },
        '.MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(0deg)',
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: '8px 0 16px',
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.default,
        padding: '0 10px 0 0',
        minHeight: '64px',
      },
      content: {
        '&.Mui-expanded': {
          margin: '12px 0',
        },
      },
    },
  },
});

export default themeAccordionOverride;

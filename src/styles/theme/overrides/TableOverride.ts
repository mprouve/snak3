import { Components, Theme } from '@mui/material';

const themeTableOverride = (theme: Theme): Components => ({
  MuiTable: {
    styleOverrides: {
      root: {},
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        padding: `${theme.custom.spacing.SpacingMd}px`,
        fontSize: '14px',
        borderBottom: `1px solid ${theme.custom.colors.BorderDefault}`,

        [theme.breakpoints.down('sm')]: {
          padding: `${theme.custom.spacing.SpacingSm}px ${theme.custom.spacing.SpacingBase}px`,
          fontSize: '12px',
        },
      },
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        color: theme.custom.colors.TextWeak,

        '& .MuiTableCell-head': {
          fontSize: '14px',
          color: theme.custom.colors.TextOnAccentWeak,

          [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
          },
        },
      },
    },
  },
});

export default themeTableOverride;

import { Components, Theme } from '@mui/material';

const themeDialogOverride = (theme: Theme): Components => ({
  MuiDialog: {
    styleOverrides: {
      root: {
        '& .MuiPaper-root': {
          backgroundColor: theme.custom.colors.BgLayer1,
          backgroundImage: 'none',
          border: `1px solid ${theme.custom.colors.BorderDefault}`,
          borderRadius: `${theme.custom.borderRadius.BorderRadiusRadius2Xl}px`,
          padding: `${theme.custom.spacing.Spacing4Xl}px`,
          maxWidth: '400px',

          [theme.breakpoints.down('sm')]: {
            padding: `${theme.custom.spacing.Spacing2Xl}px`,
            margin: `${theme.custom.spacing.SpacingXl}px`,
          },
        },
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        color: theme.custom.colors.TextDefault,
        fontWeight: 'bold',
        fontSize: '20px',
        letterSpacing: '-0.01em',
        padding: 0,
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        padding: `0 0 ${theme.custom.spacing.Spacing4Xl}px 0`,
      },
    },
  },
  MuiDialogContentText: {
    styleOverrides: {
      root: {
        ...theme.custom.typography.BodyLg,
        fontFamily: `${theme.custom.typography.BodyLg.fontFamily} ${theme.custom.typography.BodyLg.fontWeight}`,
        color: theme.custom.colors.TextDefault,
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: 0,
        gap: `${theme.custom.spacing.SpacingLg}px`,
      },
    },
  },
});

export default themeDialogOverride;

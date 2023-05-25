import { Components, Theme } from '@mui/material';

const themeTabsOverride = (theme: Theme): Components => ({
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        height: '4px',
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        fontFamily: `${theme.custom.typography.BodyLg.fontFamily} ${theme.custom.typography.BodyLg.fontWeight}`,
        fontSize: theme.custom.typography.BodyLg.fontSize,
        fontWeight: theme.custom.typography.BodyLg.fontWeight,
        lineHeight: theme.custom.typography.BodyLg.lineHeight,
        letterSpacing: theme.custom.typography.BodyLg.letterSpacing,
        textCase: theme.custom.typography.BodyLg.textCase,
        textTransform: 'none',
        color: theme.custom.colors.TextWeak,
        minWidth: '30px',
        width: 'auto',
        margin: '0 20px',

        '&.Mui-selected': {
          color: theme.custom.colors.TextDefault,
        },

        [theme.breakpoints.down('sm')]: {
          padding: '12px 0',
          margin: '0 10px',
        },
        [theme.breakpoints.up('sm')]: {
          padding: '21px 0',
        },
      },
    },
  },
});

export default themeTabsOverride;

import { Components, Theme } from '@mui/material';
import { Interpolation } from '@mui/system';
import { Typography } from '../tokens';

const defaultSmallProps: Interpolation<{ theme: Theme }> = {
  fontFamily: `${Typography.LabelLgStrong.fontFamily} ${Typography.LabelLgStrong.fontWeight}`,
  fontSize: Typography.LabelLgStrong.fontSize,
  padding: '8px 12px',
  borderRadius: '4px',
  textTransform: 'none',
  height: '32px',
};

const defaultLargeProps: Interpolation<{ theme: Theme }> = {
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '120%',
  padding: '16px',
  borderRadius: '4px',
  textTransform: 'none',
  height: '48px',
};

const themeButtonOverride = (theme: Theme): Components => ({
  MuiButton: {
    variants: [
      // Primary
      {
        props: { variant: 'primary', size: 'small' },
        style: {
          ...defaultSmallProps,
          backgroundColor: theme.custom.colors.ActionAccent,
          color: theme.custom.colors.TextOnAccent,

          '&:hover': {
            backgroundColor: theme.custom.colors.ActionAccentHover,
          },
          '&:disabled': {
            backgroundColor: theme.custom.colors.ActionDisabled,
            color: theme.custom.colors.TextDisabled,
          },
          '&:active': {
            backgroundColor: theme.palette.secondary.main,
            border: `3px solid ${theme.custom.colors.ActionAccentHover}`,
          },
          '&:focus': {
            backgroundColor: theme.palette.secondary.main,
            border: `3px solid ${theme.custom.colors.ActionAccentHover}`,
          },
        },
      },
      {
        props: { variant: 'primary', size: 'large' },
        style: {
          ...defaultLargeProps,
          backgroundColor: theme.palette.primary.main,

          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          '&:disabled': {
            backgroundColor: '#504F57',
          },
          '&:active': {
            backgroundColor: theme.palette.secondary.main,
          },
          '&:focus': {
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },

      // Secondary
      {
        props: { variant: 'secondary', size: 'small' },
        style: {
          ...defaultSmallProps,
          border: '1px solid #4C5155',
          backgroundColor: theme.palette.background.paper,

          '&:hover': {
            backgroundColor: theme.palette.background.paper,
          },
          '&:disabled': {
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #2E2E32',
          },
        },
      },
      {
        props: { variant: 'secondary', size: 'large' },
        style: {
          ...defaultLargeProps,
          border: '1px solid #4C5155',
          backgroundColor: theme.palette.background.paper,

          '&:hover': {
            backgroundColor: theme.palette.background.paper,
          },
          '&:disabled': {
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #2E2E32',
          },
        },
      },

      // Tertiary
      {
        props: { variant: 'tertiary', size: 'small' },
        style: {
          ...defaultSmallProps,
          backgroundColor: theme.palette.background.paper,

          '&:hover': {
            backgroundColor: '#28282C',
          },
          '&:disabled': {
            backgroundColor: theme.palette.background.paper,
          },
          '&:active': {
            backgroundColor: '#2E2E32',
          },
          '&:focus': {
            backgroundColor: '#2E2E32',
          },
        },
      },
      {
        props: { variant: 'tertiary', size: 'large' },
        style: {
          ...defaultLargeProps,
          backgroundColor: theme.palette.background.paper,

          '&:hover': {
            backgroundColor: '#28282C',
          },
          '&:disabled': {
            backgroundColor: theme.palette.background.paper,
          },
          '&:active': {
            backgroundColor: '#2E2E32',
          },
          '&:focus': {
            backgroundColor: '#2E2E32',
          },
        },
      },
    ],
  },
});

export default themeButtonOverride;

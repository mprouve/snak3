import { Components, Theme } from '@mui/material';

const themeTextFieldOverride = (theme: Theme): Components => ({
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiInputAdornment-root': {
          color: theme.custom.colors.IconWeak,
        },

        '& .MuiOutlinedInput-root': {
          padding: '8px 12px',
          borderRadius: '4px',
          fontSize: '16px',
          color: theme.custom.colors.TextDefault,
          transition: 'background-color 150ms ease-out',
          backgroundColor: theme.custom.colors.FieldSearch,

          '& .MuiInputBase-input': {
            padding: '0',
          },

          '& fieldset': {
            borderColor: theme.custom.colors.BorderField,
          },
          '&:hover fieldset': {
            borderColor: theme.custom.colors.BorderField,
          },

          '&.Mui-focused fieldset': {
            borderColor: theme.custom.colors.BorderHighlight,
          },
          '&.Mui-focused': {
            backgroundColor: theme.custom.colors.FieldHighlight,
          },

          '&.Mui-error fieldset': {
            borderColor: theme.custom.colors.BorderCritical,
          },
          '&.Mui-error': {
            backgroundColor: theme.custom.colors.FieldCritical,
          },

          '&.Mui-disabled fieldset': {
            borderColor: theme.custom.colors.BorderField,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.custom.colors.BgLayer2,
            cursor: 'not-allowed',
          },
        },
      },
    },
  },
});

export default themeTextFieldOverride;

import { Components, Theme } from '@mui/material';

const themeAutocompleteOverride = (theme: Theme): Components => ({
  MuiAutocomplete: {
    styleOverrides: {
      popper: {
        padding: '5px 0 0',

        '& .MuiPaper-root': {
          border: `1px solid ${theme.custom.colors.BorderDefault}`,

          '& .MuiInputBase-adornedEnd': {
            paddingRight: '0',
          },

          '& .MuiAutocomplete-listbox': {
            backgroundColor: theme.custom.colors.BgLayer1,
          },

          '& .MuiAutocomplete-option': {
            ...theme.custom.typography.LabelLg,
            padding: '8px 16px',
          },

          '& .Mui-focused': {
            backgroundColor: theme.custom.colors.BgLayer2,
          },

          '& .MuiAutocomplete-option[aria-selected="true"]': {
            backgroundColor: theme.custom.colors.BgLayer2,
          },

          '& .MuiAutocomplete-option[aria-selected="true"].Mui-focused': {
            backgroundColor: theme.custom.colors.BgLayer2,
          },
        },
      },
    },
  },
});

export default themeAutocompleteOverride;

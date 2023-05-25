import { Components, Theme } from '@mui/material';
import themeTabOverride from './TabOverride';
import themeButtonOverride from './ButtonOverride';
import themeTypographyOverride from './TypographyOverride';
import themeAccordionOverride from './AccordionOverride';
import themeAlertOverride from './AlertOverride';
import themeTextFieldOverride from './TextFieldOverride';
import themeAutocompleteOverride from './AutoCompleteOverride';
import themeTableOverride from './TableOverride';
import themeRadioOverride from './RadioOverride';
import themeMenuOverride from './MenuOverride';
// import themeDialogOverride from './DialogOverride';
import themeLinearProgressOverride from './LinearProgressOverride';

const componentsOverrides = (theme: Theme): Components => ({
  ...themeTabOverride(theme),
  ...themeButtonOverride(theme),
  ...themeTypographyOverride(theme),
  ...themeAccordionOverride(theme),
  ...themeTableOverride(theme),
  ...themeRadioOverride(theme),
  ...themeAlertOverride(theme),
  ...themeTextFieldOverride(theme),
  ...themeAutocompleteOverride(theme),
  ...themeMenuOverride(theme),
  // ...themeDialogOverride(theme),
  ...themeLinearProgressOverride(theme),
});

export default componentsOverrides;

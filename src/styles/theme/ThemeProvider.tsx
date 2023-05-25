import { FC, ReactNode, useMemo } from 'react';
import { createTheme, ThemeProvider as BaseThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import useLocales from 'src/modules/i18n/useLocales';
import themeOptions from './themeOptions';
import componentsOverrides from './overrides';
import '../../modules/i18n';
import customThemeOptions from './customThemeOptions';

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const { currentLang } = useLocales();
  const theme = useMemo(() => {
    const theme = createTheme(themeOptions, currentLang, customThemeOptions);
    theme.components = componentsOverrides(theme);

    return theme;
  }, [currentLang]);

  return (
    <BaseThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </BaseThemeProvider>
  );
};

export default ThemeProvider;

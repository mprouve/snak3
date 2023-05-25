import { Theme as MUITheme } from '@mui/material';

interface IThemeColors {
  BgDefault: string;
  BgLayer1: string;
  BgLayer2: string;
  BgAside: string;
  BgAccent: string;
  BgAccentWeak: string;
  BgCritical: string;
  BgWarning: string;
  BgSuccess: string;
  BgHighlight: string;
  BgHighlightWeak: string;

  ActionAccent: string;
  ActionAccentHover: string;
  ActionCritical: string;
  ActionCriticalHover: string;
  ActionSecondary: string;
  ActionSecondaryHover: string;
  ActionTertiaryHover: string;
  ActionDisabled: string;

  BorderDefault: string;
  BorderSeparator: string;
  BorderField: string;
  BorderTertiaryHover: string;
  BorderAccent: string;
  BorderCritical: string;
  BorderHighlight: string;

  FieldDefault: string;
  FieldSearch: string;
  FieldDisabled: string;
  FieldCritical: string;
  FieldWarning: string;
  FieldSuccess: string;
  FieldHighlight: string;

  TextDefault: string;
  TextWeak: string;
  TextHint: string;
  TextDisabled: string;
  TextOnAccent: string;
  TextOnAccentWeak: string;
  TextOnCritical: string;
  TextOnWarning: string;
  TextOnSuccess: string;
  TextOnHighlight: string;
  TextCritical: string;
  TextWarning: string;
  TextSuccess: string;
  TextHighlight: string;

  IconWeak: string;
  IconDisabled: string;
  IconOnAccent: string;
  IconOnAccentWeak: string;
  IconOnCritical: string;
  IconOnWarning: string;
  IconOnSuccess: string;
  IconOnHighlight: string;
  IconCritical: string;
  IconWarning: string;
  IconSuccess: string;
  IconHighlight: string;

  White: string;
  Black: string;
  Yellow: string;
  Purple: string;
  // Others
  SlateDarkAlpha6: string;
}

interface IThemeBorderRadius {
  BorderRadiusRadiusScale: number;
  BorderRadiusRadiusNone: number;
  BorderRadiusRadiusSm: number;
  BorderRadiusRadiusBase: number;
  BorderRadiusRadiusMd: number;
  BorderRadiusRadiusLg: number;
  BorderRadiusRadiusXl: number;
  BorderRadiusRadius2Xl: number;
  BorderRadiusRadius3Xl: number;
  BorderRadiusRadiusFull: number;
}

interface IThemeShadow {
  color: string;
  type: string;
  x: number;
  y: number;
  blur: number;
  spread: number;
}

interface IThemeShadows {
  ShadowShadowXl: IThemeShadow[];
  ShadowShadowLg: IThemeShadow[];
  ShadowShadowMd: IThemeShadow[];
  ShadowShadowBase: IThemeShadow[];
  ShadowShadowInner: IThemeShadow[];
}

interface IThemeFontFamily {
  FontFamiliesHeadline: string;
  FontFamiliesBody: string;
  FontFamiliesMono: string;
}

interface IThemeSpacing {
  SpacingXs: number;
  SpacingSm: number;
  SpacingBase: number;
  SpacingMd: number;
  SpacingLg: number;
  SpacingXl: number;
  Spacing2Xl: number;
  Spacing3Xl: number;
  Spacing4Xl: number;
  Spacing5Xl: number;
  Spacing6Xl: number;
}

interface IThemeTypography {
  fontFamily: string;
  fontWeight: string;
  lineHeight: string;
  fontSize: number;
  letterSpacing: string;
  paragraphSpacing: number;
  textCase: string;
  textDecoration: string;
}

interface IThemeTypographies {
  HeadlineMobileLg: IThemeTypography;
  HeadlineMobileMd: IThemeTypography;
  HeadlineMobileSm: IThemeTypography;
  HeadlineDesktopLg: IThemeTypography;
  HeadlineDesktopMd: IThemeTypography;
  HeadlineDesktopSm: IThemeTypography;
  TitleLg: IThemeTypography;
  TitleLgStrong: IThemeTypography;
  BodyLg: IThemeTypography;
  BodyLgStrong: IThemeTypography;
  BodyMd: IThemeTypography;
  BodyMdStrong: IThemeTypography;
  LabelLg: IThemeTypography;
  LabelLgStrong: IThemeTypography;
  LabelMd: IThemeTypography;
  LabelMdStrong: IThemeTypography;
  LabelSm: IThemeTypography;
  CodeLg: IThemeTypography;
  CodeMd: IThemeTypography;
  CodeSm: IThemeTypography;
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    critical: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'headline.desktop-lg': true;
    'headline.desktop-md': true;
    'headline.desktop-sm': true;
    'headline.mobile-lg': true;
    'headline.mobile-md': true;
    'headline.mobile-sm': true;
    'title.lg': true;
    'title.lg-strong': true;
    'body.lg': true;
    'body.lg-strong': true;
    'body.md': true;
    'body.md-strong': true;
    'label.lg': true;
    'label.lg-strong': true;
    'label.md': true;
    'label.md-strong': true;
    'label.sm': true;
    'code.lg': true;
    'code.md': true;
    'code.sm': true;
    'text-weak': true;
    'text-default': true;
  }
}

interface ICustomTheme {
  custom: {
    colors: IThemeColors;
    borderRadius: IThemeBorderRadius;
    shadows: IThemeShadows;
    fontFamily: IThemeFontFamily;
    spacing: IThemeSpacing;
    typography: IThemeTypographies;
  };
}

declare module '@mui/material' {
  export interface Theme extends MUITheme {
    custom: {
      colors: IThemeColors;
      borderRadius: IThemeBorderRadius;
      shadows: IThemeShadows;
      fontFamily: IThemeFontFamily;
      spacing: IThemeSpacing;
      typography: IThemeTypographies;
    };
  }
}

import { Components, Theme } from '@mui/material';

const themeTypographyOverride = (theme: Theme): Components => ({
  MuiTypography: {
    variants: [
      // Headline
      {
        props: { variant: 'headline.desktop-lg' },
        style: {
          ...theme.custom.typography.HeadlineDesktopLg,
          fontFamily: `'${theme.custom.typography.HeadlineDesktopLg.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'headline.desktop-md' },
        style: {
          ...theme.custom.typography.HeadlineDesktopMd,
          fontFamily: `'${theme.custom.typography.HeadlineDesktopMd.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'headline.desktop-sm' },
        style: {
          ...theme.custom.typography.HeadlineDesktopSm,
          fontFamily: `'${theme.custom.typography.HeadlineDesktopSm.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'headline.mobile-lg' },
        style: {
          ...theme.custom.typography.HeadlineMobileLg,
          fontFamily: `'${theme.custom.typography.HeadlineMobileLg.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'headline.mobile-md' },
        style: {
          ...theme.custom.typography.HeadlineMobileMd,
          fontFamily: `'${theme.custom.typography.HeadlineMobileMd.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'headline.mobile-sm' },
        style: {
          ...theme.custom.typography.HeadlineMobileSm,
          fontFamily: `'${theme.custom.typography.HeadlineMobileSm.fontFamily}', sans-serif;`,
        },
      },

      // Title
      {
        props: { variant: 'title.lg' },
        style: {
          ...theme.custom.typography.TitleLg,
          fontFamily: `'${theme.custom.typography.TitleLg.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'title.lg-strong' },
        style: {
          ...theme.custom.typography.TitleLgStrong,
          fontFamily: `'${theme.custom.typography.TitleLgStrong.fontFamily}', sans-serif;`,
        },
      },

      // Body
      {
        props: { variant: 'body.lg' },
        style: {
          ...theme.custom.typography.BodyLg,
          fontFamily: `'${theme.custom.typography.BodyLg.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'body.lg-strong' },
        style: {
          ...theme.custom.typography.BodyLgStrong,
          fontFamily: `'${theme.custom.typography.BodyLgStrong.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'body.md' },
        style: {
          ...theme.custom.typography.BodyMd,
          fontFamily: `'${theme.custom.typography.BodyMd.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'body.md-strong' },
        style: {
          ...theme.custom.typography.BodyMdStrong,
          fontFamily: `'${theme.custom.typography.BodyMdStrong.fontFamily}', sans-serif;`,
        },
      },

      // label
      {
        props: { variant: 'label.lg' },
        style: {
          ...theme.custom.typography.LabelLg,
          fontFamily: `'${theme.custom.typography.LabelLg.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'label.lg-strong' },
        style: {
          ...theme.custom.typography.LabelLgStrong,
          fontFamily: `'${theme.custom.typography.LabelLgStrong.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'label.md' },
        style: {
          ...theme.custom.typography.LabelMd,
          fontFamily: `'${theme.custom.typography.LabelMd.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'label.md-strong' },
        style: {
          ...theme.custom.typography.LabelMdStrong,
          fontFamily: `'${theme.custom.typography.LabelMdStrong.fontFamily} `,
        },
      },
      {
        props: { variant: 'label.sm' },
        style: {
          ...theme.custom.typography.LabelSm,
          fontFamily: `'${theme.custom.typography.LabelSm.fontFamily}', sans-serif;`,
        },
      },

      // Code
      {
        props: { variant: 'code.lg' },
        style: {
          ...theme.custom.typography.CodeLg,
          fontFamily: `'${theme.custom.typography.CodeLg.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'code.md' },
        style: {
          ...theme.custom.typography.CodeMd,
          fontFamily: `'${theme.custom.typography.CodeMd.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'code.sm' },
        style: {
          ...theme.custom.typography.CodeSm,
          fontFamily: `'${theme.custom.typography.CodeSm.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'text-weak' },
        style: {
          color: theme.custom.colors.TextWeak,
          fontFamily: `'${theme.custom.typography.BodyMd.fontFamily}', sans-serif;`,
        },
      },
      {
        props: { variant: 'text-default' },
        style: {
          color: theme.custom.colors.TextDefault,
          fontFamily: `'${theme.custom.typography.BodyMd.fontFamily}', sans-serif;`,
        },
      },
    ],
  },
});

export default themeTypographyOverride;

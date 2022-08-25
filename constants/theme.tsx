const colors = {
  primary50: '#e4d9fd',
  primary100: '#c6affc',
  primary200: '#a281f0',
  primary400: '#5721d4',
  primary500: '#3e04c3',
  primary700: '#2d0689',
  primary800: '#200364',
  accent500: '#f7bc0c',
  white: '#fff',
  black: '#000',
  green: '#0ECD9D',
  error50: '#fcc4e4',
  error500: '#9b095c',
  gray500: '#39324a',
  gray700: '#221c30',
};

export const theme = {
  colors: {
    background: colors.white,
    primary: colors.primary500,
    primary_light: colors.primary400,
    primary_dark: colors.primary700,
    accent: colors.accent500,
    tertiary: colors.error500,
    tertiary_lighter: colors.error50,
    success: colors.primary200,
    danger: colors.error500,
    black: colors.black,
    white: colors.white,
  },
  fonts: {
    fontFamily: 'museo-sans',
  },
};

//incase we want to switch between dark and light mode
// export const darkTheme = {
//   ...theme,
//   colors: {
//     ...theme.colors,
//     background: colors.black,
//     foreground: colors.white,
//   },
// };

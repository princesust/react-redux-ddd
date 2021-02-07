export const Colors = {
  primary: {
    default: '#593ca2',
    gradient: '#823aa5'
  },
  secondary: {
    default: '#d6216b'
  },
  black: {
    dark: '#1C1C1C',
    default: '#262626'
  },
  white: {
    default: '#FFFFFF'
  },
  grey: {
    darkest: '#4C4C4C',
    darker: '#707070',
    dark: '#B9B9B9',
    default: 'rgb(250, 250, 250)',
    light: '#D8D8D8'
  }
}

export enum FontSize {
  text = '16px',
  title = '36px'
}

export enum Devices {
  mobile = '480px',
  tablet = '897px',
  laptop = '1224px',
  desktop = '1439px'
}

const theme = {
  colors: Colors,
  devices: Devices,
  typography: {
    fontSize: FontSize
  }
}

export type Theme = typeof theme

export type WithTheme = {
  theme: Theme
}

export default theme

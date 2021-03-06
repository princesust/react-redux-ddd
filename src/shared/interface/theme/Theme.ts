export const Colors = {
  primary: {
    default: '#262626',
    gradient: '#3b3b3b',
    light: '#757575',
    lightest: '#f5f7fa'
  },
  secondary: {
    default: '#e50914',
    light: '#ed585f'
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

export enum Padding {
  vertical = '40px',
  horizontal = '40px'
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

export enum Transitions {
  default = '150ms ease-in-out'
}

const theme = {
  colors: Colors,
  devices: Devices,
  transitions: Transitions,
  padding: Padding,
  typography: {
    fontSize: FontSize
  }
}

export type Theme = typeof theme

export type WithTheme = {
  theme: Theme
}

export default theme

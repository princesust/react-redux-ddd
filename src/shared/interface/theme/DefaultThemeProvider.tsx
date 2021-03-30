import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'
import theme from './Theme'

export interface DefaultThemeProviderProps {
  children: React.ReactNode
}

function DefaultThemeProvider(props: DefaultThemeProviderProps): React.ReactElement {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default React.memo(DefaultThemeProvider)

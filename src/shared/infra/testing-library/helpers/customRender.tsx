import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import DefaultThemeProvider from 'shared/interface/theme/DefaultThemeProvider'

interface ProvidersProps {
  children?: React.ReactNode
}

function Providers(props: ProvidersProps): React.ReactElement {
  const { children } = props
  return <DefaultThemeProvider>{children}</DefaultThemeProvider>
}

function customRender(ui: React.ReactElement): RenderResult {
  return render(ui, { wrapper: Providers })
}

export * from '@testing-library/react'

export default customRender

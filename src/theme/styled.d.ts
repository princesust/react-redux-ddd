/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'styled-components'

import { Theme } from './Theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

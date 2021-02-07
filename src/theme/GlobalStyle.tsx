import { createGlobalStyle } from 'styled-components'
import Fonts from './Fonts'

export default createGlobalStyle`
  ${Fonts}
  
  * {
    margin: 0px;
    padding: 0px;
    font-family: 'Arial', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
    border-color: initial;
    border-image: initial;
    border-style: initial;
    border-width: 0px;
    outline: 0px;
  }

  body {
    overflow-x: hidden;
  }
`

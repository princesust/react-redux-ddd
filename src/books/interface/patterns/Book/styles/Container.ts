import styled from 'styled-components'

import { Cover } from './Cover'
import { Details } from './Details'

export type View = 'list' | 'grid'

interface ContainerProps {
  view: View
}

function getContainerStylesByViewType(props: ContainerProps): string {
  const { view } = props

  const list = `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 20px 0px;
    ${Cover} {
      margin-right: 40px;
    }
  `
  const grid = `
    display: grid;
    align-content: center;
    grid-gap: 15px;
    width: 270px;
    padding: 50px 10px;
    ${Details} {
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  `
  const styleByType = { list, grid }

  return styleByType[view]
}

export const Container = styled.article`
  ${getContainerStylesByViewType}
`

import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'

import Icon from 'books/infra/fontawesome/components/Icon'
import { RootState } from 'store/RootState'
import { ViewState } from 'books/domain/ViewState'
import selectView from 'books/application/actions/selectView'

import { Container, ActiveButton, ViewButton } from './styles'

const mapState = (state: RootState): ViewState => ({
  view: state.view.view
})

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      selectView
    },
    dispatch
  )

const connector = connect(mapState, mapDispatch)

type ViewControllerProps = ConnectedProps<typeof connector>

function ViewController(props: ViewControllerProps): React.ReactElement {
  const { view, selectView } = props

  const handleGridViewClick = React.useCallback(() => {
    selectView('grid')
  }, [selectView])

  const handleListViewClick = React.useCallback(() => {
    selectView('list')
  }, [selectView])

  return (
    <Container>
      {view === 'list' && (
        <>
          <ActiveButton title="List view selected">
            <Icon icon="th-list" />
          </ActiveButton>
          <ViewButton onClick={handleGridViewClick} title="Grid view">
            <Icon icon="th" />
          </ViewButton>
        </>
      )}
      {view === 'grid' && (
        <>
          <ViewButton onClick={handleListViewClick} title="List view">
            <Icon icon="th-list" />
          </ViewButton>
          <ActiveButton title="Grid view selected">
            <Icon icon="th" />
          </ActiveButton>
        </>
      )}
    </Container>
  )
}

export default connector(ViewController)

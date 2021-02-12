import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'

import { RootState } from 'store/RootState'
import { BooksState } from 'books/domain/BooksState'
import { ListsState } from 'books/domain/ListsState'
import getMoreBooksByList from 'books/application/actions/getMoreBooksByList'
import setOffset from 'books/application/actions/setOffset'

import { Container, LoadMoreButton, Loader } from './styles'

type StateLoadMoreProps = Pick<BooksState, 'loaded' | 'offset' | 'loadedAll'> & Pick<ListsState, 'listSelected'>

const mapState = (state: RootState): StateLoadMoreProps => ({
  loaded: state.books.loaded,
  listSelected: state.filters.listSelected,
  offset: state.books.offset,
  loadedAll: state.books.loadedAll
})

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getMoreBooksByList,
      setOffset
    },
    dispatch
  )

const connector = connect(mapState, mapDispatch)

type LoadMoreProps = ConnectedProps<typeof connector>

function LoadMore(props: LoadMoreProps): React.ReactElement {
  const { loaded, getMoreBooksByList, listSelected, offset, loadedAll, setOffset } = props

  const handleLoadMoreClick = React.useCallback(() => {
    getMoreBooksByList(listSelected, offset + 20)
  }, [getMoreBooksByList, listSelected, offset, setOffset])

  return (
    <Container>
      {!loadedAll && (
        <LoadMoreButton onClick={handleLoadMoreClick}>{loaded ? 'Loade more' : <Loader size={20} />}</LoadMoreButton>
      )}
    </Container>
  )
}

export default connector(LoadMore)

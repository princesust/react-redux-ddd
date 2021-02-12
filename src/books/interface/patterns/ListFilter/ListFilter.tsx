import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect, ConnectedProps } from 'react-redux'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

import { RootState } from 'store/RootState'
import { ListsState } from 'books/domain/ListsState'
import getLists from 'books/application/actions/getLists'
import selectList from 'books/application/actions/selectList'
import loadedAll from 'books/application/actions/loadedAll'
import setOffset from 'books/application/actions/setOffset'

import { FilterMenuStyle } from './styles'
import Loader from './Loader'

const mapState = (state: RootState): Omit<ListsState, 'listSortOption' | 'listOffset'> => ({
  lists: state.filters.lists,
  listSelected: state.filters.listSelected
})

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getLists,
      selectList,
      loadedAll,
      setOffset
    },
    dispatch
  )

const connector = connect(mapState, mapDispatch)

type ListFilterProps = ConnectedProps<typeof connector>

function ListFilter(props: ListFilterProps): React.ReactElement {
  const { getLists, selectList, lists, listSelected, loadedAll, setOffset } = props

  React.useEffect(() => {
    getLists()
  }, [getLists])

  const handleSelectChange = React.useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      selectList(event.target.value as string)
      loadedAll(false)
      setOffset(0)
    },
    [selectList, loadedAll]
  )

  if (!lists || !lists.length) {
    return <Loader />
  }

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel id="category-select-label">List category</InputLabel>
      <Select
        labelId="category-select-label"
        label="List category"
        onChange={handleSelectChange}
        value={listSelected}
        MenuProps={FilterMenuStyle}
      >
        {lists.map(list => (
          <MenuItem key={list.id} value={list.list_name_encoded}>
            {list.list_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default connector(ListFilter)

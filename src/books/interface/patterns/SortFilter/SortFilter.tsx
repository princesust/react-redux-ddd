import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

import { RootState } from 'shared/domain/RootState'

import { ListsState } from 'books/domain/ListsState'
import selectListSortOption from 'books/application/actions/selectListSortOption'
import { ListSortOption } from 'books/domain/ListSortOption'

const mapState = (state: RootState): Pick<ListsState, 'listSortOption'> => ({
  listSortOption: state.filters.listSortOption
})

const mapDispatch = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      selectListSortOption
    },
    dispatch
  )

const connector = connect(mapState, mapDispatch)

type SortFilterProps = ConnectedProps<typeof connector>

function SortFilter(props: SortFilterProps): React.ReactElement {
  const { selectListSortOption, listSortOption } = props

  const handleSortFilterChange = React.useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      selectListSortOption(event.target.value as ListSortOption)
    },
    [selectListSortOption]
  )

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel id="sort-select-label">Sort by</InputLabel>
      <Select labelId="sort-select-label" label="Sort by" onChange={handleSortFilterChange} value={listSortOption}>
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="author">Author</MenuItem>
      </Select>
    </FormControl>
  )
}

export default connector(SortFilter)

import { ListsAction } from 'books/domain/ListsActions'
import { ListsState } from 'books/domain/ListsState'
import { ListCommands } from 'books/application/commands/ListCommands'
import { ListSortOption } from 'books/domain/ListSortOption'

const initialState = {
  lists: [],
  listSelected: 'hardcover-fiction',
  listSortOption: 'title' as ListSortOption
}

export default function reducer(state: ListsState = initialState, action: ListsAction): ListsState {
  switch (action.type) {
    case ListCommands.ListsLoaded:
      return {
        ...state,
        lists: action.lists
      }
    case ListCommands.ListSelected:
      return {
        ...state,
        listSelected: action.list
      }
    case ListCommands.ListSortOption:
      return {
        ...state,
        listSortOption: action.option
      }
    default:
      return state
  }
}

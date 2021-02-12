import { List } from './List'
import { ListSortOption } from './ListSortOption'

export interface ListsState {
  lists: List[]
  listSelected: string
  listSortOption: ListSortOption
}

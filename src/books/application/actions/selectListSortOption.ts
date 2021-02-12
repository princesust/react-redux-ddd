import { ListCommands } from 'books/application/commands/ListCommands'
import { ListSortOption } from 'books/domain/ListSortOption'

export interface SelectListSortOptionAction {
  type: ListCommands.ListSortOption
  option: ListSortOption
}

export default function selectListSortOption(option: ListSortOption): SelectListSortOptionAction {
  return {
    type: ListCommands.ListSortOption,
    option
  }
}

import { ListCommands } from 'books/application/commands/ListCommands'

export interface SelectListAction {
  type: ListCommands.ListSelected
  list: string
}

export default function selectList(list: string): SelectListAction {
  return {
    type: ListCommands.ListSelected,
    list
  }
}

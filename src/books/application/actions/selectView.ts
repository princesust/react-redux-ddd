import { View } from 'books/domain/View'
import { ViewCommands } from 'books/application/commands/ViewCommands'

export interface SelectViewAction {
  type: ViewCommands.ViewSelected
  view: View
}

export default function selectView(view: View): SelectViewAction {
  return {
    type: ViewCommands.ViewSelected,
    view
  }
}

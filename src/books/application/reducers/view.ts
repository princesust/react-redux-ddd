import { ViewCommands } from 'books/application/commands/ViewCommands'
import { ViewActions } from 'books/domain/ViewActions'
import { View } from 'books/domain/View'
import { ViewState } from 'books/domain/ViewState'

const initialState = {
  view: 'grid' as View
}

export default function reducer(state: ViewState = initialState, action: ViewActions): ViewState {
  switch (action.type) {
    case ViewCommands.ViewSelected:
      return { ...state, view: action.view }
    default:
      return state
  }
}

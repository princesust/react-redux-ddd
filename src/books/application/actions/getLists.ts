import { Dispatch } from 'redux'
import { v4 as uuidv4 } from 'uuid'

import { List } from 'books/domain/List'
import bookService from 'books/application/services/BookService'
import { ListCommands } from 'books/application/commands/ListCommands'

export interface GetListsAction {
  type: ListCommands.ListsLoaded
  lists: List[]
}

export default function getLists() {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const { results } = await bookService.fetchLists()
      const lists = results.map(list => ({ ...list, id: uuidv4() }))
      dispatch({
        type: ListCommands.ListsLoaded,
        lists
      })
    } catch (error) {
      /**
       * Do some error handling. log on Sentry maybe, dispatch a error action
       */
    }
  }
}

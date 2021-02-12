import { BooksAction } from './BooksAction'
import { ListsAction } from './ListsActions'
import { ViewActions } from './ViewActions'

export type RootActions = BooksAction | ListsAction | ViewActions

import { GetListsAction } from 'books/application/actions/getLists'
import { SelectListAction } from 'books/application/actions/selectList'
import { SelectListSortOptionAction } from 'books/application/actions/selectListSortOption'

export type ListsAction = GetListsAction | SelectListAction | SelectListSortOptionAction

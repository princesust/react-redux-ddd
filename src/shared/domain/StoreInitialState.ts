import { CachedState as BooksCachedState } from 'books/domain/CachedState'
import { RootState } from './RootState'

export type StoreInitialState = RootState | BooksCachedState

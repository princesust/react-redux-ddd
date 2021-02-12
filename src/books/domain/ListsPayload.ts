/* eslint-disable camelcase */
import { List } from './List'

export interface ListsPayload {
  copyright: string
  num_results: number
  results: List[]
  status: string
}

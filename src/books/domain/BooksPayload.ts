/* eslint-disable camelcase */
import { Book } from './Book'

export interface BooksPayload {
  status: string
  copyright: string
  num_results: number
  last_modified: string
  results: Book[]
}

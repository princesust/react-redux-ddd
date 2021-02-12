/* eslint-disable camelcase */
import { Isbn } from './Isbn'
import { BookDetail } from './BookDetail'
import { Review } from './Review'

export interface Book {
  id: string
  title: string
  author: string
  description: string
  book_image: string
  book_uri: string
  isbns: Isbn[]
  publisher?: string
  rank?: NumberConstructor
  weeks_on_list?: number
  reviews?: Review[]
  book_details?: BookDetail[]
}

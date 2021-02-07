/* eslint-disable camelcase */
import { Isbn } from './Isbn'
import { BookDetail } from './BookDetail'
import { Review } from './Review'

export interface Book {
  id: string
  list_name: string
  display_name: string
  bestsellers_date: string
  published_date: string
  rank: number
  rank_last_week: number
  weeks_on_list: number
  asterisk: number
  dagger: number
  amazon_product_url: string
  isbns: Isbn[]
  book_details: BookDetail[]
  reviews: Review[]
}

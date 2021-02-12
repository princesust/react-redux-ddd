import nytClient from 'books/infra/new-york-times/nytClient'
import { BooksPayload } from 'books/domain/BooksPayload'
import { ListsPayload } from 'books/domain/ListsPayload'

export class BookService {
  async fetchLists(): Promise<ListsPayload> {
    const response = await nytClient.get('lists/names.json')
    return response.data
  }

  async fetchByName(name: string, offset = 0): Promise<BooksPayload> {
    const query = new URLSearchParams({
      offset: offset.toString()
    })
    const response = await nytClient.get(`lists/${name}.json?${query}`)
    return response.data
  }
}

export default new BookService()

import nytClient from 'books/infra/new-york-times/nytClient'
import { BooksPayload } from 'books/domain/BooksPayload'

export class BookService {
  async fetchNames(offset = 0): Promise<BooksPayload | void> {
    try {
      const response = await nytClient.get('lists/names.json')
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
      // Log in Sentry maybe
    }
  }

  async fetchByName(name: string, offset = 0): Promise<BooksPayload | void> {
    const query = new URLSearchParams({
      offset: offset.toString()
    })
    try {
      const response = await nytClient.get(`lists/${name}.json?${query}`)
      console.log(response.data)
      return response.data
    } catch (err) {
      console.error(err)
      // Log in Sentry maybe
    }
  }
}

export default new BookService()

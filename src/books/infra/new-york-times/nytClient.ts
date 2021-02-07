import axios from 'axios'

if (!process.env.REACT_APP_NYT_API_KEY) {
  throw new Error('You must set REACT_APP_NYT_API_KEY in you .env file')
}

const apiKey = process.env.REACT_APP_NYT_API_KEY

const nytClient = axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/v3/',
  params: {
    'api-key': apiKey
  }
})

export default nytClient

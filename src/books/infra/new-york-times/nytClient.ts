import axios from 'axios'

if (!process.env.REACT_APP_NYT_API_KEY || !process.env.REACT_APP_NYT_BASE_URL) {
  throw new Error('You must set REACT_APP_NYT_API_KEY and REACT_APP_NYT_BASE_URL in you .env file')
}

const apiKey = process.env.REACT_APP_NYT_API_KEY
const baseURL = process.env.REACT_APP_NYT_BASE_URL

const nytClient = axios.create({
  baseURL,
  params: {
    'api-key': apiKey
  }
})

export default nytClient

import { CachedState } from 'books/domain/CachedState'

export default function saveStateInLocalStorage(state: CachedState): void {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    // LocalStorage failed because of browser setups, maybe log on sentry
  }
}

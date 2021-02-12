import { CachedState } from 'books/domain/CachedState'

export default function loadStateFromLocalStorage(): CachedState | undefined {
  try {
    const serializedState = localStorage.getItem('state')
    if (!serializedState) {
      return
    }
    return JSON.parse(serializedState)
  } catch (error) {}
}

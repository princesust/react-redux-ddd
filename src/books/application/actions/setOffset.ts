import { BooksCommands } from 'books/application/commands/BooksCommands'

export interface SetOffsetAction {
  type: BooksCommands.SetOffset
  offset: number
}

export default function setOffset(offset: number): SetOffsetAction {
  return {
    type: BooksCommands.SetOffset,
    offset
  }
}

import React from 'react'

import Headline from 'books/interface/patterns/Headline'

export default { title: 'Book/Patterns/Headline' }

export const standard = (): React.ReactElement => <Headline />

export const withTitle = (): React.ReactElement => <Headline title="Your books" />

import React from 'react'

import Typography, { TypographyVariant } from 'ui/Typography'

export default { title: 'UI/Typography' }

export const paragraph = (): React.ReactElement => <Typography>Paragraph</Typography>

export const span = (): React.ReactElement => <Typography variant={TypographyVariant.Span}>Span</Typography>

export const title = (): React.ReactElement => <Typography variant={TypographyVariant.Title}>Title</Typography>

export const subTitle = (): React.ReactElement => <Typography variant={TypographyVariant.Subtitle}>Subtitle</Typography>

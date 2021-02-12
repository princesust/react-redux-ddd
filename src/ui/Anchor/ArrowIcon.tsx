import React from 'react'
import { useTheme } from 'styled-components'

export default function ArrowIcon(): React.ReactElement {
  const theme = useTheme()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 21 20"
      color={theme.colors.primary.default}
      role="img"
    >
      <title>Internal Link</title>
      <g>
        <path
          d="M18.5 10H2.5M18.5 10L12 16.5M18.5 10L12 3.5"
          stroke={theme.colors.primary.default}
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  )
}

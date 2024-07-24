import { Typography } from '@mui/material'
import React from 'react'

const SubHeadingText = (props: { text: string, bold?: boolean }) => {
  return (
    <Typography variant="h2" fontWeight={props.bold ? 'bold' : undefined}>
      {props.text}
    </Typography>
  )
}

export default SubHeadingText

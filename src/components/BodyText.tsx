import { Typography } from '@mui/material'
import React from 'react'

const BodyText = (props: { text: string, bold?: boolean }) => {
  return (
    <Typography variant="body1" fontWeight={props.bold ? 'bold' : undefined}>
      {props.text}
    </Typography>
  )
}

export default BodyText

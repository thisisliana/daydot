import { Typography } from '@mui/material'
import React from 'react'
import { Email } from 'react-obfuscate-email'
import LocationMap from './LocationMap'
import BodyText from './BodyText'

const ContactBlock = () => {
  return (
    <>
      <Typography fontWeight={'bold'} sx={{ mt: 2 }}>Email</Typography>
      <Email email="hello@daydotmidwifery "><Typography>hello@daydotmidwifery</Typography></Email>

      <Typography fontWeight={'bold'} sx={{ mt: 2 }}>Phone</Typography>
      <BodyText text={'You can reach me at: +61 (0) 422 942 625'} />

      <Typography fontWeight={'bold'} sx={{ mt: 2 }}>Location</Typography>
      <BodyText text={'6 broadway street, Wooloongabba, Brisbane, QLD'} />
      <BodyText text={'(Free parking onsite)'} />
      <LocationMap height={400} width={400} />
    </>
  )
}

export default ContactBlock

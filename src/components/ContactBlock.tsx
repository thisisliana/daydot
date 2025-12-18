import { Typography } from '@mui/material'
import React from 'react'
import { Email } from 'react-obfuscate-email'
import LocationMap from './LocationMap'
import BodyText from './BodyText'

const ContactBlock = () => {
  return (
    <>
      <Typography fontWeight={'bold'} sx={{ mt: 2 }}>Email</Typography>
      <Email email="hello@daydotmidwifery.com.au "><Typography>hello@daydotmidwifery.com.au</Typography></Email>

      <Typography fontWeight={'bold'} sx={{ mt: 2 }}>Phone</Typography>
      <BodyText text={'You can reach me at: +61 (0) 422 942 625'} />

      <Typography fontWeight={'bold'} sx={{ mt: 2 }}>Location</Typography>
      <BodyText text={'BRISBANE'} />
      <BodyText text={'Please contact Liana directly for location details at the phone or email above.'} />
    </>
  )
}

export default ContactBlock

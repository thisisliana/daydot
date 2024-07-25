import { ROUTE_HEALTH_PROFS } from '@DRXPath/App'
import { Stack, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Stack display={'flex'} justifyContent={'center'} direction="row" spacing={2} paddingBottom={4}>
      <Link href={`#${ROUTE_HEALTH_PROFS}`} sx={{ textDecoration: 'none' }}>
        <Typography>For Health Professionals</Typography>
      </Link>
    </Stack>
  )
}

export default Footer

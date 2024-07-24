import { Box, Button, Card, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_ABOUT_ME, ROUTE_CONTACT, ROUTE_WHAT_I_OFFER } from './App'

const MenuButton = (props: {text: string, linkTo: string} ) => {
  return (
    <Link to={props.linkTo}>
      <Button variant="outlined" sx={{ m: 0.2 }}>
        {props.text}
      </Button>
    </Link>
  )
}

const PageHeader = () => {
  return (
    <Card sx={{ width: '100%', opacity: '0.5' }}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box>
          <Typography>Day Dot Midwifery</Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <MenuButton text="About Me" linkTo={ROUTE_ABOUT_ME} />
          <Link to={ROUTE_WHAT_I_OFFER}><Button variant="outlined" sx={{ m: 0.2 }}><Typography>What I Offer</Typography></Button></Link>
          <Link to={ROUTE_CONTACT}><Button variant="outlined" sx={{ m: 0.2 }}><Typography>Contact Me</Typography></Button></Link>
        </Box>
      </Box>
    </Card>
  )
}

export default PageHeader

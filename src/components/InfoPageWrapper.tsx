import React from 'react'
import { Box, Card, Typography } from '@mui/material'

const InfoPageWrapper = (props: {
  pageHeading: string
  children?: any
}) => {
  return (
    <>
      <Box sx={{ minHeight: '90vh', mt: 8 }}>
        <Typography variant={'h3'} sx={{ color: 'white' }}>{props.pageHeading}</Typography>
      </Box>
      <Box display={'flex'} flexDirection={'column'} flexGrow={1} >
        <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} sx={{
          zIndex: 999,
          mt: -40,
          bgcolor: 'white'
        }}>
          <Card variant="elevation" sx={{
            m: 3,
            p: 3,
            minWidth: 20,
            maxWidth: '90vw',
            opacity: 0.75
          }}>
            {props.children}
          </Card>
        </Box>
      </Box>
    </>
  )
}

export default InfoPageWrapper

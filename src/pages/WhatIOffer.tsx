import React from 'react'
import { Typography, Card, Box } from '@mui/material'
import InfoPageWrapper from '@DRXPath/components/InfoPageWrapper'
import SubHeadingText from '@DRXPath/components/SubHeadingText'
import { Service, services } from '@DRXPath/assets/services'
import BgImageLarge from '@DRXPath/assets/Images/tranquil_full_large.png'
import BgImageMedium from '@DRXPath/assets/Images/tranquil_full_medium.png'
import BgImageSmall from '@DRXPath/assets/Images/tranquil_full_large.png'
import ChangeBgImage from '@DRXPath/hooks/ChangeBgImage'
import { VIEWPORT_LARGE, VIEWPORT_MEDIUM } from './AboutMe'

const width = (window.innerWidth > 0) ? window.innerWidth : screen.width

let BgImage = BgImageLarge

if (width < VIEWPORT_MEDIUM) {
  BgImage = BgImageSmall
} else if (width < VIEWPORT_LARGE) {
  BgImage = BgImageMedium
}

const ServiceTile = (props: Service) => {
  return (
    <Card sx={{ width: 230, p: 1.25 }}>
      <Typography color="primary.main" sx={{ textAlign: 'center' }}>{props.title}</Typography>
      <Typography variant="body1">{props.serviceDetail}</Typography>
      {props.extras && <Typography variant="body1">{props.extras}</Typography>}
    </Card>
  )
}

const WhatIOffer = () => {
  return (
    <>
      <ChangeBgImage newImage={BgImage}/>
      <InfoPageWrapper pageHeading="What I Offer">
        <SubHeadingText text="The services I offer" />
        <br />
        <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} gap={2.5} >
          {services.map((s) => {
            return (
              <ServiceTile title={s.title} serviceDetail={s.serviceDetail} extras={s.extras} />
            )
          })}
        </Box>
      </InfoPageWrapper>
    </>
  )
}

export default WhatIOffer

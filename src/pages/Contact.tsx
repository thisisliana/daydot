import { ROUTE_HEALTH_PROFS } from '@DRXPath/App'
import ContactBlock from '@DRXPath/components/ContactBlock'
import InfoPageWrapper from '@DRXPath/components/InfoPageWrapper'
import { Button, Stack } from '@mui/material'
import BgImageLarge from '@DRXPath/assets/Images/pinkFlowers_large.png'
import BgImageMedium from '@DRXPath/assets/Images/pinkFlowers_medium.png'
import BgImageSmall from '@DRXPath/assets/Images/pinkFlowers_small.png'
import React from 'react'
import ChangeBgImage from '@DRXPath/hooks/ChangeBgImage'
import BodyText from '@DRXPath/components/BodyText'
import SubHeadingText from '@DRXPath/components/SubHeadingText'
import { VIEWPORT_LARGE, VIEWPORT_MEDIUM } from './AboutMe'

const width = (window.innerWidth > 0) ? window.innerWidth : screen.width

let BgImage = BgImageLarge

if (width < VIEWPORT_MEDIUM) {
  BgImage = BgImageSmall
} else if (width < VIEWPORT_LARGE) {
  BgImage = BgImageMedium
}

const Contact = () => {
  return (
    <>
      <ChangeBgImage newImage={BgImage}/>
      <InfoPageWrapper pageHeading="Contact Me">
        <SubHeadingText text="How to get in touch" />
        <ContactBlock />

        <Stack spacing={2} paddingTop={2}>
          <BodyText text="Woolloongabba, Brisbane is situated on Turrbal country. I acknowledge the Turrbal people as first to birth here and the original birth workers of the area. I honor their ongoing relationship with the land and heritage and I express my gratitude to past, present, and future elders and strive for a promising future for Indigenous communities." />
          <Button variant="outlined" href={`#${ROUTE_HEALTH_PROFS}`} sx={{ mt: 2, maxWidth: '300px' }}>For Health Professionals</Button>
        </Stack>

      </InfoPageWrapper>
    </>
  )
}

export default Contact

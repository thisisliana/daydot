import { Button, Typography } from '@mui/material'
import React from 'react'
import BodyText from '@DRXPath/components/BodyText'
import SubHeadingText from '@DRXPath/components/SubHeadingText'
import { ROUTE_CONTACT } from '@DRXPath/App'
import InfoPageWrapper from '@DRXPath/components/InfoPageWrapper'
import BgImageLarge from '@DRXPath/assets/Images/LQPreg_large.png'
import BgImageMedium from '@DRXPath/assets/Images/LQPreg_medium.png'
import BgImageSmall from '@DRXPath/assets/Images/LQPreg_small.png'
import ChangeBgImage from '@DRXPath/hooks/ChangeBgImage'
import LianaImage from '@DRXPath/assets/Images/liana.jpeg'

export const VIEWPORT_LARGE = 1200

export const VIEWPORT_MEDIUM = 800

const width = (window.innerWidth > 0) ? window.innerWidth : screen.width

let BgImage = BgImageLarge

if (width < VIEWPORT_MEDIUM) {
  BgImage = BgImageSmall
} else if (width < VIEWPORT_LARGE) {
  BgImage = BgImageMedium
}

const AboutMe = () => {
  return (
    <>
      <ChangeBgImage newImage={BgImage}/>
      <InfoPageWrapper pageHeading="About Me">
        <SubHeadingText text="Hello, I'm Liana. I'm honoured that you're visiting my page - but I'm also acutely aware that those who come here are seeking refuge when facing some of life's hardest times." />
        <Typography fontWeight={'bold'} sx={{ mt: 2 }}>A little bit about me</Typography>

        <img src={LianaImage} height={'200px'} style={{ borderRadius: '6px', float: 'right', margin: '10px' }}/>

        <BodyText text={"I have been a midwife since my mid 20's, caring for women and their families through pregnancy, birth and in the delicate weeks following the arrival of a new baby. Apparently when I was four years old, I asked my mum “what's the name of the ladies who help mums give birth?” And since learning the word, I would now describe midwifery as a calling rather than a career."} />
        <BodyText text={"My years as a midwife have taken on a very different direction to what I ever imagined. The same week I graduated as a midwife, my sister gave birth to a baby boy who died soon after he was born. I wondered if I possessed the strength to embrace a profession that could involve immense suffering and pain. But what unfolded from Isaac's birth and death, was the new calling to support women and their families at a time when birth and death meet. I now have over 15 years experience of supporting families through the death of a baby- an area of my work I hold dear to my heart."} />
        <BodyText text={'People often ask me why I would choose to work in the hardest or saddest times- but I see this work as being able to provide light when life feels so painful, isolating and dark.'} />
        <BodyText text={'The “Pregnancy After Loss Clinic”- a model of care at the Mater Mothers Hospital was born from the need for more support through pregnancy after loss. Over the course of creating and coordinating this model of care, I was blessed to learn so much from the families I cared for- over 200 families in 9 years.'} />
        <BodyText text={'When I embarked on my own journey to becoming a mum, I was met with challenges to conceive- needing to engage in the world of IVF. That felt like I needed to learn a whole new degree!'} />
        <BodyText text={"My first pregnancy began in 2017. “Dot” was nicknamed at her conception- after the picture of an embryo was handed to me at the time of embryo transfer- I saw a little “Dot”. A perfect clump of cells we later learned were growing in wonky ways and would mean she could never live. I birthed “Audrey Dot” on Valentine's Day in 2018 at just 23 weeks."} />
        <BodyText text={'Despite giving her a full name at birth, her nickname “Dot” has stuck.'} />
        <BodyText text={"What followed Dot's birth then was my own tumultuous journey of grief whilst embarking on my own pregnancy after loss. From morning sickness, to bleeding and a level of anxiety I never knew could be experienced, I finally held a chunky, healthy baby in my arms- yet never imagined having to navigate the balance of grief and joy as I parented Dots big…little sister “Hazel”."} />
        <BodyText text={'Grief has taught me if you want to survive- you need to face it, embrace it, and to feel it.'} />
        <BodyText text={'Along with supporting the bereaved, another passion I have found myself working in is the area of birth trauma debriefing. Recently I understood further training to support mothers, fathers and birth workers in debriefing birth. This training has equipped me to provide support to families who feel their childbirth experience was traumatic or feel that their birth still feels difficult or uncomfortable to sit with. Within a birth debrief you are provided opportunity to explore your birth and are assisted to process what these experiences mean for you. Birth debriefing is available for women who have birthed a baby of any gestation and with any outcome.'} />
        <BodyText text={'I welcome you as you are, from your day dot.'} />
        <Button variant="outlined" href={`#${ROUTE_CONTACT}`}>Get in touch</Button>
      </InfoPageWrapper>
    </>
  )
}

export default AboutMe

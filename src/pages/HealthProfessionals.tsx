import { ROUTE_CONTACT } from '@DRXPath/App'
import BodyText from '@DRXPath/components/BodyText'
import InfoPageWrapper from '@DRXPath/components/InfoPageWrapper'
import { Button, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import SpaIcon from '@mui/icons-material/Spa'
import ChangeBgImage from '@DRXPath/hooks/ChangeBgImage'
import BgImageLarge from '@DRXPath/assets/Images/pinkDots_large.png'
import BgImageMedium from '@DRXPath/assets/Images/pinkDots_medium.png'
import BgImageSmall from '@DRXPath/assets/Images/pinkDots_small.png'
import { VIEWPORT_LARGE, VIEWPORT_MEDIUM } from './AboutMe'

const width = (window.innerWidth > 0) ? window.innerWidth : screen.width

let BgImage = BgImageLarge

if (width < VIEWPORT_MEDIUM) {
  BgImage = BgImageSmall
} else if (width < VIEWPORT_LARGE) {
  BgImage = BgImageMedium
}

const topicsIncludeText = [
  'how to break bad news',
  'providing bereavement care for families',
  'Memory making and collection',
  'Talking to families about postnatal investigations and autopsy consent ',
  'Supporting families to see and hold their baby/child and taking their baby home ',
  'Long term support and needs for bereaved families '
]

const topicsIncludeExtendsToText = [
  'companies and/or businesses who have a colleague experience baby loss.',
  'Student midwife education',
  'Workplaces involved in perinatal care (eg GP’s, midwives, sonographers etc) '
]

const TopicsListItem = (props: {text: string }) => {
  return (
    <ListItem>
      <ListItemIcon sx={{ minWidth: '30px' }}>
        <SpaIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText
        primary={props.text}
      />
    </ListItem>
  )
}

const HealthProfessionals = () => {
  return (
    <InfoPageWrapper pageHeading="Health Professionals">
      <ChangeBgImage newImage={BgImage}/>
      <Typography fontWeight={'bold'} sx={{ mt: 2 }}>For Health Care Professionals</Typography>

      <BodyText text={'Brisbane based Midwife offering support for parents from day dot.'} />
      <BodyText text={'As a midwife with 21 years of experience, I have worked with women and their health care providers in both the public and private sectors. I provide compassionate bereavement care to families in the immediate and long term period following any loss at any gestation.'} />
      <BodyText text={'I coordinated a Pregnancy After Loss Clinic at a large tertiary hospital in Brisbane, as well as working along side parents navigating the loss of their baby through stillbirth, neonatal death and palliative care.'} />
      <BodyText text={'I have completed a week long intensive course to specialise in birth trauma debriefing.'} />
      <BodyText text={"I don't require a referral, however if a woman is choosing shared care option of care, I would like to discuss this with you prior to the arrangement being made to ensure the best support can be given for the woman."} />

      <Typography fontWeight={'bold'} sx={{ mt: 2 }}>Referrals welcome for:</Typography>
      <BodyText text={'IVF support: emotional support through cycles / embryo & cycle loss support / navigating early pregnancy'} />
      <BodyText text={'Bereavement support: miscarriage, stillbirth & neonatal death (immediately following and long term support) / in home postnatal support and midwifery care after death / midwifery support for parents of a palliative baby.'} />
      <BodyText text={'Pregnancy After Loss: emotional support / pregnancy care / one on one education / birth preparation / home visiting & postnatal support.'} />
      <BodyText text={'Parenting after loss: emotional support / navigating normal responses/ home visiting & postnatal support.'} />
      <BodyText text={'Termination of Pregnancy for Medical Reasons: emotional and empathetic support / preparation for fetocide / pregnancy care of a baby who will not live / birth education and labour induction preparation / postnatal care.'} />

      <Typography fontWeight={'bold'} sx={{ mt: 2 }}>Pregnancy care:</Typography>
      <BodyText text={'Early pregnancy: education / testing options'} />
      <BodyText text={'Birth preparation: one on one education / identifying and outlining birth preferences / planning for birthing a baby who will not live.'} />
      <BodyText text={'In home newborn support: nursery preparation / home safety / emotional preparation / postnatal support.'} />
      <BodyText text={'Parenting and baby education after the 6 week postnatal period.'} />
      <BodyText text={'1:1 in home Postnatal support: breastfeeding & bottle feeding support / education / settling and sleep / resources for new parents.'} />
      <BodyText text={'Birth debriefing & birth trauma debriefing.'} />
      <BodyText text={'An opportunity for women to have their birth story understood and heard. To gain a deeper understanding of what happened, why and honouring all feelings that stem from it. An opportunity to explore and process feelings of trauma that may be lingering triggers to the events that unfolded.'} />
      <BodyText text={'Birth trauma debriefing is also extended to health care workers, birth support people, doulas and midwives.'} />

      <Typography fontWeight={'bold'} sx={{ mt: 2 }}>Workplace support and education: for health care professionals who would like further training and education when caring for bereaved families.</Typography>

      <Typography sx={{ m: 0 }}>Topics include:</Typography>

      <List dense>
        {topicsIncludeText.map((i) => {
          return (
            <TopicsListItem text={i} />
          )
        })
        }
      </List>

      <Typography sx={{ m: 0 }}>Education extends to:</Typography>

      <List dense>
        {topicsIncludeExtendsToText.map((i) => {
          return (
            <TopicsListItem text={i} />
          )
        })
        }
      </List>

      <Button variant="outlined" href={`#${ROUTE_CONTACT}`} sx={{ marginTop: 2 }}>Get in touch</Button>
    </InfoPageWrapper>
  )
}

export default HealthProfessionals

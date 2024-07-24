import React, { ReactElement } from "react"

export type Service = {
  title: string
  serviceDetail: string
  extras?: ReactElement
}

const BirthDebriefingList = () => {
  return (
    <ul>
      <li>Grandparents</li>
      <li>Birth partners</li>
      <li>Midwives</li>
      <li>Birth helpers, workers and birth supporters (also including dads, husbands, wives and grandmothers)</li>
    </ul>
  )
}

export const services: Service[] = [
  {
    title: 'IVF Support',
    serviceDetail: 'Learning about your cycle, how to safely inject medications, support through cycles and education about egg collection/pick up/transfers etc.'
  },
  {
    title: 'Pregnancy/antenatal support',
    serviceDetail: "Pregnancy support or further education in conjunction with your health care provider. Maybe you find your GP/obstetrician appointments really quick paced and you have a lot of questions you'd like to go over. I offer regular or one off pregnancy appointments."
  },
  {
    title: 'Navigating early pregnancy decision making',
    serviceDetail: "Tests tests tests! Early pregnancy is full of tests and investigations. I can help you learn which ones are relevant to you and take time going over the risks/benefits of those you'd like to have."
  },
  {
    title: 'Birth mapping and planning/preparing for labour and birth',
    serviceDetail: 'With over 20 years of supporting women in labour I can provide knowledge and education to assist you to plan for birth and the early hours and days with your new baby.'
  },
  {
    title: 'In home nursery/house/baby prep',
    serviceDetail: 'Not sure what to buy? Not sure if you need all of this stuff?! I can come to your home and help create a nursery that is safe, practical and ensure you have all the essential items you need.'
  },
  {
    title: 'Pregnancy after loss support',
    serviceDetail: 'With over 15 years of experience supporting families embarking on the tumultuous journey that PAL is, as well as my own experience, I can provide support in any capacity at any gestation- especially at the gestation of your previous loss.'
  },
  {
    title: 'Parenting after loss support',
    serviceDetail: "Often a forgotten area with little preparation of the reality of having a live baby- as parents just cannot fathom it really happening or don't want to jinx themselves. I can help with navigating emotions, planning and preparing for baby, breastfeeding and bottle feeding and normalising the roller coaster that PAL is."
  },
  {
    title: 'Miscarriage support',
    serviceDetail: 'Provide support during a miscarriage or following, including memory making and grief support.'
  },
  {
    title: 'Parenting and baby education after 6 weeks',
    serviceDetail: 'Sometimes the challenges within parenting extend beyond the 6 week timeframe where midwifery support ends. Support with sleep, settling, relationship challenges, parenting reality, going back to work.'
  },
  {
    title: '1:1 in home Postnatal support',
    serviceDetail: "Bringing home a newborn can be overwhelming. I can help with getting sleep, feeding options, parenting challenges, making your home baby friendly, education about newborn behaviours and patterns. (Please note I am not a sleep consultant and do not follow/support/recommend any form of 'cry it out' sleep options/settling techniques)."
  },
  {
    title: 'Breastfeeding support',
    serviceDetail: 'Many women can find breastfeeding challenging. I can offer support with attachment, education, navigating complications, mastitis care etc as well as referring to amazing lactation consultants around Brisbane if further support is needed.'
  },
  {
    title: 'Oncall telephone advice/postnatal support',
    serviceDetail: "Just got a few questions you'd like to go over? Or not sure who to call? Perhaps you're navigating baby's first illness…I can help to work through some of these challenges."
  },
  {
    title: 'Bereavement support',
    serviceDetail: "In hospital or home private bereavement support. Including care of you and your baby, choosing funeral options, education about memory creation and assistance to collect memories of your baby. I can help to navigate the emptiness of 'what do we do now?', returning to work, supporting family members and surviving loss."
  },
  {
    title: 'Navigating medical termination of pregnancy',
    serviceDetail: 'Hearing your baby has a major medical complication or life limiting condition (and understanding your choices/options) can feel overwhelming. I can provide support to prepare for all steps involved as well as decision making and surviving guilt, shame, sadness and grief.'
  },
  {
    title: 'Birth debriefing/ birth trauma debriefing',
    serviceDetail: "There is great healing in having your birth story heard, especially if you feel there's areas that you still carry with you. I have specialist training to support women and their families who have experienced birth trauma. Birth debriefing extends to: ",
    extras: <BirthDebriefingList />
  }
]

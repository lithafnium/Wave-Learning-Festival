import React from 'react'
import { Card, Speaker, Info, Header, Details, Button } from './styles'

const SpeakerCard = ({ name, img, title, color, date }) => {
  return (
    <Card>
      <Speaker src={img} color={color}/>
      <Info>
        <Header>{name}</Header>
        <Details>{title}</Details>
        <p>Date: {date}</p>
        <Button color = {color} onClick={() => window.open('/speaker-sign-up', '_blank')}>RSVP Now</Button>
      </Info>
    </Card>
  )
}

export default SpeakerCard

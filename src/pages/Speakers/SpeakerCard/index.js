import React from 'react'
import { Card, Speaker, Info, Header, Details } from './styles'

const SpeakerCard = ({ name, img, title, color }) => {
  return (
    <Card>
      <Speaker src={img} color={color}/>
      <Info>
        <Header>{name}</Header>
        <Details>{title}</Details>
      </Info>
    </Card>
  )}

export default SpeakerCard

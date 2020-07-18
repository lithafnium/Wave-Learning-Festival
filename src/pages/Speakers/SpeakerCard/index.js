import React from 'react'
import { Card, Speaker, Info, Header, Details } from './styles'
import Andrew from './andrew_cramer.jpg'
const SpeakerCard = () => {
  return (
    <Card>
      <Speaker src={Andrew}/>
      <Info>
        <Header>Andy Cramer</Header>
        <Details>Professor, Los Angeles Mission College</Details>
      </Info>
    </Card>
  )}

export default SpeakerCard

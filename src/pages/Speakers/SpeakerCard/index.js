import React, { useState } from 'react'
import { Card, Speaker, Info, Header, Details, Button } from './styles'
import {
  SpeakerContainer,
  Description,
  SpeakerContainerInner,
  Heading,
  Triangle
} from './styles'
import AnimateHeight from 'react-animate-height'


const SpeakerCard = ({ name, img, title, color, date, desc, bio }) => {
  const [show, toggleShow] = useState(false)
  return (
    <div>
      <SpeakerContainer>
        <SpeakerContainerInner>
          <Speaker src={img} color={color}/>
          <div style={{ gridColumn: 'span 2', alignSelf: 'center' }}>
            <Info>
              <Header color = {color}>{name}</Header>
              <Details>{title}</Details>
              <p>Date: {date}</p>
              <Button color = {color} onClick={() => toggleShow(!show)}>Learn More</Button> &nbsp;&nbsp;
              <Button color = {color} onClick={() => window.open('/speaker-sign-up', '_blank')}>RSVP Now</Button>
            </Info>
          </div>
        </SpeakerContainerInner>
      </SpeakerContainer>
      <AnimateHeight height={show ? 'auto' : 0} duration={200}>
      <SpeakerContainer style={{ marginTop: '2em' }}>
        <Triangle/>
        <SpeakerContainerInner style={{ display: 'block' }}>
          <Heading color = {color}>Description: </Heading>
          <Description> {desc} </Description>
          <Heading color = {color}>Bio: </Heading>
          <Description> {bio} </Description>
          <Button color = {color} onClick={() => window.open('/speaker-sign-up', '_blank')}>RSVP Now</Button>
        </SpeakerContainerInner>
      </SpeakerContainer>
      </AnimateHeight>
    </div>
  )
}

export default SpeakerCard

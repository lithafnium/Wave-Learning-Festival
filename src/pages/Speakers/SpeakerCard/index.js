import React, { useState } from 'react'
import {
  Card, Speaker, Info, Header, Details, Button,
  SpeakerContainer,
  Description,
  SpeakerContainerInner,
  Heading,
  Triangle,
  ImageContainer
} from './styles'

import AnimateHeight from 'react-animate-height'

const SpeakerCard = ({ name, img, title, color, date, desc, bio, hasTime }) => {
  const [show, toggleShow] = useState(false)
  return (
    <div>
      <SpeakerContainer>
        <SpeakerContainerInner>
          <ImageContainer>
            <Speaker src={img} color={color}/>

          </ImageContainer>
          <Info>
            <Header color = {color}>{name}</Header>
            <Details>{title}</Details>
            <p>Date: {date}</p>
            <Button color = {color} onClick={() => toggleShow(!show)}>Learn More</Button> &nbsp;&nbsp;
            {hasTime && <Button color = {color} onClick={() => window.open('/speaker-sign-up', '_blank')}>RSVP Now</Button>}
          </Info>
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
            <Heading color = {color}>Scheduled Date: </Heading>
            <Description> {date} </Description>
            {hasTime && <Button color = {color} onClick={() => window.open('/speaker-sign-up', '_blank')}>RSVP Now</Button>}
          </SpeakerContainerInner>
        </SpeakerContainer>
      </AnimateHeight>
    </div>
  )
}

export default SpeakerCard

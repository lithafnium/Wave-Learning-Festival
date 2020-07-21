import React, { useState } from 'react'
import Nicole from '../nicole_chung.jpg'
import {
  SpeakerContainer,
  SpeakerImage,
  Description,
  Content,
  SpeakerContainerInner,
  Button,
  Heading,
  Triangle
} from './styles'
import AnimateHeight from 'react-animate-height'

const FeaturedSpeaker = ({ name, date, picture, subtitle, description, bio }) => {
  const [show, toggleShow] = useState(false)

  return (
    <div>
      <SpeakerContainer>
        <SpeakerContainerInner>
          <SpeakerImage src={picture} />
          <div>
            <h1>{name}</h1>
            <Description>{subtitle}</Description>
            <p>{date}</p>
            <Button onClick={() => toggleShow(!show)}>Learn More</Button> &nbsp;&nbsp;
            <Button onClick={() => window.open('/speaker-sign-up', '_blank')}>RSVP Now</Button>
          </div>
        </SpeakerContainerInner>
      </SpeakerContainer>
      <AnimateHeight height={show ? 'auto' : 0} duration={200}>
        <SpeakerContainer style={{ marginTop: '2em' }}>
          <Triangle/>
          <SpeakerContainerInner style={{ display: 'block' }}>
            {description &&
              <><Heading>Description: </Heading>
              <Description>
              {description}
              </Description></>}
            <Heading>Bio:</Heading>
            <Description style={{whiteSpace: "pre-wrap"}}>{bio}</Description>
            <Heading>Scheduled Date:</Heading>
            <Content>{date}</Content>

            <Button onClick={() => window.open('/speaker-sign-up', '_blank')}>RSVP Now</Button>
          </SpeakerContainerInner>
        </SpeakerContainer>
      </AnimateHeight>
    </div>
  )
}

export default FeaturedSpeaker

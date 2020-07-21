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

const FeaturedSpeaker = ({ picture, description }) => {
  const [show, toggleShow] = useState(false)

  return (
    <div>
      <SpeakerContainer>
        <SpeakerContainerInner>
          <SpeakerImage src={Nicole} />
          <div>
            <h1>Nicole Chung: Why Your Stories Matter</h1>
            <Description>Author of All You Can Ever Know, Editor in Chief of Catapult Magazine</Description>
            <p>Date: 7/28 2:30-3:30 PM EDT</p>
            <Button onClick={() => toggleShow(!show)}>Learn More</Button> &nbsp;&nbsp;
            <Button onClick={() => window.open('/speaker-sign-up', '_blank')}>RSVP Now</Button>
          </div>
        </SpeakerContainerInner>
      </SpeakerContainer>
      <AnimateHeight height={show ? 'auto' : 0} duration={200}>
        <SpeakerContainer style={{ marginTop: '2em' }}>
          <Triangle/>
          <SpeakerContainerInner style={{ display: 'block' }}>
            <Heading>Description: </Heading>
            <Description>
            Award-winning author and editor Nicole Chung will cover topics related to writing, revision, publishing, and community in a frank, participant-driven discussion with students.
            </Description>
            <Heading>Bio:</Heading>
            <Description>
            Nicole Chung's nationally bestselling debut memoir All You Can Ever Know was a finalist for the National Book Critics Circle Award for Autobiography, longlisted for the PEN Open Book Award, and named a Best Book of the Year by The Washington Post, The Boston Globe, NPR, TIME, Library Journal, BuzzFeed, Goodreads, and the Chicago and Seattle Public Library systems, among many others. Nicole has written for numerous publications, including The New York Times, The Guardian, GQ, TIME, and Longreads, and has taught writing workshops for Kundiman, Catapult, and PEN/Faulkner’s Writers in Schools program. She is the editor in chief of the National Magazine Award-winning Catapult magazine, co-editor of the immigration anthology A Map Is Only One Story, and the former managing editor of the beloved, now-shuttered website The Toast. Her next book is forthcoming from Ecco Books/HarperCollins.            </Description>
            <Heading>Scheduled Date:</Heading>
            <Content>7/28 2:30-3:30 PM EDT</Content>

            <Button onClick={() => window.open('/speaker-sign-up', '_blank')}>RSVP Now</Button>
          </SpeakerContainerInner>
        </SpeakerContainer>
      </AnimateHeight>
    </div>
  )
}

export default FeaturedSpeaker

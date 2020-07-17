import React from 'react'

import Nate from '../nate_saal.jpg'
import { SpeakerContainer, SpeakerImage, Description, SpeakerContainerInner, Button } from './styles'
const SpeakerCard = ({ picture, description }) => {
  return (
    <SpeakerContainer>
      <h1>Nate Saal: The Art and Science of Making Chocolate</h1>
      <p>CEO, CocoTerra Company</p>
      <SpeakerContainerInner>
        <SpeakerImage src={Nate} />
        <div>
          <Description>
        I am a San Francisco Bay Area native with a passion for technology and food. For the last 25 years, I’ve been in the start-up world as a founder or part of the founding team of multiple software, middleware and hardware companies.  With academic training in molecular biophysics and biochemistry, I've had a lifelong interest in technology, food science and DIY food making.  Professionally, I've spent my career as a serial entrepreneur bringing new technologies to market.  When I'm not hard at work, you'll find me beekeeping, making wine, olive oil and vinegar, growing exotic fruits, and a host of weekend farming activities.  My latest venture, CocoTerra, sits at the intersection of technology and food.  It draws on my knowledge and skills from all my different business experiences to simplify the chocolate-making process using smart software and hardware design so anyone can become a creative, successful and proud chocolate-maker.  Go to www.cocoterra.com if you are curious to learn more.
          </Description>
          <Button>RSVP Now</Button>
        </div>
      </SpeakerContainerInner>
    </SpeakerContainer>
  )
}

export default SpeakerCard

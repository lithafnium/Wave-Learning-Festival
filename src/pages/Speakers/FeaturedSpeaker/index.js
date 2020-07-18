import React, { useState } from 'react'
import Nate from '../nate_saal.jpg'
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
          <SpeakerImage src={Nate} />
          <div>
            <h1>Nate Saal: The Art and Science of Making Chocolate</h1>
            <p>CEO, CocoTerra Company</p>
            <Button onClick={() => toggleShow(!show)}>RSVP Now</Button>
          </div>
        </SpeakerContainerInner>
      </SpeakerContainer>
      <AnimateHeight height={show ? 'auto' : 0} duration={200}>
        <SpeakerContainer style={{ marginTop: '2em' }}>
          <Triangle/>
          <SpeakerContainerInner style={{ display: 'block' }}>
            <Heading>Description: </Heading>
            <Description>Learn how to make chocolate from bean to bar.  Did you know that chocolate comes from a fruit?  Did you know that chocolate is a fermented food?  Did you know that the chocolate bar is a new invention in the history of chocolate?  We'll explore the ingredients used to make chocolate (and where to get them) as well as all the processing steps required to transform cocoa beans into delicious chocolate.  We'll dig a little deeper into the physics and chemistry involved in each of the processing steps and hopefully turn you into a chocolate geek.  When you see a cacao % on a bar of chocolate, you'll learn what that really means.  When you leave a chocolate bar in a hot car, you'll understand why it ends up looking white and crumbly.  And you'll learn about the chemistry of tempering so you know what's really happening when a recipe asks you to "temper your chocolate".  Finally, we'll end with a guide to tasting chocolate.  Grab a bar of your favorite chocolate and learn how to taste like a pro!</Description>
            <Heading>Bio:</Heading>
            <Description>
        I am a San Francisco Bay Area native with a passion for technology and food. For the last 25 years, I’ve been in the start-up world as a founder or part of the founding team of multiple software, middleware and hardware companies.  With academic training in molecular biophysics and biochemistry, I've had a lifelong interest in technology, food science and DIY food making.  Professionally, I've spent my career as a serial entrepreneur bringing new technologies to market.  When I'm not hard at work, you'll find me beekeeping, making wine, olive oil and vinegar, growing exotic fruits, and a host of weekend farming activities.  My latest venture, CocoTerra, sits at the intersection of technology and food.  It draws on my knowledge and skills from all my different business experiences to simplify the chocolate-making process using smart software and hardware design so anyone can become a creative, successful and proud chocolate-maker.  Go to www.cocoterra.com if you are curious to learn more.
            </Description>
            <Heading>Scheduled Date:</Heading>
            <Content>Wave 4: 8/1</Content>

            <Button onClick={() => window.open('/speaker-sign-up', '_blank')}>RSVP Now</Button>
          </SpeakerContainerInner>
        </SpeakerContainer>
      </AnimateHeight>
    </div>
  )
}

export default FeaturedSpeaker

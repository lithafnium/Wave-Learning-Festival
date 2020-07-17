import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import FeaturedSpeaker from './FeaturedSpeaker'
import { Featured } from './styles'
import AnimateHeight from 'react-animate-height'
import SpeakerCard from './SpeakerCard'

const Speakers = () => {
  return (
    <div>
      <Navbar/>
      <Container style={{ minHeight: '0vh' }}>
        <ContainerInner>
          <Featured>Featured Speaker : </Featured>
          <FeaturedSpeaker/>
        </ContainerInner>
      </Container>
      <Container>
        <ContainerInner>
          <Featured>Upcoming Speakers : </Featured>
          <SpeakerCard/>
          <SpeakerCard/>
          <SpeakerCard/>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default Speakers

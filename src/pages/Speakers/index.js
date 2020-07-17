import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import SpeakerCard from './SpeakerCard'
import { Featured } from './styles'

const Speakers = () => {
  return (
    <div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <Featured>Featured Speaker : </Featured>
          <SpeakerCard/>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default Speakers

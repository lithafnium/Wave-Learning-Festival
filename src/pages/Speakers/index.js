import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import FeaturedSpeaker from './FeaturedSpeaker'
import { Featured, Row } from './styles'
import AnimateHeight from 'react-animate-height'
import SpeakerCard from './SpeakerCard'
import Nate from './nate_saal.jpg'
import Iris from './iris_fu.jpg'
import Jasmine from './jasmine_shao.JPG'
import Lisa from './lisa_baldwin.jpeg'
import Nicole from './nicole_chung.jpg'
import Rhiannon from './rhiannon_mcgavin.jpg'
import Ruta from './ruta_sepetys.jpg'
import Andrew from './andrew_cramer.jpg'
import { Colors } from '@/styles'

const Speakers = () => {
  const speakers = [
    {
      img: Andrew,
      name: 'Andrew Cramer',
      date: 'Wave 5: 8/22',
      title: 'Professor at Los Angeles Mission College'
    },
    {
      name: 'Lisa Baldwin',
      img: Lisa,
      title: 'Contemporary Plein Air Painter'

    },
    {
      img: Nicole,
      name: 'Nicole Chung',
      title: 'Author of All You Can Ever Know, Editor in Chief of Catapult Magazine'
    },
    {
      name: 'Rhiannon McGavin',
      img: Rhiannon,
      title: 'Poet'
    },
    {
      name: 'Jasmine Shao',
      img: Jasmine,
      title: "AKA studyquill! UCLA '24"
    },
    {
      name: 'Iris Fu',
      img: Iris,
      title: 'Stanford Student, Youtuber'
    },
    {
      name: 'Ruta Sepetys',
      img: Ruta,
      title: 'Author'
    }
  ]

  const colors = [Colors.WLF_ORANGE, Colors.WLF_PURPLE, Colors.WLF_TURQOUISE, Colors.WLF_YELLOW]

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
          <Row>
            {
              speakers.map((speaker, index) => {
                return <SpeakerCard
                  key={index}
                  name={speaker.name}
                  img={speaker.img}
                  title={speaker.title}
                  color={colors[index % 4]}/>
              })
            }

          </Row>

        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default Speakers

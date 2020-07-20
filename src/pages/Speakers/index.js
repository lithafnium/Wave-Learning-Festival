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
import Jasmine from './jasmine_shao.jpeg'
import Lisa from './lisa_baldwin.jpeg'
import Nicole from './nicole_chung.jpg'
import Rhiannon from './rhiannon_mcgavin.jpg'
import Ruta from './ruta_sepetys.jpg'
import Andrew from './andrew_cramer.jpg'
import { Colors } from '@/styles'

const Speakers = () => {
  const speakers = [
    {
      img: Nate,
      name: 'Nate Saal',
      title: 'CEO, CocoTerra Company',
      date: 'Wave 4: 8/1'
    },
    {
      img: Andrew,
      name: 'Andrew Cramer',
      date: 'Wave 5: 8/22',
      title: 'Professor at Los Angeles Mission College'
    },
    {
      name: 'Lisa Baldwin',
      img: Lisa,
      title: 'Contemporary Plein Air Painter',
      date: 'TBD'

    },
    {
      name: 'Rhiannon McGavin',
      img: Rhiannon,
      title: 'Poet',
      date: '8/29'
    },
    {
      name: 'Jasmine Shao',
      img: Jasmine,
      title: "AKA studyquill! UCLA '24",
      date: 'TBD'
    },
    {
      name: 'Iris Fu',
      img: Iris,
      title: 'Stanford Student, Youtuber',
      date: '9/4'
    },
    {
      name: 'Ruta Sepetys',
      img: Ruta,
      title: 'Author',
      date: 'TBD'
    }
  ]

  const colors = [Colors.WLF_ORANGE, Colors.WLF_PURPLE, Colors.WLF_TURQOUISE, Colors.WLF_YELLOW]

  return (
    <div>
      <Navbar/>
      <Container style={{ minHeight: '0vh' }}>
        <ContainerInner>
          <Featured>Upcoming Speaker : </Featured>
          <FeaturedSpeaker/>
        </ContainerInner>
      </Container>
      <Container>
        <ContainerInner>
          {/* <Featured>Upcoming Speakers : </Featured> */}
          <Row>
            {
              speakers.map((speaker, index) => {
                return <SpeakerCard
                  key={index}
                  name={speaker.name}
                  img={speaker.img}
                  title={speaker.title}
                  date={speaker.date}
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
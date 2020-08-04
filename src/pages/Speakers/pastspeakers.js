import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import FeaturedSpeaker from './FeaturedSpeaker'
import { Featured, Row } from './styles'
import AnimateHeight from 'react-animate-height'
import SpeakerCard from './SpeakerCard'

import Jameela from './jameela-jamil.jpg'
import Nate from './nate_saal.jpg'
import Iris from './iris_fu.jpg'
import Jasmine from './jasmine_shao.jpeg'
import Lisa from './lisa_baldwin.jpeg'
import Nicole from './nicole_chung.jpg'
import Ruta from './ruta_sepetys.jpg'
import Andrew from './andrew_cramer.jpg'
import Cliff from './cliff_hsia.jpg'
import { Colors } from '@/styles'

const PastSpeakers = () => {
  const pastSpeakers = [
    {
      img: Nate,
      name: 'Nate Saal: The Art and Science of Making Chocolate',
      title: 'CEO, CocoTerra Company',
      date: 'Saturday 8/1 5:00-6:00pm EDT',
      desc: "Learn how to make chocolate from bean to bar.  Did you know that chocolate comes from a fruit?  Did you know that chocolate is a fermented food?  Did you know that the chocolate bar is a new invention in the history of chocolate?  We'll explore the ingredients used to make chocolate (and where to get them) as well as all the processing steps required to transform cocoa beans into delicious chocolate.  We'll dig a little deeper into the physics and chemistry involved in each of the processing steps and hopefully turn you into a chocolate geek.  When you see a cacao % on a bar of chocolate, you'll learn what that really means.  When you leave a chocolate bar in a hot car, you'll understand why it ends up looking white and crumbly.  And you'll learn about the chemistry of tempering so you know what's really happening when a recipe asks you to 'temper your chocolate'.  Finally, we'll end with a guide to tasting chocolate.  Grab a bar of your favorite chocolate and learn how to taste like a pro!",
      bio: "I am a San Francisco Bay Area native with a passion for technology and food. For the last 25 years, I’ve been in the start-up world as a founder or part of the founding team of multiple software, middleware and hardware companies.  With academic training in molecular biophysics and biochemistry, I've had a lifelong interest in technology, food science and DIY food making.  Professionally, I've spent my career as a serial entrepreneur bringing new technologies to market.  When I'm not hard at work, you'll find me beekeeping, making wine, olive oil and vinegar, growing exotic fruits, and a host of weekend farming activities.  My latest venture, CocoTerra, sits at the intersection of technology and food.  It draws on my knowledge and skills from all my different business experiences to simplify the chocolate-making process using smart software and hardware design so anyone can become a creative, successful and proud chocolate-maker.  Go to www.cocoterra.com if you are curious to learn more.",
      hasTime: false,
      age: "12+",
      signup: ""
    }, 
    {
      img: Jameela,
      name: 'Q&A with Jameela Jamil',
      date: 'Thursday 7/30 7:00-8:00pm EDT',
      title: "The Good Place Actress and Women's Body Image Activist",
      bio: "Jameela Jamil is an English-born actress, writer, DJ, model, radio host, and activist. She was discovered at 22 years old when she was teaching English in London, UK. Her first job in media was a main host on T4, the UK's leading youth entertainment show, and she soon went on to become a journalist for Cosmopolitan Magazine and the Huffington Post. 2012 saw many successes for Jamil, when she released her successful clothing line, shot for both British and American Vogue, Glamour Magazine, Cosmopolitan Magazine and Japanese teen vogue, and was nominated for the PPA and BSME awards for her writing. Later that year she was recruited by BBC Radio 1 to host her own show on their network, which would lead to a promotion in 2013 where she made history. She was the first woman in its 60 years on air to host the Official Chart on the esteemed radio station. With much success, including several awards for radio and a growing DJ career she stayed on at the network until 2015, when she left to pursue a writing career in the United States. After signing as a comedy writer at 3ARTS and being taken on by UTA, she was chosen for Micheal Schur’s latest project, The Good Place(2016), to star opposite Kristen Bell. The comedy series aired in the fall of 2016 to tremendous success and accolades and was continued through 2017, 2018 and for its fourth (and sadly last) season, this year. Most recently, she has been an activist on women's body-imaging issues and has openly discussed her struggle with eating disorders, as well as her childhood difficulties, born with congenital hearing loss and labyrinthitis. Her website and instagram page I Weigh promotes 'radical inclusivity, so no one feels alone' and boasts 1.2 million followers. Jamil describes I Weigh as 'a movement... for us to feel valuable and see how amazing we are, and look past the flesh on our bones'. Jamil was one of fifteen women selected to appear on the cover of the 2019 issue of British Vogue 'Forces for Change.' That same year, she was awarded 'Advocate of the Year' from the Ehlers-Danlos Society. She has raised funds and supports efforts to promote both local community projects and access to culture for communities globally.",
      desc: 'Jameela Jamil, actress of hit TV series “The Good Place”, will take part in a live Question-and-Answer session, where she will talk about her life, career, and activism. From hosting a radio show to being featured on the cover of many notable magazines, her career boasts many achievements. She has been called a “Force of Change”, and rightly so. Jamil was the first woman in the history of BBC Radio 1 to host the Official Chart. She has been nominated for numerous awards for her writing. She is a passionate advocate for self-love and racial inclusivity, among many others. Jamil is also the activist behind the 2018 movement ‘I-Weigh’, which aims to “amplify, advocate, and pass the mic”.',
      hasTime: false,
      age: "Any Age",
      signup: ""
    },
    {
      img: Nicole,
      name: 'Nicole Chung: Why Your Stories Matter',
      date: 'Tuesday 7/28 2:30-3:30pm EDT',
      title: 'Author of All You Can Ever Know, Editor in Chief of Catapult Magazine',
      bio: "Nicole Chung's nationally bestselling debut memoir All You Can Ever Know was a finalist for the National Book Critics Circle Award for Autobiography, longlisted for the PEN Open Book Award, and named a Best Book of the Year by The Washington Post, The Boston Globe, NPR, TIME, Library Journal, BuzzFeed, Goodreads, and the Chicago and Seattle Public Library systems, among many others. Nicole has written for numerous publications, including The New York Times, The Guardian, GQ, TIME, and Longreads, and has taught writing workshops for Kundiman, Catapult, and PEN/Faulkner’s Writers in Schools program. She is the editor in chief of the National Magazine Award-winning Catapult magazine, co-editor of the immigration anthology A Map Is Only One Story, and the former managing editor of the beloved, now-shuttered website The Toast. Her next book is forthcoming from Ecco Books/HarperCollins.",
      desc: 'Award-winning author and editor Nicole Chung will cover topics related to writing, revision, publishing, and community in a frank, participant-driven discussion with students.',
      hasTime: false,
      age: "Any Age",
      signup: ""
    }
  ]

  const colors = [Colors.WLF_TURQOUISE, Colors.WLF_YELLOW, Colors.WLF_ORANGE, Colors.WLF_PURPLE]

  return (
    <div>
      <Navbar/>
      <Container style={{ minHeight: '0vh' }}>
        <ContainerInner>
          <Featured>Past Speakers: </Featured>
          {
            pastSpeakers.map((speaker, index) => {
              return <Row key={index}
              >
                <SpeakerCard
                  name={speaker.name}
                  img={speaker.img}
                  title={speaker.title}
                  date={speaker.date}
                  desc={speaker.desc}
                  bio={speaker.bio}
                  color={colors[index % 4]}
                  hasTime={speaker.hasTime}
                  age={speaker.age}
                  signup={speaker.signup}/>          </Row>
            })
          }
        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default PastSpeakers

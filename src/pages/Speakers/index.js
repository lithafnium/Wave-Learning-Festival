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
import Rhiannon from './rhiannon_mcgavin.jpg'
import Ruta from './ruta_sepetys.jpg'
import Andrew from './andrew_cramer.jpg'
import { Colors } from '@/styles'

const Speakers = () => {
  const speakers = [
    {
      img: Nate,
      name: 'Nate Saal: The Art and Science of Making Chocolate',
      title: 'CEO, CocoTerra Company',
      date: '8/1 (Wave 4)',
      desc: "Learn how to make chocolate from bean to bar.  Did you know that chocolate comes from a fruit?  Did you know that chocolate is a fermented food?  Did you know that the chocolate bar is a new invention in the history of chocolate?  We'll explore the ingredients used to make chocolate (and where to get them) as well as all the processing steps required to transform cocoa beans into delicious chocolate.  We'll dig a little deeper into the physics and chemistry involved in each of the processing steps and hopefully turn you into a chocolate geek.  When you see a cacao % on a bar of chocolate, you'll learn what that really means.  When you leave a chocolate bar in a hot car, you'll understand why it ends up looking white and crumbly.  And you'll learn about the chemistry of tempering so you know what's really happening when a recipe asks you to 'temper your chocolate'.  Finally, we'll end with a guide to tasting chocolate.  Grab a bar of your favorite chocolate and learn how to taste like a pro!",
      bio: "I am a San Francisco Bay Area native with a passion for technology and food. For the last 25 years, I’ve been in the start-up world as a founder or part of the founding team of multiple software, middleware and hardware companies.  With academic training in molecular biophysics and biochemistry, I've had a lifelong interest in technology, food science and DIY food making.  Professionally, I've spent my career as a serial entrepreneur bringing new technologies to market.  When I'm not hard at work, you'll find me beekeeping, making wine, olive oil and vinegar, growing exotic fruits, and a host of weekend farming activities.  My latest venture, CocoTerra, sits at the intersection of technology and food.  It draws on my knowledge and skills from all my different business experiences to simplify the chocolate-making process using smart software and hardware design so anyone can become a creative, successful and proud chocolate-maker.  Go to www.cocoterra.com if you are curious to learn more."
    },
    {
      img: Andrew,
      name: 'Andrew Cramer: Wizard of Populism',
      date: '8/22 (Wave 5)',
      title: 'Professor at Los Angeles Mission College',
      desc: "While L. Frank Baum claimed his classic 'Wonderful Wizard of Oz' was written 'solely to please the children of today', many scholars have interpreted the book as an allegory or metaphor for the political, economic and social events of America in the 1890s. European fairy tales of old often contained political allegory disguised as legend or myth in time of despotism when people were unable, sometimes even forbidden by law, to speak out about harsh, unfair treatment.  This presentation has much to say about the current state of affairs in the United States, where regardless of political persuasion every point of view is called 'fake news' and the divisive politics of populism rules the land.  Professor Cramer will guide attendees through the most common symbols from the book/movie 'Wizard of Oz' and connect them to their most likely historical counterparts.  Using everything from contemporary music to vivid imagery, video clips and even references to modern musicals 'The Wiz' and 'Wicked', Prof. Cramer guarantees you will never look at the land of Oz the same way again!",
      bio: "I graduated from Miami University of Ohio in 1991, earning two Bachelors degrees in English, one in Creative Writing and the other in Professional Writing. After graduation, I joined the US Navy for six years and was stationed in Japan and Hawaii as a public affairs specialist. I got out of the Navy in 1997 and went to work for CBS as a reporter/anchor in Colorado. Two years later, I switched networks to NBC and became a photojournalist. While working for NBC in Springfield, Illinois, I began working on my first Masters degree in American History with a specialty in Native American Studies and Treaties. I left NBC in 2000 to work on my MA full-time and graduated from the University of Illinois-Springfield in 2002. I earned a second Masters degree in American History from the University of Miami-Florida in 2005 specializing in pop culture, sports history, and entertainment. I moved to California in 2006, originally teaching for various community colleges in the San Fernando Valley. I've been teaching at Mission College for over ten years now, and at a couple private high schools in the area as well. I’ve also worked as a background actor for various films and TV shows, and I teach for various online and community colleges from time to time. I am a rabid James Bond & Doctor Who fan and I love going to sports bars (Go Chicago Cubs/White Sox/Bears/Bulls/Blackhawks!). In my free time, I enjoy going to movies, wine tasting, reading mysteries (Harlen Coben) and science fiction (Robert Jordan), and faith-based books on St. Ignatius.",
    },
    {
      name: 'Lisa Baldwin: The Natural Way to Paint ',
      img: Lisa,
      title: 'Contemporary Plein Air Painter',
      date: 'TBD',
      desc: "Develop the fundamental skills of plein air painting. Students will learn how to sketch, mix colors, the basics of composition, and the use of perspective. Discover like the French Impressionists how to capture natural light, shade, and color. This hands on 6 session course gives students both historical background and practical instruction on how to paint nature from observation. With drawing and painting exercises and coaching students will also be encouraged to develop their own individual painting styles.",
      bio: "Lisa Baldwin is a contemporary plein air painter who edits her compositions to include only what is essential like a visual haiku. Lisa is from South Eastern Quebec and moved to Los Angeles four and a half years ago. She has always been an outdoors woman and her work is influenced by the paintings of Tom Thomson and the Canadian Group of Seven. They were a collective of early 20th century artists who, like the Impressionists painted outdoors on location. They traveled into the wilderness to paint and believed that a distinct Canadian art could be developed through direct contact with nature. Lisa is currently represented by Topanga Canyon Gallery in Los Angeles and Cube Projects in Ottawa. Her work is in private collections across Canada, the United States, Belgium, Hungary, and China."

    },
    {
      name: "Rhiannon McGavin: Now That's What I Call A Sonnet",
      img: Rhiannon,
      title: 'Award-Winning Poet',
      date: '8/29',
      desc: "This workshop will be an overview of the sonnet's history and structure as a form. We will read and discuss works by Terrance Hayes, Wanda Coleman, Kim Addonizio, Franny Choi, and more.",
      bio: "Rhiannon McGavin has failed the driver’s license test three times so far. Her work has been published by Tia Chucha Press, CURA, The Believer, Tagvverk, and Teen Vogue. She is the former Youth Poet Laureate of Los Angeles, as well as the 2019 recipient of the Fred and Edith Herman Memorial Prize from the Academy of American Poets.  Her first book Branches is available from Not a Cult, and her second book Grocery List Poems is forthcoming 2021."
    },
    {
      name: 'Jasmine Shao: Become an iNfLuEnCeR: How to Grow & Monetize Your Platform!',
      img: Jasmine,
      title: "AKA studyquill! UCLA '24",
      date: 'TBD',
      desc: "How do people become famous? Specifically, how do people talking to themselves in their bedrooms blow up into Internet stars? I don't have all the answers to the age-old puzzle of popularity, but here's what I can tell you: (1) How to start creating or improve your own content! I'll share the top tips I've learned from my four years of video and photo experience, and my insider reflections on the 'influencer industry' as a whole. (2) How people seem to make an income out of thin air! I'll show you how monetization, sponsorships, affiliate marketing, and other methods work, so you can be an informed consumer or get started on your Internet career. (3) And maybe, just maybe... how to become famous.",
      bio: "Hello! My name is Jasmine. I'm the creator behind the YouTube channel and Instagram account @studyquill, where I share tips on studying and bullet journaling. In my four years on social media, I've gained 550,000+ subscribers and 300,000+ Instagram followers. I've collaborated with brands like Google Chromebooks, Texas Instruments, and Grammarly, and have been profiled in the Wall Street Journal and National Geographic textbooks. I also published a book about bullet journaling and interned with the marketing team of my favorite stationery company! Proud Ravenclaw and lover of string crafts."
    },
    {
      name: 'Iris Fu: How to Self-Publish a Book in a Month',
      img: Iris,
      title: "Economics Author, Youtuber, Stanford '24",
      date: '9/4',
      desc: "Have you always had an interest that you'd want to showcase through a book? Does publishing a book seem like a daunting task? Well, it doesn't have to be! In this seminar, you'll learn how you can go from writing, editing, and self-publishing your book in as short of a time frame as a month. We'll focus on using the publishing platform Amazon KDP, and leave ample of time for questions to cater to your needs! ",
      bio: "Iris Fu is a rising freshman at Stanford University, where she plans to study computer science and economics. In high school, she self-published an introductory economics book, created an international video pal program, and had the opportunity to perform flute at Carnegie Hall. This summer, she is working at a blockchain identity startup, running a college admissions Youtube channel (Iris Fu), and seeking cool opportunities like speaking at Wave LF!"
    },
    {
      name: 'Ruta Sepetys',
      img: Ruta,
      title: '#1 NYT Bestselling Author of Historical Fiction',
      date: 'TBD',
      desc: 'Coming Soon!',
      bio: "Ruta Sepetys is a #1 New York Times bestselling author of historical fiction published in over sixty countries and forty languages. Sepetys is considered a “crossover” novelist as her books are read by both students and adults worldwide. Winner of the Carnegie Medal, Ruta is renowned for giving voice to underrepresented history and those who experienced it.  Her books have won or been shortlisted for over forty book prizes, are included on over thirty state reading lists, and are currently in development for film and television. www.rutasepetys.com"
    }
  ]

  const colors = [Colors.WLF_ORANGE, Colors.WLF_PURPLE, Colors.WLF_TURQOUISE, Colors.WLF_YELLOW]

  return (
    <div>
      <Navbar/>
      <Container style={{ minHeight: '0vh'}}>
        <ContainerInner style={{marginBottom: 0}}>
          <Featured>Featured Speaker : </Featured>
          <FeaturedSpeaker 
            name="Q&#38;A with Jameela Jamil"
            date="7/30 4pm EDT"
            picture={Jameela}
            subtitle="The Good Place Actress and Women's Body Image Activist"
            bio="Jameela Jamil is an English-born actress, writer, DJ, model, radio host, and activist. She was discovered at 22 years old when she was teaching English in London, UK. Her first job in media was a main host on T4, the UK's leading youth entertainment show, and she soon went on to become a journalist for Cosmopolitan Magazine and the Huffington Post. 2012 saw many successes for Jamil, when she released her successful clothing line, shot for both British and American Vogue, Glamour Magazine, Cosmopolitan Magazine and Japanese teen vogue, and was nominated for the PPA and BSME awards for her writing.
            Later that year she was recruited by BBC Radio 1 to host her own show on their network, which would lead to a promotion in 2013 where she made history. She was the first woman in its 60 years on air to host the Official Chart on the esteemed radio station. With much success, including several awards for radio and a growing DJ career she stayed on at the network until 2015, when she left to pursue a writing career in the United States. After signing as a comedy writer at 3ARTS and being taken on by UTA, she was chosen for Micheal Schur’s latest project, The Good Place(2016), to star opposite Kristen Bell. The comedy series aired in the fall of 2016 to tremendous success and accolades and was continued through 2017, 2018 and for its fourth (and sadly last) season, this year.
            Most recently, she has been an activist on women's body-imaging issues and has openly discussed her struggle with eating disorders, as well as her childhood difficulties, born with congenital hearing loss and labyrinthitis. Her website and instagram page I Weigh promotes 'radical inclusivity, so no one feels alone' and boasts 1.2 million followers. Jamil describes I Weigh as 'a movement... for us to feel valuable and see how amazing we are, and look past the flesh on our bones'. Jamil was one of fifteen women selected to appear on the cover of the 2019 issue of British Vogue 'Forces for Change.' That same year, she was awarded 'Advocate of the Year' from the Ehlers-Danlos Society. She has raised funds and supports efforts to promote both local community projects and access to culture for communities globally."
          />
        </ContainerInner>
      </Container>
      <Container style={{ minHeight: '0vh' }}>
        <ContainerInner>
          <Featured>Upcoming Speaker : </Featured>
          <FeaturedSpeaker 
            name="Nicole Chung: Why Your Stories Matter"
            date="Date: 7/28 2:30-3:30 PM EDT"
            picture={Nicole}
            subtitle="Author of All You Can Ever Know, Editor in Chief of Catapult Magazine"
            bio="Nicole Chung's nationally bestselling debut memoir All You Can Ever Know was a finalist for the National Book Critics Circle Award for Autobiography, longlisted for the PEN Open Book Award, and named a Best Book of the Year by The Washington Post, The Boston Globe, NPR, TIME, Library Journal, BuzzFeed, Goodreads, and the Chicago and Seattle Public Library systems, among many others. Nicole has written for numerous publications, including The New York Times, The Guardian, GQ, TIME, and Longreads, and has taught writing workshops for Kundiman, Catapult, and PEN/Faulkner’s Writers in Schools program. She is the editor in chief of the National Magazine Award-winning Catapult magazine, co-editor of the immigration anthology A Map Is Only One Story, and the former managing editor of the beloved, now-shuttered website The Toast. Her next book is forthcoming from Ecco Books/HarperCollins."
            description="Award-winning author and editor Nicole Chung will cover topics related to writing, revision, publishing, and community in a frank, participant-driven discussion with students."
          />
        </ContainerInner>
      </Container>
      <Container>
        <ContainerInner>
          <Featured>Next Up: </Featured>
          <Row>
            {
              speakers.map((speaker, index) => {
                return <SpeakerCard
                  key={index}
                  name={speaker.name}
                  img={speaker.img}
                  title={speaker.title}
                  date={speaker.date}
                  desc={speaker.desc}
                  bio={speaker.bio}
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
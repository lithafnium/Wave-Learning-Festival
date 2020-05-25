import React, {useContext, useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
    Container, ContainerInner, HeaderImage, AboutDescription,
    Header, DescriptionText, Button, DescriptionContainer, DescriptionContainerInner,
    Card, SchoolsContainer, SchoolsContainerInner, SchoolLogo, School, WhoWeAre, WhoHeader, WhoContanier,
    NewsLetter, Input, Subscribe
} from './styles'
import "./styles.css"
import Learning from './learning.svg'
import { IoMdLogIn } from "react-icons/io"
import { MdPersonalVideo, MdModeEdit, MdLanguage } from 'react-icons/md'
import { IconContext } from "react-icons"
import Berkeley from './berkeley.png'
import Brown from './brown.png'
import Harvard from './harvard.png'
import CMU from './cmu.png'
import Umich from './umich.png'
import Upenn from './upenn.png'
import {FirebaseContext} from '../../firebaseContext'
const About = () => {
    const [name, updateName] = useState('')
    const [email, updateEmail] = useState('')
    const [subscribed, toggleSubscribed] = useState(false)
    const {db} = useContext(FirebaseContext)

    const subscribe = () => {
        if(db){
            db.collection('Newsletter').add({
                name, 
                email
            }).then(toggleSubscribed(true))
        }
    }

    useEffect(() => {
        if(db){
            console.log(db)
        }
    }, [db])
    return (
        <div>
            <Navbar />
            <Container>
                <ContainerInner>
                    <AboutDescription>
                        <Header>
                            Make a Difference, right from home
                        </Header>
                        <DescriptionText>
                        Wave Learning Festival is a student-run educational platform
                        that aims to teach students through seminars on a variety of
                        topics. We hope to provide equitable educational resources
                        while alleviating some of the new pressures that have fallen
                        on working parents during the pandemic.

                        </DescriptionText>
                        <a href="/courses" class="sign-up-link">
                          <Button>
                              <IconContext.Provider value={{ color: "white", size: "1.5em", style: { verticalAlign: 'middle' } }}>
                                  <div>
                                      <IoMdLogIn />
                                  </div>
                              </IconContext.Provider>
                              <p>Sign up</p>
                          </Button>
                        </a>
                    </AboutDescription>
                    <HeaderImage src={Learning} />

                </ContainerInner>
            </Container>
            <WhoContanier style = {{backgroundColor: '#F2F6F7'}}>
                <WhoWeAre>
                    <WhoHeader>

                        <h1>
                            Who we are
                        </h1>
                        </WhoHeader>
                    <WhoHeader>
                        <p>
                        We are organizing a student-run educational platform in
                        which college students and high school upperclassmen teach
                        seminars on a variety of topics to middle schoolers and high
                        schoolers online (focus: 6th - 10th grade). Classes will be
                        free with an optional donation, and we hope to donate everything
                        we raise to nonprofits aiding the COVID-19 crisis.

                        </p>
                    </WhoHeader>


                </WhoWeAre>
                <WhoWeAre>
                    <WhoHeader>

                        <h1>
                            Why are we doing this?
                        </h1>
                        </WhoHeader>
                    <WhoHeader>
                        <p>
                        The global pandemic has disrupted education worldwide,
                        and in many cases, completely shut it down. While we cannot
                        replicate the entire school day, we hope that providing these
                        fun and diverse classes can help students to continue learning,
                        staying engaged, and interacting with fellow students when
                        they’re stuck at home.

                        </p>
                        <p>
                        In addition, we hope to alleviate some of the new burdens
                        that have fallen on parents who no longer have school/daycare
                        to keep their children busy while they work full-time.
                        For a few hours each day, they can take a break and get
                        their work done without having to worry.

                        </p>
                        <p>
                        One parent writes, “Attempting to work full time while rooming with,
                        feeding and educating one or more children during the pandemic is not
                        going well — not for me, and not for most people I know...across demographics and
                        income levels, the pandemic has undone many of the supports parents usually rely
                        on to manage raising children while working.”
                        <ul>
                            <li><a href = "https://www.economist.com/international/2020/03/19/how-covid-19-is-interrupting-childrens-education">
                                The Economist - How COVID-19 is interrupting children’s education</a></li>
                            <li><a href = "https://sanfrancisco.cbslocal.com/2020/04/17/coronavirus-bay-area-summer-camps-canceled-covid-19-no-refunds/">
                                CBS News - Bay Area summer camps canceled due to COVID-19 with no refunds</a></li>
                            <li><a href = "https://www.nytimes.com/2020/04/22/opinion/coronavirus-parenting-burnout.html?referringSource=articleShare">
                                The NYT - Two Parents. Two Kids. Two Jobs. No Child Care.</a></li>

                        </ul>


                        </p>
                    </WhoHeader>


                </WhoWeAre>

            </WhoContanier>
            <DescriptionContainer>
                <DescriptionContainerInner>
                    <Card>
                        <IconContext.Provider value={{ color: "#2684ff", size: "3em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <MdPersonalVideo />
                            </div>
                        </IconContext.Provider>
                        <h3>Platform</h3>
                        <p>Our teachers connect with students online via remote-learning platforms
                            like Zoom while maintaining an interactive and engaging environment</p>
                    </Card>
                    <Card>
                        <IconContext.Provider value={{ color: "#2684ff", size: "3em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <MdModeEdit />
                            </div>
                        </IconContext.Provider>
                        <h3>Types of Courses</h3>
                        <p>Our courses will range from traditionally styled lectures to teachers’ passion projects, exploring unique areas of education.</p>
                    </Card>
                    <Card>
                        <IconContext.Provider value={{ color: "#2684ff", size: "3em", style: { verticalAlign: 'middle' } }}>
                            <div>
                                <MdLanguage />
                            </div>
                        </IconContext.Provider>
                        <h3>Demographics</h3>

                        <p>Our aim is to create a global community of teachers and students in order to ensure educational equity during the COVID-19 crisis.</p>
                    </Card>
                </DescriptionContainerInner>
            </DescriptionContainer>
            <SchoolsContainer>
            <h2 style = {{textAlign: 'center', color: 'rgba(0, 0, 0, 0.8'}}>Taught by students from all over the country:</h2>

                <SchoolsContainerInner>
                    <SchoolLogo>
                        <School src={Harvard}/>
                        <School src={Berkeley}/>
                        <School src={Brown}/>
                        <School src={CMU}/>
                        <School src={Umich}/>
                        <School src={Upenn}/>
                    </SchoolLogo>
                </SchoolsContainerInner>
            </SchoolsContainer>
            <DescriptionContainer id="newsletter">
                <WhoWeAre>
                    <NewsLetter>
                        <h2>Sign up for our newsletter! Be the first to hear about our new courses and special guests!</h2>
                    </NewsLetter>
                    <NewsLetter>
                        <p>Name</p>
                        <Input placeholder="Jane Doe"
                               value={name}
                               onChange={e => updateName(e.target.value)}/>
                        <p>Email</p>
                        <Input placeholder="name@email.com"
                               value={email}
                               onChange={e=> updateEmail(e.target.value)}/>
                        <Subscribe disabled={subscribed} onClick={() => subscribe()}>{subscribed ? 'Subscribed!' : 'Subscribe'}</Subscribe>
                    </NewsLetter>
                </WhoWeAre>
            </DescriptionContainer>
            <Footer/>
        </div>
    )
}

export default About

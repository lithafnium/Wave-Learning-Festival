import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from './styles'

const Teachers = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                    <h1>Teachers</h1>
                    <p>
                        Have nothing to do in the summer? 
                        Interested in teaching students cool things? 
                        Apply to be a teacher for Wave Learning Festival here!
                    </p>
                    <p>
                    Wave Learning Festival is a student-run educational platform 
                    in which college students and high school upperclassmen teach 
                    seminars on a variety of topics (anything from Origami to 
                    Explosives to traditional Mathematics or really anything you want) 
                    middle schoolers and high schoolers online (focus: 6th - 10th grade). 
                    Classes will be free with an optional donation, and we hope to donate 
                    everything we raise to nonprofits aiding in COVID-19 relief.
                    </p>
                    <p>
                    The global pandemic has changed what education and summer programs 
                    look like now, and in some cases, completely shut them down. We hope 
                    that by providing fun and diverse classes, we can help students to continue 
                    learning, stay engaged, and interact with others while stuck at home. We 
                    also are hoping to alleviate some of the new burdens that have fallen on 
                    parents who no longer have summer programs to keep their children busy while 
                    they work full-time. For a few hours each day, they can take a break and get 
                    their work done without having to worry.

                    </p>
                    <h1>Requirements</h1>
                    <ul>
                        <li>College Student or High School Upperclassmen</li>
                        <li>Passion / enthusiasm for an interesting topic of your choosing</li>
                    </ul>

                    <iframe 
                    title="form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfzTibGpqtVyQHFNy98eMjefH4E8SPt9O5E34VCbjL-DeL6Jw/viewform?embedded=true" 
                    width="100%"     
                    height="500" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0">Loading…</iframe>
                </ContainerInner>
            </Container>
            
            <Footer/>
        </div>
    )
}

export default Teachers
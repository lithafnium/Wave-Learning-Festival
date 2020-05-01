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
                        HNothing to do in the summer? Want to share your passions with students worldwide? 
                        Apply to be a teacher for Wave Learning Festival!
                    </p>
                    <p>
                    Wave Learning Festival is an educational platform organized by students at 
                    Harvard, Stanford, Northwestern, Williams, RISD, and SLO in which college 
                    students and high school upperclassmen teach seminars on a variety of topics 
                    (anything from mathematical origami to explosives to modern philosophy or a
                    nything you want) to middle schoolers and high schoolers online 
                    (focus: 6th - 10th grade). Classes will be free with an optional donation, 
                    and we hope to donate everything we raise to nonprofits for COVID-19 relief.

                    </p>
                    <p>
                    The global pandemic has changed what education and summer programs look like, 
                    and in some cases, completely shut them down. We hope that by providing fun 
                    and diverse live classes, we can help students to continue learning, stay 
                    engaged, and interact with others while stuck at home. We also hope to 
                    alleviate some of the new burdens that have fallen on parents who no longer 
                    have summer programs to keep their children busy while they work full-time. 
                    For a few hours each day, they can take a break and get their work done without 
                    having to worry.


                    </p>
                    <p>
                    Wave is an opportunity to gain valuable teaching and leadership experience 
                    while sharing your passions with a wide audience. The flexibility of the 
                    time commitment allows you to volunteer while also pursuing other summer 
                    experiences. Your teaching commitment can be as little as one hour a week. 
                    No prior teaching experience is required, and you will receive help and feedback 
                    in making your class come to life! Please also feel free to share this to anyone 
                    or any group you think may be interested!
                    </p>
                    <h1>Apply by 5/15 to be included in the first wave!</h1>

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

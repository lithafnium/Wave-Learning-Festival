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
                        Want to share your passions with students worldwide? 
                        Apply to be a teacher for Wave Learning Festival!
                    </p>
                    <p>
                    Wave Learning Festival is an educational platform organized by students at 
                    Harvard, Stanford, Northwestern, UPenn, Williams, RISD, and SLO in which college 
                    students teach completely free seminars on a variety of topics to middle and high 
                    schoolers online. 
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
                    experiences. No prior teaching experience is required, and you will receive help and feedback 
                    in making your class come to life! Please also feel free to share this to anyone 
                    or any group you think may be interested!
                    </p>
                    <h1>Apply by 5/29 to be included in the second wave!</h1>
                    <p>
                    Due to overwhelming interest in teaching, we have closed applications to the first wave 
                    early in the interest of keeping our inaugural cohort small. If you haven't heard back 
                    from us yet, we will be reaching out soon to include you in our expanded second wave. 
                    Thank you for your patience!
                    </p>

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

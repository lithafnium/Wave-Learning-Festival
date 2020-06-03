import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from '../../globalStyles'
import {Colors, Typography} from '../../styles';

const Teachers = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                    <Typography.Header style={{color: Colors.WLF_PURPLE}}>Teachers</Typography.Header>
                    <Typography.BodyText style={{color: Colors.WLF_BLACK, marginBottom: 20}}>
                        Share your passions with students worldwide—
                        apply to teach for Wave Learning Festival!
                    </Typography.BodyText>
                    <Typography.BodyText style={{color: Colors.WLF_BLACK, marginBottom: 20}}>
                    Wave Learning Festival is an educational platform organized by students at
                    Harvard, Stanford, Northwestern, UPenn, Williams, RISD, and SLO in which college
                    students teach free seminars on a variety of topics to middle and high
                    schoolers online.
                    </Typography.BodyText>
                    <Typography.BodyText style={{color: Colors.WLF_BLACK, marginBottom: 20}}>
                    The global pandemic has changed what education and summer programs look like,
                    and in some cases, completely shut them down. By providing fun
                    and diverse live classes, we hope to help students continue learning, stay
                    engaged, and interact with others while stuck at home. We also hope to
                    alleviate some of the new burdens that have fallen on parents who no longer
                    have summer programs to keep their children busy while they work full-time.


                    </Typography.BodyText>
                    <Typography.BodyText style={{color: Colors.WLF_BLACK, marginBottom: 20}}>
                    Wave is an opportunity to gain valuable teaching and leadership experience
                    while sharing your passions with a wide audience. The flexibility of the
                    time commitment allows you to volunteer while also pursuing other summer
                    experiences. No prior teaching experience is required, and you will receive help 
                    in making your class come to life!
                    </Typography.BodyText>
                    <Typography.Header style={{color: Colors.WLF_PURPLE}}>Apply by 6/12 to be included in the second wave!</Typography.Header>
                    <Typography.BodyText style={{color: Colors.WLF_BLACK, marginBottom: 20}}>
                    Due to overwhelming interest in teaching, we may push your class to a later wave. 
                    Thank you for your patience!
                    </Typography.BodyText>

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

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Container, ContainerInner } from '@/globalStyles'
import {Colors, Typography} from '@/styles'

const PartnersSponsors = () => {
    return(
    <div>
        <Navbar/>
        <Container>
            <ContainerInner>
                <Typography.Header style={{color: Colors.WLF_PURPLE}}>Partners and Sponsors</Typography.Header>
                <br/>
                <Typography.Header2 style={{color: Colors.WLF_BLACK, fontSize: 30}}>Community Sponsors</Typography.Header2>
                <Typography.Header2 style={{color: Colors.WLF_BLACK, fontSize: 30}}>Corporate Sponsors</Typography.Header2>
            </ContainerInner>
        </Container>

        <Footer/>
    </div>
    )
}

export default PartnersSponsors

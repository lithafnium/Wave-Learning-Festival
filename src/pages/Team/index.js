import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './styles.css'

import KevinTan from "./headshot/kevin-tan.jpg"
import BlenKedir from "./headshot/blen-beharu-kedir.jpg"
import ChaseSouder from "./headshot/chase-souder.jpg"
import SandraChiu from "./headshot/sandra-chiu.jpg"

const Team = () => {
    return(
        <div>
            <Navbar/>

            <div class="row">
              <div class="team-member">
                <img src={KevinTan} />
                <p class="name">Kevin Tan</p>
                <p class="desc">Hello</p>
              </div>
              <div class="team-member">
                <img src={BlenKedir} />
                <p class="name">Blen Kedir</p>
                <p class="desc">Bruh</p>
              </div>
            </div>

            <div class="row">
              <div class="team-member">
                <img src={ChaseSouder} />
                <p class="name">Chase Souder</p>
                <p class="desc">Hello</p>
              </div>
              <div class="team-member">
                <img src={SandraChiu} />
                <p class="name">Sandra Chiu</p>
                <p class="desc">Bruh</p>
              </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Team

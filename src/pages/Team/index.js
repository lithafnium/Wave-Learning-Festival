import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './styles.css'

import KevinTan from "./headshot/kevin-tan.jpg"
import BlenKedir from "./headshot/blen-beharu-kedir.png"
import ChaseSouder from "./headshot/chase-souder.JPG"
import SandraChiu from "./headshot/sandra-chiu.png"

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

            <br />

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

import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './styles.css'

const Team = () => {
    return(
        <div>
            <Navbar/>

            <div class="row">
              <div class="team-member">
                <img src="headshot/kevin-tan.jpg" />
                <p class="name">Kevin Tan</p>
                <p class="desc">Hello</p>
              </div>
              <div class="team-member">
                <img src="headshot/blen-beharu-kedir.jpg" />
                <p class="name">Blen Kedir</p>
                <p class="desc">Bruh</p>
              </div>
            </div>

            <div class="row">
              <div class="team-member">
                <img src="headshot/chase-souder.jpg" />
                <p class="name">Chase Souder</p>
                <p class="desc">Hello</p>
              </div>
              <div class="team-member">
                <img src="headshot/sandra-chiu.jpg" />
                <p class="name">Sandra Chiu</p>
                <p class="desc">Bruh</p>
              </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Team

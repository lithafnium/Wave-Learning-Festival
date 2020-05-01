import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './styles.css'

import BlenKedir from "./headshot/blen-beharu-kedir.png"
import CarterMartindale from "./headshot/carter-martindale.jpg"
import ChaseSouder from "./headshot/chase-souder.JPG"
import DanielaShuman from "./headshot/daniela-shuman.png"
import IrisSu from "./headshot/iris-su.jpg"
import JeffreyYao from "./headshot/jeffrey-yao.jpg"
import JonnyRogers from "./headshot/jonny-rogers.jpg"
import KarlyHou from "./headshot/karly-hou.JPG"
import KevinTan from "./headshot/kevin-tan.jpg"
import NikkiSuzani from "./headshot/nikki-suzani.JPG"
import RuhiMistry from "./headshot/ruhi-mistry.JPG"
import SalmaKamni from "./headshot/salma-kamni.jpeg"
import SandraChiu from "./headshot/sandra-chiu.png"
import SimonTao from "./headshot/simon-tao.jpg"
import SteveLi from "./headshot/steve-li.jpg"
import YaelLivneh from "./headshot/yael-livneh.jpg"

const Team = () => {
    return(
        <div>
            <Navbar/>

            <div class="row">
              <div class="team-member">
                <img src={KarlyHou} />
                <p class="name">Karly Hou</p>
                <p class="desc">Chair</p>
              </div>
              <div class="team-member">
                <img src={YaelLivneh} style="image-orientation: 90deg;"/>
                <p class="name">Yael Livneh</p>
                <p class="desc">Director of Logistics</p>
              </div>
              <div class="team-member">
                <img src={SalmaKamni} />
                <p class="name">Salma Kamni</p>
                <p class="desc">Associate Director of Logistics</p>
              </div>
            </div>

            <div class="row">
              <div class="team-member">
                <img src={SimonTao} style="image-orientation: 90deg;"/>
                <p class="name">Simon Tao</p>
                <p class="desc">Associate Director of Logistics</p>
              </div>
              <div class="team-member">
                <img src={KevinTan} />
                <p class="name">Kevin Tan</p>
                <p class="desc">Associate Director of Logistics</p>
              </div>
              <div class="team-member">
                <img src={SteveLi} />
                <p class="name">Steve Li</p>
                <p class="desc">Co-Director of Tech</p>
              </div>
            </div>

            <div class="row">
              <div class="team-member">
                <img src={DanielaShuman} />
                <p class="name">Daniela Shuman</p>
                <p class="desc">Co-Director of Tech</p>
              </div>
              <div class="team-member">
                <img src={JonnyRogers} />
                <p class="name">Jonny Rogers</p>
                <p class="desc">Associate Director of Tech</p>
              </div>
              <div class="team-member">
                <img src={IrisSu} />
                <p class="name">Iris Su</p>
                <p class="desc">Director of PR</p>
              </div>
            </div>

            <div class="row">
              <div class="team-member">
                <img src={RuhiMistry} />
                <p class="name">Ruhi Mistry</p>
                <p class="desc">Associate Director</p>
              </div>
              <div class="team-member">
                <img src={NikkiSuzani} style="image-orientation: 90deg;"/>
                <p class="name">Nikki Suzani</p>
                <p class="desc">Associate Director</p>
              </div>
              <div class="team-member">
                <img src={BlenKedir} />
                <p class="name">Blen Kedir</p>
                <p class="desc">Associate Director</p>
              </div>
            </div>

            <div class="row">
              <div class="team-member">
                <img src={SandraChiu} />
                <p class="name">Sandra Chiu</p>
                <p class="desc">Director of Media and Design</p>
              </div>
              <div class="team-member">
                <img src={JeffreyYao} />
                <p class="name">Jeffrey Yao</p>
                <p class="desc">Associate Director of Media and Design</p>
              </div>
              <div class="team-member">
                <img src={ChaseSouder} style="image-orientation: 90deg;"/>
                <p class="name">Chase Souder</p>
                <p class="desc">Co-Director of Business</p>
              </div>
            </div>

            <div class="row">
              <div class="team-member">
                <img src={CarterMartindale} />
                <p class="name">Carter Martindale</p>
                <p class="desc">Co-Director of Business</p>
              </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Team

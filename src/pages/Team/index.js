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
import LinaCho from "./headshot/lina-cho.jpg"

const Team = () => {
    return(
        <div>
            <Navbar/>
            <div class="container">

            <div class="row">
            <div class="column">
              <div class="team-member">
                <img src={KarlyHou} />
                <div class="card">
                  <p class="name">Karly Hou</p>
                  <p class="school">Harvard University, 2023</p>
                  <p class="desc">Chair</p>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={YaelLivneh}/>
                <p class="name">Yael Livneh</p>
                <p class="school">Cal Poly SLO, 2023</p>
                <p class="desc">Director of Logistics</p>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={SalmaKamni} />
                <p class="name">Salma Kamni</p>
                <p class="school">Stanford University, 2024</p>
                <p class="desc">Associate Director of Logistics</p>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={SimonTao} />
                <p class="name">Simon Tao</p>
                <p class="school">Stanford University, 2022</p>
                <p class="desc">Associate Director of Logistics</p>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={KevinTan} />
                <p class="name">Kevin Tan</p>
                <p class="school">Harvard University, 2023</p>
                <p class="desc">Associate Director of Logistics</p>
              </div>
            </div>
           <div class="column">
              <div class="team-member">
                <img src={SteveLi} />
                <p class="name">Steve Li</p>
                <p class="school">Harvard University, 2023</p>
                <p class="desc">Co-Director of Tech</p>
              </div>
              </div>
            <div class="column">
              <div class="team-member">
                <img src={DanielaShuman} />
                <p class="name">Daniela Shuman</p>
                <p class="school">Harvard University, 2023</p>
                <p class="desc">Co-Director of Tech</p>
              </div>
              </div>
            <div class="column">
              <div class="team-member">
                <img src={JonnyRogers} />
                <p class="name">Jonny Rogers</p>
                <p class="school">Williams College, 2023</p>
                <p class="desc">Associate Director of Tech</p>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={IrisSu} />
                <p class="name">Iris Su</p>
                <p class="school">Harvard University, 2023</p>
                <p class="desc">Director of PR</p>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={RuhiMistry} />
                <p class="name">Ruhi Mistry</p>
                <p class="school">UC Riverside, 2024</p>
                <p class="desc">Associate Director of PR</p>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={NikkiSuzani} />
                <p class="name">Nikki Suzani</p>
                <p class="school">Henry M. Gunn High School, 2021</p>
                <p class="desc">Associate Director of PR</p>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={BlenKedir} />
                <p class="name">Blen Kedir</p>
                <p class="school">Stanford University, 2023</p>
                <p class="desc">Associate Director of PR</p>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={LinaCho} />
                <p class="name">Lina Cho</p>
                <p class="school">Harvard University, 2023</p>
                <p class="desc">Associate Director of PR</p>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={SandraChiu} />
                <p class="name">Sandra Chiu</p>
                <p class="school">Northwestern, 2023</p>
                <p class="desc">Director of Media and Design</p>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={JeffreyYao} />
                <p class="name">Jeffrey Yao</p>
                <p class="school">Rhode Island School of Design, 2022</p>
                <p class="desc">Associate Director of Media and Design</p>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={ChaseSouder} />
                <p class="name">Chase Souder</p>
                <p class="school">Harvard University, 2023</p>
                <p class="desc">Co-Director of Business</p>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={CarterMartindale} />
                <p class="name">Carter Martindale</p>
                <p class="school">Harvard University, 2023</p>
                <p class="desc">Co-Director of Business</p>
              </div>
              </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Team

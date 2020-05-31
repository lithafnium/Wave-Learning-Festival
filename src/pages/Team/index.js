import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './styles.css'

import {Colors, Typography } from "../../styles";

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
import JoshuaChen from "./headshot/joshua-chen.png"
import AustinLi from "./headshot/austin-li.jpg"
import MarkPekala from "./headshot/mark-pekala.jpg"
import AlainDalma from './headshot/alain-saal-dalma.jpg'
import AmyShen from './headshot/amy-shen.jpg'

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
                  <Typography.Name>Karly Hou</Typography.Name>
                  <Typography.School>Harvard University, 2023</Typography.School>
                  <Typography.Position>Chair</Typography.Position>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={YaelLivneh}/>
                <Typography.Name>Yael Livneh</Typography.Name>
                <Typography.School>Cal Poly SLO, 2023</Typography.School>
                <Typography.Position>Director of Logistics</Typography.Position>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={SalmaKamni} />
                <Typography.Name>Salma Kamni</Typography.Name>
                <Typography.School>Stanford University, 2024</Typography.School>
                <Typography.Position>Associate Director of Logistics</Typography.Position>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={SimonTao} />
                <Typography.Name>Simon Tao</Typography.Name>
                <Typography.School>Stanford University, 2022</Typography.School>
                <Typography.Position>Associate Director of Logistics</Typography.Position>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={KevinTan} />
                <Typography.Name>Kevin Tan</Typography.Name>
                <Typography.School>Harvard University, 2023</Typography.School>
                <Typography.Position>Associate Director of Logistics</Typography.Position>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={AustinLi} />
                <Typography.Name>Austin Li</Typography.Name>
                <Typography.School>Harvard University, 2023</Typography.School>
                <Typography.Position>Associate Director of Logistics</Typography.Position>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={AlainDalma} />
                <Typography.Name>Alain Saal-Dalma</Typography.Name>
                <Typography.School>Carnegie Mellon University, 2023</Typography.School>
                <Typography.Position>Associate Director of Logistics</Typography.Position>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={AmyShen} />
                <Typography.Name>Amy Shen</Typography.Name>
                <Typography.School>University of Pennsylvania, 2022</Typography.School>
                <Typography.Position>Associate Director of Logistics</Typography.Position>
              </div>
            </div>
           <div class="column">
              <div class="team-member">
                <img src={SteveLi} />
                <Typography.Name>Steve Li</Typography.Name>
                <Typography.School>Harvard University, 2023</Typography.School>
                <Typography.Position>Co-Director of Tech</Typography.Position>
              </div>
              </div>
            <div class="column">
              <div class="team-member">
                <img src={DanielaShuman} />
                <Typography.Name>Daniela Shuman</Typography.Name>
                <Typography.School>Harvard University, 2023</Typography.School>
                <Typography.Position>Co-Director of Tech</Typography.Position>
              </div>
              </div>
            <div class="column">
              <div class="team-member">
                <img src={JonnyRogers} />
                <Typography.Name>Jonny Rogers</Typography.Name>
                <Typography.School>Williams College, 2023</Typography.School>
                <Typography.Position>Associate Director of Tech</Typography.Position>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={MarkPekala} />
                <Typography.Name>Mark Pekala</Typography.Name>
                <Typography.School>Harvard University, 2023</Typography.School>
                <Typography.Position>Associate Director of Tech</Typography.Position>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={IrisSu} />
                <Typography.Name>Iris Su</Typography.Name>
                <Typography.School>Harvard University, 2023</Typography.School>
                <Typography.Position>Director of PR</Typography.Position>
              </div>
            </div>
            <div class="column">
              <div class="team-member">
                <img src={RuhiMistry} />
                <Typography.Name>Ruhi Mistry</Typography.Name>
                <Typography.School>UC Santa Cruz, 2024</Typography.School>
                <Typography.Position>Associate Director of PR</Typography.Position>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={NikkiSuzani} />
                <Typography.Name>Nikki Suzani</Typography.Name>
                <Typography.School>Henry M. Gunn High School, 2021</Typography.School>
                <Typography.Position>Associate Director of PR</Typography.Position>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={BlenKedir} />
                <Typography.Name>Blen Kedir</Typography.Name>
                <Typography.School>Stanford University, 2023</Typography.School>
                <Typography.Position>Associate Director of PR</Typography.Position>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={JoshuaChen} />
                <Typography.Name>Joshua Chen</Typography.Name>
                <Typography.School>University of Pennsylvania, 2022</Typography.School>
                <Typography.Position>Associate Director of PR</Typography.Position>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={SandraChiu} />
                <Typography.Name>Sandra Chiu</Typography.Name>
                <Typography.School>Northwestern, 2023</Typography.School>
                <Typography.Position>Director of Media and Design</Typography.Position>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={JeffreyYao} />
                <Typography.Name>Jeffrey Yao</Typography.Name>
                <Typography.School>Rhode Island School of Design, 2022</Typography.School>
                <Typography.Position>Associate Director of Media and Design</Typography.Position>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={ChaseSouder} />
                <Typography.Name>Chase Souder</Typography.Name>
                <Typography.School>Harvard University, 2023</Typography.School>
                <Typography.Position>Co-Director of Business</Typography.Position>
              </div>
              </div>
              <div class="column">
              <div class="team-member">
                <img src={CarterMartindale} />
                <Typography.Name>Carter Martindale</Typography.Name>
                <Typography.School>Harvard University, 2023</Typography.School>
                <Typography.Position>Co-Director of Business</Typography.Position>
              </div>
              </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Team

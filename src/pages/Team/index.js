import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Colors, Typography } from "@/styles";
import * as Styles from "./styles";

import BlenKedir from "./headshot/blen-beharu-kedir.png";
import CarterMartindale from "./headshot/carter-martindale.jpg";
import ChaseSouder from "./headshot/chase-souder.JPG";
import DanielaShuman from "./headshot/daniela-shuman.png";
import IrisSu from "./headshot/iris-su.jpg";
import JeffreyYao from "./headshot/jeffrey-yao.jpg";
import JonnyRogers from "./headshot/jonny-rogers.jpg";
import KarlyHou from "./headshot/karly-hou.JPG";
import KevinTan from "./headshot/kevin-tan.jpg";
import NikkiSuzani from "./headshot/nikki-suzani.JPG";
import RuhiMistry from "./headshot/ruhi-mistry.JPG";
import SalmaKamni from "./headshot/salma-kamni.jpeg";
import SandraChiu from "./headshot/sandra-chiu.png";
import SimonTao from "./headshot/simon-tao.jpg";
import SteveLi from "./headshot/steve-li.jpg";
import YaelLivneh from "./headshot/yael-livneh.jpg";
import JoshuaChen from "./headshot/joshua-chen.png";
import AustinLi from "./headshot/austin-li.jpeg";
import MarkPekala from "./headshot/mark-pekala.jpg";
import AlainDalma from "./headshot/alain-saal-dalma.jpg";
import AmyShen from "./headshot/amy-shen.jpg";

const CHAIR = "Chair";
const DIRECTOR_LOGISTICS = "Director of Operations";
const ASSOC_DIRECTOR_LOGISTICS = "Associate Director of Operations";
const CO_DIRECTOR_TECH = "Co-Director of Tech";
const ASSOC_DIRECTOR_TECH = "Associate Director of Tech";
const DIRECTOR_PR = "Director of PR";
const ASSOC_DIRECTOR_PR = "Associate Director of PR";
const DIRECTOR_MARKETING = "Director of Marketing";
const DIRECTOR_MEDIA_DESIGN = "Director of Media and Design";
const ASSOC_DIRECTOR_MEDIA_DESIGN = "Associate Director of Media and Design";
const DIRECTOR_BUSINESS = "Director of Business";

const teamData = [
  {
    name: "Karly Hou",
    school: "Harvard 2023",
    position: CHAIR,
    image: KarlyHou,
  },
  {
    name: "Yael Livneh",
    school: "Cal Poly SLO 2023",
    position: DIRECTOR_LOGISTICS,
    image: YaelLivneh,
  },
  {
    name: "Salma Kamni",
    school: "Stanford 2024",
    position: ASSOC_DIRECTOR_LOGISTICS,
    image: SalmaKamni,
  },
  {
    name: "Simon Tao",
    school: "Stanford 2022",
    position: ASSOC_DIRECTOR_LOGISTICS,
    image: SimonTao,
  },
  {
    name: "Kevin Tan",
    school: "Harvard 2023",
    position: ASSOC_DIRECTOR_LOGISTICS,
    image: KevinTan,
  },
  {
    name: "Austin Li",
    school: "Harvard 2023",
    position: ASSOC_DIRECTOR_LOGISTICS,
    image: AustinLi,
  },
  {
    name: "Alain Saal-Dalma",
    school: "Carnegie Mellon University 2023",
    position: ASSOC_DIRECTOR_LOGISTICS,
    image: AlainDalma,
  },
  {
    name: "Amy Shen",
    school: "University of Pennsylvania 2022",
    position: ASSOC_DIRECTOR_LOGISTICS,
    image: AmyShen,
  },
  {
    name: "Steve Li",
    school: "Harvard 2023",
    position: CO_DIRECTOR_TECH,
    image: SteveLi,
  },
  {
    name: "Daniela Shuman",
    school: "Harvard 2023",
    position: CO_DIRECTOR_TECH,
    image: DanielaShuman,
  },
  {
    name: "Jonny Rogers",
    school: "Williams College 2023",
    position: ASSOC_DIRECTOR_TECH,
    image: JonnyRogers,
  },
  {
    name: "Mark Pekala",
    school: "Harvard 2023",
    position: ASSOC_DIRECTOR_TECH,
    image: MarkPekala,
  },
  {
    name: "Iris Su",
    school: "Harvard 2023",
    position: DIRECTOR_PR,
    image: IrisSu,
  },
  {
    name: "Ruhi Mistry",
    school: "UC Santa Cruz 2024",
    position: ASSOC_DIRECTOR_PR,
    image: RuhiMistry,
  },
  {
    name: "Nikki Suzani",
    school: "Henry M. Gunn High School 2021",
    position: ASSOC_DIRECTOR_PR,
    image: NikkiSuzani,
  },
  {
    name: "Blen Kedir",
    school: "Stanford 2023",
    position: ASSOC_DIRECTOR_PR,
    image: BlenKedir,
  },
  {
    name: "Joshua Chen",
    school: "University of Pennsylvania 2022",
    position: DIRECTOR_MARKETING,
    image: JoshuaChen,
  },
  {
    name: "Sandra Chiu",
    school: "Northwestern 2023",
    position: DIRECTOR_MEDIA_DESIGN,
    image: SandraChiu,
  },
  {
    name: "Jeffrey Yao",
    school: "Rhode Island School of Design 2022",
    position: ASSOC_DIRECTOR_MEDIA_DESIGN,
    image: JeffreyYao,
  },
  {
    name: "Carter Martindale",
    school: "Harvard 2023",
    position: DIRECTOR_BUSINESS,
    image: CarterMartindale,
  },
]

function getColor(position) {
  if (position === CHAIR || position === DIRECTOR_MARKETING) {
    return Colors.WLF_PURPLE;
  } else if (position === DIRECTOR_LOGISTICS || position === ASSOC_DIRECTOR_LOGISTICS || position === DIRECTOR_MEDIA_DESIGN || position === ASSOC_DIRECTOR_MEDIA_DESIGN) {
    return Colors.WLF_TURQOUISE;
  } else if (position === CO_DIRECTOR_TECH || position === ASSOC_DIRECTOR_TECH || position === DIRECTOR_BUSINESS) {
    return Colors.WLF_YELLOW;
  } else if (position === DIRECTOR_PR || position === ASSOC_DIRECTOR_PR) {
    return Colors.WLF_ORANGE;
  } else {
    return Colors.WLF_TURQOUISE
  }
}

const PersonIcon = (person) => {
  if (person.name === "blank") return <div />
  return (
    <Styles.PersonBackground>
      <Styles.PersonImage src={person.image} style={{borderColor: getColor(person.position)}}/>
      <Typography.Name>{person.name}</Typography.Name>
      <Typography.School>{person.school}</Typography.School>
      <Typography.Position>{person.position}</Typography.Position>
    </Styles.PersonBackground>
  )
}

const Team = () => {
    return(
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Navbar/>
        <Styles.TeamRow>
          {teamData.map((person) => {
            return PersonIcon(person);
          })}
        </Styles.TeamRow>
        <Footer />
      </div>
  );
};

export default Team;

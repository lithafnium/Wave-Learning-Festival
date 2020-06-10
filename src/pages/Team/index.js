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
import AustinLi from "./headshot/austin-li.jpg";
import MarkPekala from "./headshot/mark-pekala.jpg";
import AlainDalma from "./headshot/alain-saal-dalma.jpg";
import AmyShen from "./headshot/amy-shen.jpg";

const teamData = [
  {
    name: "Karly Hou",
    school: "Harvard 2023",
    position: "Chair",
    image: KarlyHou,
  },
  {
    name: "Yael Livneh",
    school: "Cal Poly SLO, 2023",
    position: "Director of Logistics",
    image: YaelLivneh,
  },
  {
    name: "Salma Kamni",
    school: "Stanford 2024",
    position: "Associate Director of Logistics",
    image: SalmaKamni,
  },
  {
    name: "Simon Tao",
    school: "Stanford 2022",
    position: "Associate Director of Logistics",
    image: SimonTao,
  },
  {
    name: "Kevin Tan",
    school: "Harvard 2023",
    position: "Associate Director of Logistics",
    image: KevinTan,
  },
  {
    name: "Austin Li",
    school: "Harvard 2023",
    position: "Associate Director of Logistics",
    image: AustinLi,
  },
  {
    name: "Alain Saal-Dalma",
    school: "Carnegie Mellon University, 2023",
    position: "Associate Director of Logistics",
    image: AlainDalma,
  },
  {
    name: "Amy Shen",
    school: "University of Pennsylvania, 2022",
    position: "Associate Director of Logistics",
    image: AmyShen,
  },
  {
    name: "Steve Li",
    school: "Harvard 2023",
    position: "Co-Director of Tech",
    image: SteveLi,
  },
  {
    name: "Daniela Shuman",
    school: "Harvard 2023",
    position: "Co-Director of Tech",
    image: DanielaShuman,
  },
  {
    name: "Jonny Rogers",
    school: "Williams College, 2023",
    position: "Associate Director of Tech",
    image: JonnyRogers,
  },
  {
    name: "Mark Pekala",
    school: "Harvard 2023",
    position: "Associate Director of Tech",
    image: MarkPekala,
  },
  {
    name: "Iris Su",
    school: "Harvard 2023",
    position: "Director of PR",
    image: IrisSu,
  },
  {
    name: "Ruhi Mistry",
    school: "UC Santa Cruz, 2024",
    position: "Associate Director of PR",
    image: RuhiMistry,
  },
  {
    name: "Nikki Suzani",
    school: "Henry M. Gunn High School, 2021",
    position: "Associate Director of PR",
    image: NikkiSuzani,
  },
  {
    name: "Blen Kedir",
    school: "Stanford 2023",
    position: "Associate Director of PR",
    image: BlenKedir,
  },
  {
    name: "Joshua Chen",
    school: "University of Pennsylvania, 2022",
    position: "Associate Director of PR",
    image: JoshuaChen,
  },
  {
    name: "Sandra Chiu",
    school: "Northwestern, 2023",
    position: "Director of Media and Design",
    image: SandraChiu,
  },
  {
    name: "Jeffrey Yao",
    school: "Rhode Island School of Design, 2022",
    position: "Associate Director of Media and Design",
    image: JeffreyYao,
  },
  {
    name: 'blank',
  },
  {
    name: "Chase Souder",
    school: "Harvard 2023",
    position: "Co-Director of Business",
    image: ChaseSouder,
  },
  {
    name: "Carter Martindale",
    school: "Harvard 2023",
    position: "Co-Director of Business",
    image: CarterMartindale,
  },
]

function getColor(position) {
  if (position === "Chair") {
    return Colors.WLF_PURPLE;
  } else if (position === "Director of Logistics" || position === "Associate Director of Logistics") {
    return Colors.WLF_TURQOUISE;
  } else if (position === "Co-Director of Tech" || position === "Associate Director of Tech") {
    return Colors.WLF_YELLOW;
  } else if (position === "Director of PR" || position === "Associate Director of PR") {
    return Colors.WLF_ORANGE;
  } else if (position === "Director of Media and Design" || position === "Associate Director of Media and Design") {
    return Colors.WLF_PURPLE;
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

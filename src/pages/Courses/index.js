import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "../../globalStyles"
import './styles.css'
import {Colors, Typography} from "../../styles";
import {FirebaseContext} from '../../firebaseContext'
import 'firebase/firestore'

import WaveLogo from '../Blog/wave-learning-logo.png'
import ProgressBar from './w3_progressbar-01.png'

import Acapella from './W3-CourseImages/acappella.jpg'
import WomansWear from './W3-CourseImages/american womenswear.jpg'
import Medicine from './W3-CourseImages/ancient medicine.jpg'
import Anthropology from './W3-CourseImages/anthropology.png'
import AroundWorld from './W3-CourseImages/around the world through film.jpg'
import Spanish from './W3-CourseImages/basic spanish.jpg'
import Chemistry from './W3-CourseImages/chemistry.jpg'
import Coffee from './W3-CourseImages/coffee.jpg'
import Corona from './W3-CourseImages/corona ad anxiety.png'
import DeathOfPrint from './W3-CourseImages/death of print.jpg'
import HumanBrain from './W3-CourseImages/exploring the human brain.jpg'
import Investing from './W3-CourseImages/fundementals of investing.jpg'
import GOAT from './W3-CourseImages/GOAT.jpg'
import Cancer from './W3-CourseImages/how cancer works.jpg'
import StuffWorks from './W3-CourseImages//how stuff works.jpg'
import Cardiothoracic from './W3-CourseImages/intro to cardiothoracic system.jpg'
import CreativeWriting from './W3-CourseImages/intro to creative writing.jpg'
import Epidemiology from './W3-CourseImages/intro to epidemiology.jpg'
import Film from './W3-CourseImages/intro to film.png'
import Java from './W3-CourseImages/intro to java.jpg'
import Macedonian from './W3-CourseImages/intro to Macedonian language.jpg'
import Mechanics from './W3-CourseImages/intro to mechanics.jpg'
import Physics from './W3-CourseImages/intro to physics.jpg'
import Python from './W3-CourseImages/intro to python.png'
import Israel from './W3-CourseImages/israel.jpg'
import MedicalEthics from './W3-CourseImages/medical ethics.jpg'
import QuantumComputing from './W3-CourseImages/quantum computing.jpg'
import Quaranzines from './W3-CourseImages/quaranzines.jpg'
import Quran from './W3-CourseImages/quran.jpg'
import Sharks from './W3-CourseImages/sharks.jpg'
import Journey from './W3-CourseImages/the hero_s journey.jpg'
import Stars from './W3-CourseImages/to the stars and beyond.jpg'
import Unity from './W3-CourseImages/unity.png'
import WesternArt from './W3-CourseImages/western art history.jpg'
import GreatSpeeches from './W3-CourseImages/Great speeches.png'
import PublicSpeaking from './W3-CourseImages/Public speaking.jpg'
import ArtOfLaughs from './W3-CourseImages/Stand-up.png'
import HistorysTopHits from './W3-CourseImages/western-music.png'
import ASL from './W3-CourseImages/introduction-to-american-sign-language.png'
import Environmental from './W3-CourseImages/Climate crisis.png'
import DrugDevelopment from './W3-CourseImages/drug development.jpg'
import Computers from './W3-CourseImages/computers.jpg'
import Mongolia from './W3-CourseImages/mongolia.jpg'
import STEM from './W3-CourseImages/stem for social good.jpg'
import RacistAmerica from './W3-CourseImages/racist america.jpg'
import PublicPolicy from './W3-CourseImages/public policy.jpg'

//import ASL 
//import greatspeeches
//import WesternMusic 
//import GameDesign
//import laughs
//import PublicSpeaking
import Filter from '../../components/Filter'

const Courses = () => {
  const { db, storage } = useContext(FirebaseContext)
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([])
  const [coursePics, setCoursePics] = useState([]);
  const [imageRef, setImageRef] = useState('');
  const [filteredItems, updateFiltered] = useState([])
  
  const addFilter = (text, color) => {
    updateFiltered(filteredItems => [...filteredItems, {text, color}])
  }

  const removeFilter = (text, color) => {
    updateFiltered(filteredItems.filter(item => item.text !== text))
  }

  /* Set Current Wave */
  const WAVE = 3;

  async function getPhotoUrl(picture) {
    await storage.child('flamelink/media/' + picture.data().file).getDownloadURL()
      .then(function(url) {
          //setCoursePics(coursePics => [...coursePics, url]);
          return url;
      }).catch(function(error) {
        console.log("Error in download URL");
        return WaveLogo
      });
  }

  async function getPhotoData(doc){
    if (doc.data().picture.length > 0) {
      await db.doc(doc.data().picture[0].path).get()
        .then(function(picture) {
          if (picture.exists) {
            //Access Image URL from Storage
            return getPhotoUrl(picture);            
          } 
          else {
            console.log("No such document!");
              //setCoursePics(coursePics => [...coursePics, WaveLogo]);
              return WaveLogo;
          }
        }).catch(function(error) {
          console.log("Error getting document:", error);
            //setCoursePics(coursePics => [...coursePics, WaveLogo]);
            return WaveLogo;
        });
      }
      return WaveLogo
    }

  useEffect(() => {
    if (db && loading && !courses.length) {
      db.collection("fl_content")
      .get()
      .then(function(querySnapshot) {
        let courses = [];
        //let coursePics = [];
        querySnapshot.forEach(function(doc) {
          if (doc.data().schema == "coursePage" && doc.data().wave == WAVE) {
            if(courses.length >= coursePics.length) {
              getPhotoData(doc).then(function(url) {
                console.log("URL => " + url);
                //setCoursePics(coursePics => [...coursePics, url]);
            }).catch(console.log);}
            courses.push(doc);
          } 
        });
        setCourses(courses);
        setFilteredCourses(courses);
        setLoading(false);
      })
      .catch(function(error) {
          console.log("Ex rror getting documents: ", error);
      });
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db, loading, courses])

  useEffect(() => {
    if(filteredItems.length === 0){
      setFilteredCourses(courses)
    } else{
      setFilteredCourses(courses.filter(course => {
        for(let i = 0; i < filteredItems.length; i++){
          if(course.data().courseCategory === filteredItems[i].text){
            return true
          }
        }
        return false
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredItems])


  /*if (loading && !coursePics.length) {
    let coursePicURL = [];
    courses.forEach(function (course) {
      if (course.data().picture.length > 0 && course.data().picture[0].path.replace('fl_files/', '') == 'SvNojEXivXUOOoRIGfjo') {
        console.log("Reached COURSE!" + '/W3-CourseImages/' + course.data().picture[0].path.replace('fl_files/', '') + '.png');
        console.log("ACTUAL: src/pages/Courses/W3-CourseImages/SvNojEXivXUOOoRIGfjo.png");
        coursePicURL.push('/W3-CourseImages/' + course.data().picture[0].path.replace('fl_files/', '') + '.png');
      }
      else {
        coursePicURL.push("../Blog/wave-learning-logo.png");
      }  
    })
    setCoursePics(coursePicURL);
  }

  function getLocalPic(course) {
    if (course.data().picture.length > 0 && course.data().picture[0].path.replace('fl_files/', '') == 'SvNojEXivXUOOoRIGfjo') {
      console.log("ACTUAL: src/pages/Courses/W3-CourseImages/SvNojEXivXUOOoRIGfjo.png");
      return '/W3-CourseImages/' + course.data().picture[0].path.replace('fl_files/', '') + '.png';
    }
    else {
      return "../Blog/wave-learning-logo.png";
    }
  }*/

  if (loading) {
    return (
      <>
      <Navbar/>
      <Container>
      <ContainerInner>
        <Typography.BodyText style={{color: Colors.WLF_BLACK}}>
          Loading...  
        </Typography.BodyText>
      </ContainerInner>
      </Container>
      <Footer/>
      </>
    );
  }
    return(
        <div>
            <Navbar/>
            <Container>
            <ContainerInner>
            <div class="progressbar">
              <img src= {ProgressBar} alt = "centered image" />
            </div>
		
            <Typography.BodyText style={{color: Colors.WLF_BLACK }}>
            We are excited to offer {courses.length} courses across a variety of subjects for Wave Three running from July 6th to July 17th. Our
            volunteer educators have worked hard to prepare engaging and
            thoughtful curricula and can't wait to share their passions with
            you. Click each course for more info, and feel free to send any
            questions to{" "}
            <a href="mailto:wavelf.logistics@gmail.com">
              wavelf.logistics@gmail.com
            </a><br /><br /><br />
            </Typography.BodyText>
            <div class = "row"> 
              <Filter addFilter={addFilter} removeFilter={removeFilter} filteredItems={filteredItems}/>
            </div>
            <div class="container">
            <div class="row">
            {filteredCourses.map( (course, index) => (
              <div class="column">
                <a href={`${course.id}`}>
                  <div class="course">
                    <div class="image-container">
                      {course.data().picture.length == 0  &&                      
                      <img src={WaveLogo}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/AFL06BDO1GbZtH7sxnsQ" &&
                      <img src={Acapella}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/4k7o8dYEXnp0075763oU" &&
                      <img src={WomansWear}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/S8hix2rwaj3J37xO6m4M" &&
                      <img src={Medicine}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/SvNojEXivXUOOoRIGfjo" &&
                      <img src={Anthropology}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/aNvIEIt5gg8na7xMtY5a" &&
                      <img src={AroundWorld}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/gVPySgwdZCy0btecQpkZ" &&
                      <img src={Spanish}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/u5HlO1Cq5ZVFrPYjecEV" &&
                      <img src={Chemistry}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/AePNPPhSK67SOvKNZJ9v" &&
                      <img src={Coffee}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/fKjST9ea5T9ZGfQuxnvt" &&
                      <img src={Corona}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/S4StMeJKeHJMcB3cREIZ" &&
                      <img src={DeathOfPrint}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/nO4k8Ub7UXDmGO9NsbNT" &&
                      <img src={HumanBrain}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/Sre7xzKuFDuyECMyBBTZ" &&
                      <img src={Investing}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/2RfiIPmXezZQxEaoAfVR" &&
                      <img src={GOAT}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/ro3py83vOizom20uJ5v2" &&
                      <img src={Cancer}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/SOeo2eoNTPMc3F9YphXZ" &&
                      <img src={StuffWorks}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/umhs2jIY0z61SOIwNJmz" &&
                      <img src={Cardiothoracic}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/ADfRuIr4wsDLemXWSYlq" &&
                      <img src={CreativeWriting}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/1hSjNETqUPv4fSPJubJu" &&
                      <img src={Epidemiology}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/lPa54EZCkomTbaOwkFmX" &&
                      <img src={Film}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/NHMtmq7G5qVjtgDjPXcP" &&
                      <img src={Java}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/ciEVVVzwLlqzMz9XGlB3" &&
                      <img src={Macedonian}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/8E7rYYGoGxkMVhgcP91O" &&
                      <img src={Python}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/kDN4xVzihWlpkaUKwym3" &&
                      <img src={Israel}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/HiyJhPxyUluJPnTRZeIk" &&
                      <img src={MedicalEthics}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/HKoTwH9aKm4kx7j0KtAP" &&
                      <img src={QuantumComputing}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/nrgo1cS9y9LdBkNCZyiK" &&
                      <img src={Quaranzines}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/oRyak2fOujhoFPFZUIoO" &&
                      <img src={Quran}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/RYYBvRqZzzTjJucbMosb" &&
                      <img src={Sharks}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/LIwwOGX1ERkFLlwnxuDm" &&
                      <img src={Journey}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/KUSEUsPdaFh2I95faoU1" &&
                      <img src={Stars}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/Hv1W67YAJSbCYOf2pArN" &&
                      <img src={WesternArt}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/BiDZUinL1SvSn9l4M4b6" &&
                      <img src={ASL}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/o9CUbGBQHh1KBBBhx1fz" &&
                      <img src={GreatSpeeches}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/AVLNMVBHJYmMiK7T6S6d" &&
                      <img src={HistorysTopHits}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/TRYtJYbnKuuA68vpufge" &&
                      <img src={Unity}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/o2qLfyGx9ecs2LbZNkgr" &&
                      <img src={ArtOfLaughs}/>}
                      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/05nsl0JBq97UHnDnGb8D" &&
                      <img src={PublicSpeaking}/>}
		      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/rZRGXnvjFTSmZpCCyaaC" &&
                      <img src={Physics}/>}
		      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/hu5vnQy3YLytJuS3zL90" &&
                      <img src={Mechanics}/>}
		      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/uI6pEi6Aj9yp754Gzhys" &&
                      <img src={Environmental}/>}
		      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/Z0eHgdYSnEtbG8OAbdSn" &&
                      <img src={DrugDevelopment}/>}
		      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/6k4sn40qu1xhdlkiglqQ" &&
                      <img src={Computers}/>}
		      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/EsQe9zKtBpWcSot9dt2M" &&
                      <img src={Mongolia}/>}
		      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/VaMIXr7M6BJjMwWBGbOe" &&
                      <img src={STEM}/>}
		      {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/MyPs5rX8EV1Tw1NoXCyR" &&
                      <img src={RacistAmerica}/>}
                       {course.data().picture.length > 0 && course.data().picture[0].path == "fl_files/OCgph6Rw77j6Ea4kIDlj" &&
                      <img src={PublicPolicy}/>}



                    </div>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK}}>{course.data().courseTitle}</Typography.Header2>
                    {course.data().teachers.teacher1Name && !course.data().teachers.teacher2Name && !course.data().teachers.teacher3Name &&
                      <><Typography.BodyText style={{fontSize: 16}}>{course.data().teachers.teacher1Name}</Typography.BodyText>
                      <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>{course.data().teachers.teacher1School}</Typography.BodyText></>}
                    {course.data().teachers.teacher1Name && course.data().teachers.teacher2Name && !course.data().teachers.teacher3Name &&
                      <><Typography.BodyText style={{fontSize: 16}}>{course.data().teachers.teacher1Name} and {course.data().teachers.teacher2Name}</Typography.BodyText>
                      <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>{course.data().teachers.teacher1School} and {course.data().teachers.teacher2School}</Typography.BodyText></>}
                    {course.data().teachers.teacher1Name && course.data().teachers.teacher2Name && course.data().teachers.teacher3Name &&
                      <><Typography.BodyText style={{fontSize: 16}}>{course.data().teachers.teacher1Name}, {course.data().teachers.teacher2Name}, and {course.data().teachers.teacher3Name}</Typography.BodyText>
                      <Typography.BodyText style={{fontSize: 16, color: Colors.GRAY}}>{course.data().teachers.teacher1School}, {course.data().teachers.teacher2School}, and {course.data().teachers.teacher3School}</Typography.BodyText></>}
                  </div>
                </a>
              </div>
            ))}
            
        </div>
        </div>
        <Typography.Header style={{color: Colors.WLF_PURPLE}}>Course Schedule</Typography.Header>
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=8tk6cntof4tuog58lv572ikcp4%40group.calendar.google.com&ctz=America%2FBoston" 
            style={{'border': '0px', 'width':'100%', 'height':'600px', 'frameborder':'0px', 'scrolling':'no'}}>
          </iframe>  
          <Typography.Header style={{color: Colors.WLF_PURPLE, marginTop: 50}}>Register by 6/30 to take a class in the third wave!</Typography.Header>
	        <Typography.BodyText style={{color: Colors.WLF_BLACK, marginBottom: 50}}>
             If you are unavailable for this wave, sign up for <a href = "www.wavelf.org/#newsletter">updates</a> to be the first to register for future waves!
          </Typography.BodyText>
          <iframe 
            title="form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSe8hslWrvKqf8FAA7-dljXimDtmS4kXAGetyZUybkIQHmCQLQ/viewform?embedded=true" 
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

export default Courses

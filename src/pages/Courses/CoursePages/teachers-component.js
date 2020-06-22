import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Container, ContainerInner } from "../../../globalStyles.js"
import {Colors, Typography} from "../../../styles";
import { Button } from "../styles";
import {FirebaseContext} from '../../../firebaseContext'
import 'firebase/firestore'

import Teacher from './teacher.js'
import WaveLogo from '../../Blog/wave-learning-logo.png'

const Teachers = ( {teachersObj} ) => {
    const { db, storage } = useContext(FirebaseContext)
    const [loading, setLoading] = useState(true);

    //Teacher Objects
    const [teachers, setTeachers] = useState([]);
    //const [headshots, setHeadshots] = useState([]);

    const [headshot1, setHeadshot1] = useState('');
    const [headshot2, setHeadshot2] = useState('');
    const [headshot3, setHeadshot3] = useState('');
    const [headshot4, setHeadshot4] = useState('');
    const [headshot5, setHeadshot5] = useState('');
    const [headshot6, setHeadshot6] = useState('');
    const [headshot7, setHeadshot7] = useState('');

    console.log(teachersObj);

    if (db && loading && teachersObj) {
      console.log("TEACHER OBJ: ", teachersObj);
      const teacherObjs = [];
      const headshotUrls = [];
      
      if (teachersObj.teacher1Headshot) {
      const teacher1 = new Teacher (
        teachersObj.teacher1Name,
        teachersObj.teacher1School,
        teachersObj.teacher1Bio,
        teachersObj.teacher1Headshot[0]
      );

      teacher1.getPic(db, storage).then(function(url) {
        console.log(url)
        //headshotUrls.push(url);
        setHeadshot1(url);
      })
      .catch(console.log);
      console.log("REACHED TEACHER")
      teacherObjs.push(teacher1);
    }

    if (teachersObj.teacher2Name) {
      const teacher2 = new Teacher (
        teachersObj.teacher2Name,
        teachersObj.teacher2School,
        teachersObj.teacher2Bio,
        teachersObj.teacher2Headshot[0]
      );

      teacher2.getPic(db, storage).then(function(url) {
        setHeadshot2(url);
        //headshotUrls.push(url);
      })
      .catch(console.log);
      teacherObjs.push(teacher2);
    }

    if (teachersObj.teacher3Name) {
      const teacher3 = new Teacher (
        teachersObj.teacher3Name,
        teachersObj.teacher3School,
        teachersObj.teacher3Bio,
        teachersObj.teacher3Headshot[0]
      );

      teacher3.getPic(db, storage).then(function(url) {
        //headshotUrls.push(url);
        setHeadshot3(url);
      })
      .catch(console.log);
      teacherObjs.push(teacher3);
    }

    if (teachersObj.teacher4Name) {
      const teacher4 = new Teacher (
        teachersObj.teacher4Name,
        teachersObj.teacher4School,
        teachersObj.teacher4Bio,
        teachersObj.teacher4Headshot[0]
      );

      teacher4.getPic(db, storage).then(function(url) {
        setHeadshot4(url);
      })
      .catch(console.log);
      teacherObjs.push(teacher4);
    }

    if (teachersObj.teacher5Name) {
      const teacher5 = new Teacher (
        teachersObj.teacher5Name,
        teachersObj.teacher5School,
        teachersObj.teacher5Bio,
        teachersObj.teacher5Headshot[0]
      );

      teacher5.getPic(db, storage).then(function(url) {
        //headshotUrls.push(url);
        setHeadshot5(url);
      })
      .catch(console.log);
      teacherObjs.push(teacher5);
    }

    if (teachersObj.teacher6Name) {
      const teacher6 = new Teacher (
        teachersObj.teacher6Name,
        teachersObj.teacher6School,
        teachersObj.teacher6Bio,
        teachersObj.teacher6Headshot[0]
      );

      teacher6.getPic(db, storage).then(function(url) {
        setHeadshot6(url);
      })
      .catch(console.log);
      teacherObjs.push(teacher6);
    }

    if (teachersObj.teacher7Name) {
      const teacher7 = new Teacher (
        teachersObj.teacher7Name,
        teachersObj.teacher7School,
        teachersObj.teacher7Bio,
        teachersObj.teacher7Headshot[0]
      );

      teacher7.getPic(db, storage).then(function(url) {
        setHeadshot7(url);
      })
      .catch(console.log);
      teacherObjs.push(teacher7);
    }
    console.log(headshotUrls.length);
    setTeachers(teacherObjs);
    setLoading(false);
  }
    console.log(teachers);

    return (
      <div>
        {teachers.map( (teacher, index) => (
          <div class="teacher-container">
            <p>
            {(() => {
              switch (index) {
                case 0 :
                  return <img src={headshot1} class="img-left"/>;
                case 1 :
                  return <img src={headshot2} class="img-left"/>;
                case 2 :
                  return <img src={headshot3} class="img-left"/>;
                case 3 :
                  return <img src={headshot4} class="img-left"/>;
                case 4 :
                  return <img src={headshot5} class="img-left"/>;
                case 5 :
                  return <img src={headshot6} class="img-left"/>;
                case 6 :
                  return <img src={headshot7} class="img-left"/>;
                default:
                  return <img src={WaveLogo} class="img-left"/>;
              }
            })()}
            <b>Taught by: </b>{teacher.name}<br/>
            <b>Teacher Bio: </b>{teacher.bio}
            </p>
          </div>
        ))}
      </div>
  )
}

export default Teachers

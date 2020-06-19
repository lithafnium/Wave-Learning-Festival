import { useContext, useState } from 'react'
import { Container, ContainerInner } from "../../../globalStyles.js"
import {FirebaseContext} from '../../../firebaseContext'
import 'firebase/firestore'

import WaveLogo from '../../Blog/wave-learning-logo.png'
import Teacher from './teacher.js'

export default class Course {
  constructor(data, db, storage) {
    console.log(data);
    this.db = db;
    this.storage = storage;
    this.title = data.courseTitle;
    this.description = data.courseDescription;
    this.teachers = [];
    this.prereqs = data.prereqs;
    this.targetAudience = data.targetAudience;

    //Date + Time
    this.dates = data.classDates;
    this.days = data.classDays;
    this.time = data.classTime;

    this.pic = data.picture[0];

    if (!this.teachers) {
      const teacher1 = new Teacher (
        db, 
        storage,
        data.teachers.teacher1Name, 
        data.teachers.teacher1School, 
        data.teachers.teacher1Bio, 
        data.teachers.teacher1Headshot[0]
      );

      if (data.teachers.teacher2Name)
      {
        const teacher2 = new Teacher (
          db, 
          storage,
          data.teachers.teacher2Name, 
          data.teachers.teacher2chool, 
          data.teachers.teacher2Bio, 
          data.teachers.teacher2Headshot[0]
        );
        this.teachers = [teacher1,teacher2];
      }
      else {
        this.teachers = [teacher1];
      }
  }
  return this;
}

  getPic = () => {
    const currentStorage = this.storage;
    //Access Reference String
    return this.db.doc(this.pic.path).get()
    .then(function(headshot) {
      if (headshot.exists) {
        //Access Image URL from Storage
        return currentStorage.child('flamelink/media/' + headshot.data().file).getDownloadURL()
          .then(function(url) {
            return url;
          }).catch(function(error) {
            console.log("Error in download URL");
            return WaveLogo;
          });
      } else {
      console.log("No such document!");
        return WaveLogo;
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
      return WaveLogo;
    });
  };
}
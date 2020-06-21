import { useContext } from 'react'
import { Container, ContainerInner } from "../../../globalStyles.js"
import {FirebaseContext} from '../../../firebaseContext'
import 'firebase/firestore'

import WaveLogo from '../../Blog/wave-learning-logo.png'
import { resolve } from 'dns'

export default class Teacher {
  constructor(name, school, bio, headshotFile) {
    this.name = name;
    this.school = school;
    this.bio = bio;
    this.pic = headshotFile;

    return this;
  }

  getPic = (db, storage) => {
    //const currentStorage = this.storage;
    //Access Reference String
    return db.doc(this.pic.path).get()
      .then(function(headshot) {
        if (headshot.exists) {
          //Access Image URL from Storage
          return storage.child('flamelink/media/' + headshot.data().file).getDownloadURL()
            .then(function(url) {
              return url;
            }).catch(function(error) {
              console.log("Error in download URL");
              return WaveLogo;
            });
        } 
        else {
          console.log("No such document!");
          return WaveLogo;
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
        return WaveLogo;
      });
  };

}
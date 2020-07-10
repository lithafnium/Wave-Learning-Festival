import React, { useState, useContext } from 'react'
import {Colors, Typography} from "../../styles";
import { FirebaseContext } from '../../firebaseContext'
import 'firebase/firestore'

import WaveLogo from './wave-learning-logo.png'

/**
 * Blog Post is for an individual post directly on the blog page
 * @param {doc} props doc is a reference to an individual blog post in Firebase
 */

const BlogPost = (props) => {
    const { db, storage } = useContext(FirebaseContext);
    const data = props.doc.data();
    const [contentDetailed, setContent] = useState(data.contentDetailed);
    const [image, setImage] = useState('');

    if (db && storage && props.doc.data().image[0] && !image) {
      db.doc(props.doc.data().image[0].path).get()
      .then(function(headshot) {
        if (headshot.exists) {
          //Access Image URL from Storage
          storage.child('flamelink/media/' + headshot.data().file).getDownloadURL()
            .then(function(url) {
              setImage(url);
            }).catch(function(error) {
              console.log("Error in download URL");
              setImage(WaveLogo);
            });
        } 
        else {
          console.log("No such document!");
          setImage(WaveLogo);
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
        setImage(WaveLogo);
      });
    }
    
    //Cleaning Formatting
    if (contentDetailed.includes('color: rgb(0,0,0);') || contentDetailed.includes('font-family:')) {
      setContent(contentDetailed.replace(/style="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, ""));
    }

    return (
      <div class="card">
        <Typography.Header style={{'text-align': 'center'}}>{data.title}</Typography.Header>
        <Typography.BodyText style={{clear: 'right', 'text-align': 'center', color: Colors.WLF_BLACK}}>
          <b>Posted on: </b>{data.date.substring(0, data.date.indexOf("T"))}
        </Typography.BodyText>
        {data.image[0] && 
          <img src={image}/>}
        <Typography.BodyText style={{color: Colors.WLF_BLACK}}>
          <td dangerouslySetInnerHTML={{__html: contentDetailed}} />
        </Typography.BodyText>
      </div>
  )
}

export default BlogPost

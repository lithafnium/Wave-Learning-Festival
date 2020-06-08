import React, { useState, useContext } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Container, ContainerInner } from "../../../globalStyles.js"
import {FirebaseContext} from '../../../firebaseContext'
import 'firebase/firestore'
import WaveLogo from '../wave-learning-logo.png'

var support = (function () {
	if (!window.DOMParser) return false;
	var parser = new DOMParser();
	try {
		parser.parseFromString('x', 'text/html');
	} catch(err) {
		return false;
	}
	return true;
})();

var stringToHTML = function (str) {

	// If DOMParser is supported, use it
	if (support) {
		var parser = new DOMParser();
		var doc = parser.parseFromString(str, 'text/html');
		return doc.body;
	}

	// Otherwise, fallback to old-school method
	var dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;

};

const BlogPost = ({ match }) => {
    const {db} = useContext(FirebaseContext)
    const slug = match.params.slug;
    const [title, setTitle] = useState('')
    const [contentDetailed, setContent] = useState('')
    const [date, setDate] = useState('')
    if (!db){
      return (
        <>
        <Navbar/>
        <Container>
        <ContainerInner>
          <p>Couldn't connect to Database</p>
        </ContainerInner>
        </Container>
        <Footer/>
        </>
      );

    }
    console.log("Testing")
    if(db){
      console.log("REACHED DB");
      const courses = db.collection('fl_content').doc(slug);//'9nA09uxTNz8S6Jgjyfn3');
      courses.get().then(function(doc) {
        if (doc.exists) {
           const data = doc.data();
           //setDocData(doc);
           setTitle(data.title);
           setContent(data.content);
           setDate(data.date);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    }
    return (
      <div>
          <Navbar/>
          <Container>
              <ContainerInner>
              <h1>{title}</h1>
              <p style={{clear: 'right'}}>
                <b>Posted on: </b>{date.substring(0, date.indexOf("T"))}
              </p>
                {contentDetailed}
            </ContainerInner>
          </Container>
          <Footer/>
      </div>
  )
}

export default BlogPost

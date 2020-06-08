import React, { useState, useContext } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "../../globalStyles"
import './styles.css'
import {Colors, Typography} from "../../styles";
import {FirebaseContext} from '../../firebaseContext'
import 'firebase/firestore'
import WaveLogo from './wave-learning-logo.png'
<<<<<<< HEAD
import BlogPost from './blogpost.js'
=======
>>>>>>> Added Blog

const Blog = () => {
  const {db} = useContext(FirebaseContext)
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);

  if (db && loading && !blogPosts.length) {
      db.collection("fl_content")
      .get()
      .then(function(querySnapshot) {
        let posts = [];
        querySnapshot.forEach(function(doc) {
<<<<<<< HEAD
            if (doc.data().schema == "blogPost") {
=======
          console.log(doc.id, " => ", doc.data().schema);
            if (doc.data().schema == "blogPost") {
              console.log(doc.id, " => ", doc.data());
>>>>>>> Added Blog
              posts.push(doc);
            } 
        });
        setBlogPosts(posts);
        setLoading(false);
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
  }

  if (loading) {
    return (
      <>
      <Navbar/>
      <Container>
      <ContainerInner>
        <h1>Blog</h1>
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
            <h1>Blog</h1>
            <Typography.BodyText style={{color: Colors.WLF_BLACK}}>
<<<<<<< HEAD
              Welcome to Wave Learning Festival's Blog!
=======
              Welcome to Wave Learning Festivals Blog!
>>>>>>> Added Blog
            </Typography.BodyText>
            <div class="container">
            <div class="row">
            {blogPosts.map(post => (
<<<<<<< HEAD
              <BlogPost doc={post}/>
=======
              <div class="column">
              <a href={`${post.id}`}>
                <div class="course">
                  <div class="image-container">
                    <img src={WaveLogo}/>
                  </div>
                    <Typography.Header2 style={{color: Colors.WLF_BLACK}}>{post.data().title}</Typography.Header2>
                    <Typography.BodyText style={{fontSize: 16}}>{post.data().date.substring(0, post.data().date.indexOf("T"))}</Typography.BodyText>
                  </div>
              </a>
            </div>
>>>>>>> Added Blog
            ))}
        </div>
        </div>
            </ContainerInner>
          </Container>
            <Footer/>
        </div>
    )
}

export default Blog

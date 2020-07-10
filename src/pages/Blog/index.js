import React, { useState, useContext } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container, ContainerInner } from "../../globalStyles"
import './styles.css'
import {Colors, Typography} from "../../styles";
import {FirebaseContext} from '../../firebaseContext'
import 'firebase/firestore'
import BlogPost from './blogpost.js'

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
            if (doc.data().schema == "blogPost") {
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

  blogPosts.sort(function(a,b){
    return new Date(b.data().date) - new Date(a.data().date);
  });

  if (loading) {
    return (
      <>
      <Navbar/>
      <Container>
      <ContainerInner>
        <Typography.Header style={{ color: Colors.WLF_PURPLE }}>Blog</Typography.Header>
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
            <Typography.Header style={{ color: Colors.WLF_PURPLE }}>Blog</Typography.Header>
            <Typography.BodyText style={{color: Colors.WLF_BLACK}}>
              Welcome to Wave Learning Festival's Blog!
            </Typography.BodyText>
            <div class="container">
            <div class="row">
            {blogPosts.map(post => (
              <BlogPost doc={post}/>
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

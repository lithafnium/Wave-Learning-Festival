import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { Container, ContainerInner } from '../../../globalStyles.js'
import { Colors, Typography } from '../../../styles'
import { FirebaseContext } from '../../../firebaseContext'
import 'firebase/firestore'
/**
 * Blog Page creates a new page for an individual blog if there is overflow.
 */

const BlogPage = ({ match }) => {
  const { db } = useContext(FirebaseContext)
  const slug = match.params.blogSlug
  const [title, setTitle] = useState('')
  const [contentDetailed, setContent] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    if (db) {
      const courses = db.collection('fl_content').doc(slug)
      courses.get().then(function (doc) {
        if (doc.exists) {
          const data = doc.data()
          setTitle(data.title)
          if (data.contentDetailed.includes('color: rgb(0,0,0);') || data.contentDetailed.includes('font-family:')) {
            setContent(data.contentDetailed.replace(/style="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, ''))
          }
          setDate(data.date)
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!')
        }
      }).catch(function (error) {
        console.log('Error getting document:', error)
      })
    }
  }, [db])
  if (!db) {
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
    )
  }
  return (
    <div>
      <Navbar/>
      <Container>
        <ContainerInner>
          <h1 style={{ color: Colors.WLF_PURPLE, textAlign: 'center' }}>{title}</h1>
          <Typography.BodyText style={{ clear: 'right', textAlign: 'center', color: Colors.WLF_BLACK }}>
            <b>Posted on: </b>{date.substring(0, date.indexOf('T'))}
          </Typography.BodyText>
          <Typography.BodyText style={{ color: Colors.WLF_BLACK }}>
            <td dangerouslySetInnerHTML={{ __html: contentDetailed }} />
          </Typography.BodyText>
        </ContainerInner>
      </Container>
      <Footer/>
    </div>
  )
}

export default BlogPage

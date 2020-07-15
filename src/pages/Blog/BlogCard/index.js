import React, { useEffect, useContext, useState } from 'react'
import { BlogImage, Header, Title, Type, Heading } from './styles'
import { FirebaseContext } from '@/firebaseContext'
import WaveLogo from '../logo.svg'

const BlogCard = ({ doc, color }) => {
  const { db, storage } = useContext(FirebaseContext)
  const [image, setImage] = useState('')
  const [padding, setPadding] = useState(false)

  useEffect(() => {
    if (db && storage) {
      console.log(doc.data())
      if (doc.data().image.length) {
        db.doc(doc.data().image[0].path).get()
          .then(function (headshot) {
            if (headshot.exists) {
            // Access Image URL from Storage
              storage.child('flamelink/media/' + headshot.data().file).getDownloadURL()
                .then(function (url) {
                  console.log(url)
                  if (url) {
                    setImage(url)
                  } else setImage(WaveLogo)
                }).catch(function (error) {
                  console.log('Error in download URL')
                  setImage(WaveLogo)
                  throw error
                })
            } else {
              console.log('No such document!')
              setImage(WaveLogo)
            }
          }).catch(function (error) {
            console.log('Error getting document:', error)
            setImage(WaveLogo)
          })
      } else {
        setImage(WaveLogo)
        setPadding(true)
      }
    }
  }, [doc])
  const redirect = (link) => {
    window.location.href = `/blog/${link}`
  }

  return (
    <div>
      <BlogImage onClick={() => redirect(doc.data().id)} src={image} padding={padding}/>
      <Header>
        <Heading left top right color={color} >
          <Type>{doc.data().category}</Type>
        </Heading>
        <Heading left bottom right>
          <Title color={color}>{doc.data().title}</Title>
          <Type>{doc.data().date.substring(0, doc.data().date.indexOf('T'))}</Type>
        </Heading>
      </Header>
    </div>
  )
}

export default BlogCard

import React, { useState, useContext } from 'react'
import {Colors, Typography} from "../../styles";
import 'firebase/firestore'

/**
 * Blog Post is for an individual post directly on the blog page
 * @param {doc} props doc is a reference to an individual blog post in Firebase
 */

const BlogPost = (props) => {
    const data = props.doc.data();
    const [contentDetailed, setContent] = useState(data.contentDetailed)
    
    //Cleaning Formatting
    if (contentDetailed.includes('color: rgb(0,0,0);') || contentDetailed.includes('font-family: Arial;')) {
      const removedColor = contentDetailed.replace("color: rgb(0,0,0);", "")
      const removedFont = removedColor.replace("font-family: Arial;", "")
      setContent(removedFont)
    }

    return (
      <div class="card">
        <h1 style={{'text-align': 'center'}}>{data.title}</h1>
        <Typography.BodyText style={{clear: 'right', 'text-align': 'center', color: Colors.WLF_BLACK}}>
          <b>Posted on: </b>{data.date.substring(0, data.date.indexOf("T"))}
        </Typography.BodyText>
        <Typography.BodyText style={{color: Colors.WLF_BLACK}}>
          <td dangerouslySetInnerHTML={{__html: contentDetailed}} />
        </Typography.BodyText>
      </div>
  )
}

export default BlogPost

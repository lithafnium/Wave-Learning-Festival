import React, { useState, useContext, useEffect } from 'react'
import { Icon, Property } from "./styles";
import { Colors, Typography } from "../../styles";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import { PopUp, PopUpInner, Text, Heading } from "./styles";

/**
 * 
 * @param {String} content HTML string to be deconstructed and displayed in popup. 
 * @param {String} title Title of pop-up
 * @param {function} onClose Function that gets called with onClick of X icon. 
 */

const PopUpHTML = ( props ) => {

  const [content, setContent] = useState('');

  //Cleaning up extra formatting
  if (!content) {
    const removedColor = props.content.replace(/color: rgb(0,0,0);/g, "")
      const removedFont = removedColor.replace(/font-family: Times New Roman;/g, "")
      console.log(removedFont);
    setContent(removedFont);
  }

    return (
      <PopUp>
        <PopUpInner>
          <Heading>
          <Icon onClick={props.onClose}>
            <IconContext.Provider
              value={{color: "grey",size: "2em",
                      style: { verticalAlign: "middle", margin: '10px' },
                    }}>
              <div>
                <MdClose />
              </div>
            </IconContext.Provider>
          </Icon>
          <Typography.Header2 style={{ color: Colors.WLF_BLACK, 
                                      fontSize: 25, textAlign: 'center', marginLeft: 30}}>
          {props.title}</Typography.Header2>
          </Heading>
          <Text>
            <Typography.BodyText style={{color: Colors.WLF_BLACK}}>
              <td dangerouslySetInnerHTML={{__html: content}} />
            </Typography.BodyText>
          </Text>
        </PopUpInner>
      </PopUp>
  )
}

export default PopUpHTML

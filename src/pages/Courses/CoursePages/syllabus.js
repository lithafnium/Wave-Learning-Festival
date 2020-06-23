import React, { useState, useContext, useEffect } from 'react'
import { Icon, Property } from "./styles";
import {Colors, Typography} from "../../../styles";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import { PopUp, PopUpInner, Text, Heading } from "./styles";

/**
 * 
 * @param {String} Syllabus
 * @param {function} onClose
 */

const Syllabus = ( props ) => {

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
          Syllabus</Typography.Header2>
          </Heading>
          <Text>
            <td dangerouslySetInnerHTML={{__html: props.syllabus}} />
          </Text>
        </PopUpInner>
      </PopUp>
  )
}

export default Syllabus

import React, { useState, useContext, useEffect } from 'react'
import { Icon, Property } from "./styles";
import { MdClose } from "react-icons/md";
import { IconContext } from "react-icons";
import { PopUp, PopUpInner } from "./styles";

/**
 * 
 * @param {String} Syllabus
 * @param {function} onClose
 */

const Syllabus = ( props ) => {

    return (
      <PopUp>
        <PopUpInner>
          <Icon onClick={props.onClose}>
            <IconContext.Provider
              value={{color: "grey",size: "3em",
                      style: { verticalAlign: "middle" },
                    }}>
              <div>
                <MdClose />
              </div>
            </IconContext.Provider>
          </Icon>
            <td dangerouslySetInnerHTML={{__html: props.syllabus}} />
        </PopUpInner>
      </PopUp>
  )
}

export default Syllabus

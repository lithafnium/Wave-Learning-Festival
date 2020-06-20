import React, { useState } from 'react'
import {
    FaCheck
  } from "react-icons/fa";
import { Box, CheckboxContainer, Item } from './styles'
const Checkbox = ({ text, color, addFilter, removeFilter, value }) => {
    const [filled, toggleFilled] = useState(false)

    const check = () => {
        if(!filled){
            addFilter(value, color)
        } else {
            removeFilter(value, color)
        }
        toggleFilled(!filled)

    }

    return (
        <CheckboxContainer>
            <Box filled={filled} onClick={() => check()} color={color}/>
            <Item>{text}</Item>
        </CheckboxContainer>
      
    )
}

export default Checkbox
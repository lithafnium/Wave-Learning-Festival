import React, { useState } from 'react'
import {
  FaCheck
} from 'react-icons/fa'
import { Box, CheckboxContainer, Item } from './styles'
const Checkbox = ({ text, color, addFilter, removeFilter, value, age }) => {
  const [filled, toggleFilled] = useState(false)

  const check = () => {
    if (!filled) {
      addFilter(value, color, age)
    } else {
      removeFilter(value, color, age)
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

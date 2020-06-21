import React from 'react'
import { Container, Item, IconContainer } from './styles'
import { TiDeleteOutline } from 'react-icons/ti'
import { IconContext } from "react-icons";

const Chip = ({ text, color, removeFilter }) => {
    return (
        <Container color={color}>
            {/* <IconContext.Provider
              value={{
                color: "white",
                size: "1.3em",
              }}
            >
                <IconContainer onClick={() => removeFilter(text, color)}>
                <TiDeleteOutline />
              </IconContainer>
            </IconContext.Provider> */}
            
            <Item>{text}</Item>
        </Container>
    )
}

export default Chip
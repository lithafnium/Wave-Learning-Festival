import React, { useState } from 'react'
import Checkbox from '../Checkbox'
import Chip from '../Chip'
import { Container, ContainerInner, FilteredBar, SearchBar, SearchIcon, SearchContainer, FilterContainer} from './styles'
import {Colors} from '@/styles'
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";


const Filter = ({ filteredItems, addFilter, removeFilter, searchItems }) => {
    return(
        <Container>
            <ContainerInner>
                <FilterContainer>
                    <p style ={{marginRight: '15px'}}>Filter:</p>
                    <FilteredBar isEmpty={filteredItems.length === 0}>
                        {filteredItems.map(item => {
                            return <Chip removeFilter = {removeFilter} text = {item.text} color = {item.color}/>
                        })}
                    </FilteredBar>
                </FilterContainer>
                <SearchContainer>
                    <SearchIcon>
                    <IconContext.Provider
                      value={{
                          color: Colors.WLF_PURPLE,
                          size: '1.2em',
                          style: { verticalAlign: 'middle' }
                      }}
                    >
                      <div><AiOutlineSearch /></div>
                    </IconContext.Provider>
                </SearchIcon>
                <SearchBar onChange={e => searchItems(e.target.value)}/>
                </SearchContainer>
            </ContainerInner>
            <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_PURPLE} text = "Science and Tech" value = "tech"/>
            <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_ORANGE} text = "Aesthetics and Culture" value = "aesthetics"/>
            <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_TURQOUISE} text = "History, Society, and Individuals" value = "history"/>
             <ContainerInner>
                
            </ContainerInner>
        </Container>
    )

}

export default Filter
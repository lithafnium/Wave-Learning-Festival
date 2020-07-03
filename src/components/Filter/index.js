import React, { useState } from 'react'
import Checkbox from '../Checkbox'
import Chip from '../Chip'
import { Container, ContainerInner, FilteredBar, SearchBar } from './styles'
import {Colors} from '@/styles'


const Filter = ({ filteredItems, addFilter, removeFilter, searchItems }) => {
    return(
        <Container>
            <ContainerInner>
                <p style = {{marginRight: '15px'}}>Search: </p>
                <SearchBar onChange={e => searchItems(e.target.value)}/>
            </ContainerInner>
            <ContainerInner>
                <p style ={{marginRight: '15px'}}>Filter:</p>
                <FilteredBar isEmpty={filteredItems.length === 0}>
                    {filteredItems.map(item => {
                        return <Chip removeFilter = {removeFilter} text = {item.text} color = {item.color}/>
                    })}
                </FilteredBar>
            </ContainerInner>
            <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_PURPLE} text = "Science and Tech" value = "tech"/>
            <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_ORANGE} text = "Aesthetics and Culture" value = "aesthetics"/>
            <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_TURQOUISE} text = "History, Society, and InContainerInneriduals" value = "history"/>
        </Container>
    )

}

export default Filter
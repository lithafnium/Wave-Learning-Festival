import React, { useState } from 'react'
import Checkbox from '../Checkbox'
import Chip from '../Chip'
import { Container, FilteredBar } from './styles'
import {Colors} from '@/styles'


const Filter = ({ filteredItems, addFilter, removeFilter }) => {
    return(
        <Container>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <p style ={{marginRight: '15px'}}>Filter:</p>
            <FilteredBar isEmpty={filteredItems.length === 0}>
                {filteredItems.map(item => {
                    return <Chip removeFilter = {removeFilter} text = {item.text} color = {item.color}/>
                })}
               

            </FilteredBar>
            </div>
            
            <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_PURPLE} text = "Science and Tech" value = "tech"/>
            <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_ORANGE} text = "Aesthetics and Culture" value = "culture"/>
            <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_TURQOUISE} text = "History, Society, and Individuals" value = "history"/>
        </Container>
    )

}

export default Filter
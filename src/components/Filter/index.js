import React, { useState } from 'react'
import Checkbox from '../Checkbox'
import Chip from '../Chip'
import { Container, ContainerInner, FilteredBar, SearchBar, SearchIcon, SearchContainer, FilterContainer, CheckboxContainer, CheckboxColumn } from './styles'
import { Colors } from '@/styles'
import { IconContext } from 'react-icons'
import { AiOutlineSearch } from 'react-icons/ai'

const Filter = ({ filteredItems, addFilter, removeFilter, searchItems }) => {
  return (
    <Container>
      <ContainerInner>
        <FilterContainer>
          <p style ={{ marginRight: '15px' }}>Filter:</p>
          <FilteredBar isEmpty={filteredItems.length === 0}>
            {filteredItems.map((item, index) => {
              return <Chip key={index} removeFilter = {removeFilter} text = {item.text} color = {item.color}/>
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
      <CheckboxContainer>
        <CheckboxColumn>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_PURPLE} text = "History" value = "history"/>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_ORANGE} text = "Tech" value = "tech"/>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_TURQOUISE} text = "Science" value = "science"/>
        </CheckboxColumn>
        <CheckboxColumn>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_YELLOW} text = "Writing" value = "writing"/>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_PURPLE} text = "Arts" value = "arts"/>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_ORANGE} text = "School Tips" value = "schoolTips"/>
        </CheckboxColumn>
        <CheckboxColumn>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_TURQOUISE} text = "Social Science" value = "socialScience"/>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_YELLOW} text = "Business" value = "business"/>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_PURPLE} text = "Politics" value = "politics"/>
        </CheckboxColumn>
        <CheckboxColumn>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_ORANGE} text = "Culture" value = "culture"/>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_TURQOUISE} text = "Aesthetics" value = "aesthetics"/>
          <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_YELLOW} text = "Math" value = "math"/>

        </CheckboxColumn>
      </CheckboxContainer>

      <ContainerInner>

      </ContainerInner>
    </Container>
  )
}

export default Filter

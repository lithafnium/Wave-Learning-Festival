import React, { useState } from 'react'
import Checkbox from '../Checkbox'
import Chip from '../Chip'
import { OptionsContainer, Container, ContainerInner, FilteredBar, SearchBar, SearchIcon, SearchContainer, FilterContainer, CheckboxContainer, CheckboxColumn } from './styles'
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
      <OptionsContainer>
        <div style = {{ marginRight: '30px' }}>
          <h2 style={{ color: Colors.WLF_PURPLE, textAlign: 'left' }}>Course Categories:</h2>
          <CheckboxContainer>
            <CheckboxColumn>
              <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_PURPLE} text = "History" value = "history"/>
              <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_ORANGE} text = "Tech" value = "tech"/>
              <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_TURQOUISE} text = "Science" value = "science"/>
            </CheckboxColumn>
            <CheckboxColumn>
              <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_YELLOW} text = "Literature" value = "literature"/>
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
              <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_YELLOW} text = "Math" value = "math"/>
              <Checkbox addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_YELLOW} text = "Lifestyle" value = "lifestyle"/>

            </CheckboxColumn>
          </CheckboxContainer>
        </div>
        <div>
          <h2 style={{ color: Colors.WLF_PURPLE, textAlign: 'left' }}>Grade Filters:</h2>
          <CheckboxContainer>
            <CheckboxColumn>
              <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_PURPLE} text = "Grade 6" value = "6"/>
              <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_ORANGE} text = "Grade 7" value = "7"/>
              <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_TURQOUISE} text = "Grade 8" value = "8"/>
            </CheckboxColumn>
            <CheckboxColumn>
              <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_YELLOW} text = "Grade 9" value = "9"/>
              <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_PURPLE} text = "Grade 10" value = "10"/>
            </CheckboxColumn>
            <CheckboxColumn>
              <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_ORANGE} text = "Grade 11" value = "11"/>
              <Checkbox age={true} addFilter = {addFilter} removeFilter = {removeFilter} color = {Colors.WLF_TURQOUISE} text = "Grade 12" value = "12"/>
            </CheckboxColumn>
          </CheckboxContainer>
        </div>
      </OptionsContainer>

      <ContainerInner>

      </ContainerInner>
    </Container>
  )
}

export default Filter

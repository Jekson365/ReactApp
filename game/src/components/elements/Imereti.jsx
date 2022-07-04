import React from 'react'
import { Navigation } from '../Navigation'
import { imereti } from '../wordbase/Imeretibase'
import { EachContainer } from './EachContainer'
import { SearchInput } from '../search/SearchInput'
import { useContext } from 'react'
import { dataContext } from '../../App'
import { SectionName } from '../search/SectionName'
import { useState } from 'react'

export const Imereti = () => {
  const { immereti, setImereti } = useContext(dataContext)
  const[check,handleCheck] = useState(false)


  // filter search - filter items 
  const filterItems = (event) => {
    const inp = event.target.value
    const newList = imereti.filter((item) => item.mainword.includes(inp))
    setImereti(newList)
  }
  const handlePremiumFilter = () => {
    if (check) {
      handleCheck(false)
      setImereti(imereti)
    }
    else {
      handleCheck(true)
      setImereti(imereti.filter((item)=>item.example))
    }
  }
  return (
    <div>
      <Navigation/>
      <SectionName sectionName={"იმერეთი"}/>
      <SearchInput onchangeEvent={filterItems} premiumFilter={handlePremiumFilter}/>
      <EachContainer datas={immereti} />
    </div>
  )
}

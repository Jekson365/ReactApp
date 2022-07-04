import React from 'react'
import { guria } from '../wordbase/Guriabase'
import { Navigation } from '../Navigation'
import { EachContainer } from './EachContainer'
import { SearchInput } from '../search/SearchInput'
import { dataContext } from '../../App'
import { useContext } from 'react'
import { useState } from 'react'
import { SectionName } from '../search/SectionName'

export const Guria = () => {
  // call method and list 
  const { dataGuria, setdataGuria } = useContext(dataContext)
  const[check,handleCheck] = useState(false)

  // filter search - filter items 
  const filterItems = (event) => {
    const inp = event.target.value
    const newList = guria.filter((item) => item.mainword.includes(inp))
    setdataGuria(newList)
  }
  const handlePremiumFilter = () => {
    if (check) {
      handleCheck(false)
      setdataGuria(guria)
    }
    else {
      handleCheck(true)
      setdataGuria(guria.filter((item)=>item.example))
    }
  }
  return (
    <>
    <Navigation />
    <SectionName sectionName={"გურია"}/>
    <SearchInput onchangeEvent={filterItems} premiumFilter={handlePremiumFilter}/>
    <EachContainer datas={dataGuria}/>
    </>
  )
}

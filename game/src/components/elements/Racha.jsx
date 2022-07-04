import React from 'react'
import { Navigation } from '../Navigation'
import { racha } from '../wordbase/RachaBase'
import { EachContainer } from './EachContainer'
import { SearchInput } from '../search/SearchInput'
import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { dataContext } from '../../App'



export const Racha = () => {
  // call method and list 
  const { data, setData } = useContext(dataContext)
  const[check,handleCheck] = useState(false)

  // filter search - filter items 
  const filterItems = (event) => {
    const inp = event.target.value
    const newList = racha.filter((item) => item.mainword.includes(inp))
    setData(newList)
  }
  const handlePremiumFilter = (data,method) => {
    if (check) {
      handleCheck(false)
      setData(racha)
    }
    else {
      handleCheck(true)
      setData(racha.filter((item)=>item.example))
    }
  }
  return (
    <div>
      <Navigation />
      <SearchInput onchangeEvent={filterItems} premiumFilter={handlePremiumFilter}/>
      <EachContainer datas={data} />
    </div>
  )
}

import React from 'react'
import { Navigation } from '../Navigation'
import { imereti } from '../wordbase/Imeretibase'
import { EachContainer } from './EachContainer'
import { SearchInput } from '../search/SearchInput'
import { useContext } from 'react'
import { dataContext } from '../../App'


export const Imereti = () => {
  const { immereti, setImereti } = useContext(dataContext)

  // filter search - filter items 
  const filterItems = (event) => {
    const inp = event.target.value
    const newList = imereti.filter((item) => item.mainword.includes(inp))
    setImereti(newList)
  }
  return (
    <div>
      <Navigation/>
      <SearchInput onchangeEvent={filterItems}/>
      <EachContainer datas={immereti} />
    </div>
  )
}

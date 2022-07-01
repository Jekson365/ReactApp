import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContent } from './Item'

export const Basket = () => {
    const cartItems = useContext(UserContent)
    
  return (
      <div className='side-container'>
          {cartItems.map((myArray) => {
              return (
              myArray.map((single) => {
                  return <p>{single.name}</p>
              })
              )
          })}
      </div>
  )
}

import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { dataContext } from '../../App'
import { racha } from '../wordbase/RachaBase'
import { FaStar } from 'react-icons/fa';


export const SearchInput = ({onchangeEvent,premiumFilter}) => {
  return (
    <>
    <form>
        <input type='text' onChange={onchangeEvent}/>
        <button type='button'>ძებნა</button>
    </form>
    <div className="show-only-star">
      <input type='checkbox' id='star' onClick={premiumFilter}/>
      <label for='star'>მხოლოდ განმარტებით</label>
      <FaStar className='c-yellow'/>
    </div>
    </>
  )
}

import React from 'react'
import { Navigation } from '../Navigation'
import { racha } from '../wordbase/RachaBase'

export const Racha = () => {
  return (
    <div>
      <Navigation />
      <div className="word-main-container">
        {racha.map((single) => {
          return (
            <div className='word-container'>
              <div className="content">
                <h5 id='main-w'>{single.mainword}</h5>
                <p className='desc'>{single.wordDescription}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

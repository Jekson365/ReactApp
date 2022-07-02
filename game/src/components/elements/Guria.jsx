import React from 'react'
import { guria } from '../wordbase/Guriabase'
import { Navigation } from '../Navigation'

export const Guria = () => {
  return (
    <>
    <Navigation />
      <div className="word-main-container">
        {guria.map((single) => {
          return (
            <div className='word-container'>
              <div className="content">
                <h5 id='main-w'>{single.mainword}</h5>
                <hr />
                <p className='desc'>{single.wordDescription}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

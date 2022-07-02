import React from 'react'

export const EachContainer = (props) => {
  return (
    <>
     <div className="word-main-container">
        {props.datas.map((single) => {
          return (
            <div className='word-container'>
              <div className="content">
                <h5 id='main-w' className='bl'>{single.mainword}</h5>
                <p className='desc bl'>{single.wordDescription}</p>
              </div>
              <div className="example"> 
                <p>" {single.example} "</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

import React from 'react'
import { FaStar } from 'react-icons/fa';


export const EachContainer = (props) => {
  return (
    <>
      <div className="word-main-container">
        {props.datas.map((single) => {
          return (
            <div className='word-container'>
              {single.example ? <div className="corner-notification bl"><FaStar /></div> : ""}
              <div className="content">
                <h5 id='main-w' className='bl'>{single.mainword}</h5>
                <p className='desc bl'>{single.wordDescription}</p>
              </div>
              <div className="circle-overlay"></div>
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

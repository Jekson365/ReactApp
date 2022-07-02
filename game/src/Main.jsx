import React from 'react'
import { Link } from 'react-router-dom'
import { states } from './components/routevar'

export const Main = () => {
    return (
        <>
            <div className="routes">

                {states.map((single) => {
                    return (
                        <div className="route-box">
                            <Link to={`/${single.route}`} className='c-white'>{single.name}</Link>
                            
                            <div className="content">
                                <span className='c-white'>მარაგშია: {states.length} სიტყვა</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

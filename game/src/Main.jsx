import React from 'react'
import { Link } from 'react-router-dom'
import { states } from './components/routevar'
import { Navigation } from './components/Navigation'
import { Bammer } from './components/massages/Bammer'


export const Main = () => {
   
    return (
        <>
    <Navigation/>
    <Bammer/>
            <div className="routes">
                {states.map((single) => {
                    return (
                        <div className="route-box">
                            <Link to={`/${single.route}`} className='c-white'>{single.name}</Link>
                            <div className="content">
                                <span className='c-yellow'>მარაგშია: {single.wordCount} სიტყვა</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

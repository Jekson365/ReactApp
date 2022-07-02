import React from 'react'
import { Link } from 'react-router-dom'
import { states } from './routevar'

export const Navigation = () => {
    return (
        <>
            <nav>
                <Link to='/'>მთავარი</Link>
                {states.map((single) => {
                    return (
                        <Link to={`/${single.route}`}>{single.name}</Link>
                    )
                })}
            </nav>
        </>
    )
}

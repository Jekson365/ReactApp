import React from 'react'
import { Link } from 'react-router-dom'
import { states } from './routevar'
import logo from './logo.png'

import { FaInstagram, FaFacebookSquare, FaTwitter, FaBars } from "react-icons/fa";
import { useState } from 'react';



export const Navigation = () => {
    const navOpen = {"clipPath":"polygon(0 0, 100% 0, 100% 100%, 0% 100%);"}
    const navClose = {"clipPath":"polygon(0 0, 100% 0, 100% 0, 0 0)"}
    const [closeOpen,handleCloseOpen] = useState(false)
    return (
        <>
            <nav>
                <div className="col">

                    <Link to='/' className='logo'>
                        <img src={logo} id='logo' />
                    </Link>
                    {states.map((single) => {
                        return (
                            <Link to={`/${single.route}`}>{single.name}</Link>
                        )
                    })}
                </div>
                <div className="col col-2">
                    <FaFacebookSquare className='nav-icons' />
                    <FaTwitter className='nav-icons' />
                    <FaInstagram className='nav-icons' />
                </div>
            </nav>

            {/* responsive navigation */}

            <div className="resp-nav">
                <div className="categories">

                    {states.map((single) => {
                        return (
                            <Link to={`/${single.route}`}>{single.name}</Link>
                        )
                    })}
                </div>
                <Link to='/' className='logo'>
                    <img src={logo} id='logo' />
                </Link>
                <div id="nav-toggler_2">
                    <FaBars id='nav-toggler' className='shownav' onClick={()=>handleCloseOpen(!closeOpen)}/>
                </div>
            </div>
        </>
    )
}

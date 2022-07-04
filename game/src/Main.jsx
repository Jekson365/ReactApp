import React from 'react'
import { Link } from 'react-router-dom'
import { sentence, states } from './components/routevar'
import { Navigation } from './components/Navigation'
import { Bammer } from './components/massages/Bammer'
import { SectionName } from './components/search/SectionName'
import { imeretiSenBase } from './components/elements/sentence/sentencebase/ImeretiSenBase'
import { ImeretiSen } from './components/elements/sentence/ImeretiSen'

export const Main = () => {
   
    return (
        <>
    <Navigation/>
    <Bammer/>
            <SectionName sectionName={'სიტყვები'}/>

            <div className="routes">
                {states.map((single) => {
                    return (
                        <div className="route-box">
                            <div className="circle-overlay"></div>
                            <Link to={`/${single.route}`} className='c-white'>{single.name}</Link>
                            <div className="content">
                                <span className='c-yellow'>მარაგშია: {single.wordCount} სიტყვა</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <SectionName sectionName={'ფრაზები'}/>

            <div className="routes">
                {sentence.map((single)=>{
                    return (
                        <>
                            <div className="route-box">
                                <div className="circle-overlay"></div>
                                <Link to={`/${single.route}`}  className='c-white'>{single.name}</Link>
                                <div className="content">
                                    <div className="c-yellow">მარაგშია: {single.wordCount} ფრაზა</div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

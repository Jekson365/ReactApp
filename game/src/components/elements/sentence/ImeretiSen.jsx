import React from 'react'
import { useState } from 'react'
import { SearchInput } from '../../search/SearchInput'
import { imeretiSenBase } from './sentencebase/ImeretiSenBase'
import { Navigation } from '../../Navigation'
import { SectionName } from '../../search/SectionName'
import { SectionDescription } from '../../search/SectionDescription'

export const ImeretiSen = () => {
    const desc = "ამ გვერდზე მოცემულია სხვადასხვა იმერული გამონათქვამები,ფრაზელოგიზმები და სხვანი"
    const [sen,setSen] = useState(imeretiSenBase)

    const handleFilter = (e) => {
        const newList = imeretiSenBase.filter((single)=>single.sentence.includes(e.target.value))
        setSen(newList)
    }
    return (

        <>
        <Navigation/>
        <SectionName sectionName={'იმერული ესკიზები'}/>
        <SectionDescription description={desc}/>
            <form>
                <input type='text' onChange={handleFilter} />
                <button type='button'>ძებნა</button>
            </form>
            <div className="sent-box">
                {sen.map((single) => {
                    return (
                        <>
                            <div className="single-container">
                                <div className="circle-ovarlay"></div>
                                <h5 className='c-yellow'>{single.sentence}</h5>
                                <p className='c-white'>{single.description}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

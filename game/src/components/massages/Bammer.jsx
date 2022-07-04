import React from 'react'
import Wave from 'react-wavify'

export const Bammer = () => {
    return (
        <div>
            <div className="cover">
                <h1 id='c-prp'>ქართულ-ქართული ლექსიკონი</h1>
                <Wave
                    id='wave'
                    fill='#5534A5'
                    paused={false}
                    options={{
                      height: 6,
                      amplitude:30,
                      speed: 0.5,
                      points: 5,
                      opacity:0.5
                    }}
                ></Wave>
                 <Wave
                    id='wave'
                    fill='#5534A5'
                    paused={false}
                    options={{
                      height: 6,
                      amplitude:10,
                      speed: 0.7,
                      points: 5,
                      opacity:0.2
                    }}
                ></Wave>
            </div>
        </div>
    )
}

import React from 'react'
import InteractiveBackground from './interactivebg'
import Home from './Home'
export const Bg = () => {
    return (
        <div>
            <div className='relative'>
                <InteractiveBackground />
            </div>
            <div className='z-10 absolute top-0 h-full w-full'>
                <Home />
            </div>
        </div>
    )
}

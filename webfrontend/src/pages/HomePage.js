import React from 'react'
import { Parallax } from 'react-parallax';
import luxury from '../car-images/luxury.jpg';
import used from '../car-images/used.jpg';
import newcars from '../car-images/new.jpg';

const HomePage = () => {
    
    return (
        <div className="Home">
            
                <div className='content'>
                <div className='text-content'>
                    Caravelle - Elevate your Drive
                </div>
                </div>
            

            <Parallax strength={600} bgImage={luxury}>
                <div className='content'>
                <div className='text-content'>
                    Luxury Cars
                </div>
                </div>
            </Parallax>

            <Parallax strength={600} bgImage={newcars}>
                <div className='content'>
                <div className='text-content'>
                    New Cars
                </div>
                </div>
            </Parallax>

            <Parallax strength={600} bgImage={used}>
                <div className='content'>
                <div className='text-content'>
                    Used Cars
                </div>
                </div>
            </Parallax>

                <div className='content'>
                    <div className='text-content'>
                        
                    </div>
                </div>
            
        </div>

        
    )
}

export default HomePage
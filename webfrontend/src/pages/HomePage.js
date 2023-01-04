import React from 'react'
import { Parallax } from 'react-parallax';
import luxury from '../car-images/new-luxury2.jpg';
import used from '../car-images/new-new-used2.jpg';
import newcars from '../car-images/new-new.jpg';

const HomePage = () => {
    
    return (
        <div className="Home">
            
                <div className='content'>
                <div className='logo-content'>
                    Caravelle - Elevate your Drive
                </div>
                </div>
            

            <Parallax strength={600} bgImage={luxury}>
                <div className='content'>
                <div className='text-content'>
                    <h1>Luxury</h1>
                    <p>Travel in style</p>
                </div>
                <button type='button' className='btn'>Buy Now</button>
                </div>
            </Parallax>

            <div className='homedivider'></div>

            <Parallax strength={600} bgImage={newcars}>
                <div className='content'>
                <div className='text-content'>
                    <h1>New</h1>
                    <p>Keeping it modern</p>
                </div>

                <button type='button' className='btn'>Buy Now</button>

                </div>
            </Parallax>

            <div className='homedivider'></div>

            <Parallax strength={600} bgImage={used}>
                <div className='content'>
                <div className='text-content'>
                    <h1>Used</h1>
                    
                    <p>Exploration on a budget</p>
                </div>

                <button type='button' className='btn'>Buy Now</button>
                
                </div>
            </Parallax>

                <div className='about'>
                <table>
                    <tr>
                        <th>Caravelle</th>
                        <th>Contact Us</th>
                        <th>Sources</th>
                    </tr>
                </table>
                </div>
            
        </div>

        
    )
}

export default HomePage
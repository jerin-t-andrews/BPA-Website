import React from 'react'
import { Parallax } from 'react-parallax';
import luxury from '../car-images/Lexus.jpg';
import used from '../car-images/new-new-used2.jpg';
import newcars from '../car-images/Audi.webp';
// import transcar from '../car-images/Audi-4K-PNG.png'
// import { Parallax as P, ParallaxLayer} from '@react-spring/parallax'
import { Link } from 'react-router-dom'
import ChatBot from '../components/ChatBot'
import logo_ from '../components/caravellecut.png'


const HomePage = () => {
    return (
        <div className="Home">
            <ChatBot/>

            <div className='content'>
                <div className='logo-content'>
                    <h1>Caravelle</h1>
                    <img className='homeLogo' src={logo_} alt='logopng'/>
                    <p>Elevate your Drive</p>  
                </div>
            </div>
            
            <div className='homedivider'></div>

            <Parallax strength={200} bgImage={luxury}>
                <div className='content'>
                <div className='text-content'>
                    <h1>Luxury</h1>
                    <p>Travel in style</p>
                </div>
                <button type='button' className='btn'>Shop Now</button>
                </div>
            </Parallax>

            <div className='homedivider'></div>

            <Parallax strength={400} bgImage={newcars}>
                <div className='content'>
                <div className='text-content'>
                    <div className="new-text">
                        <h1>New</h1>
                        <p>Keeping it modern</p>
                    </div>
                </div>

                <button type='button' className='btn'>Shop Now</button>

                </div>
            </Parallax>

            <div className='homedivider'></div>

            <Parallax strength={400} bgImage={used}>
                <div className='content'>
                <div className='text-content'>
                    <h1>Used</h1>
                    
                    <p>Exploration on a budget</p>
                </div>

                <button type='button' className='btn'>Shop Now</button>

                <table className='aboutTable'>
                    <tr>
                        <th>Caravelle</th>
                        <Link to="/Contact" className='ConLink'>
                            <th>Contact</th>
                        </Link>
                        <th>Sources</th>
                    </tr>
                </table>
                
                </div>
            </Parallax>
                {/*
                <div className='about'>
                <table>
                    <tr>
                        <th>Caravelle</th>
                        <th>Contact</th>
                        <th>Sources</th>
                    </tr>
                </table>
                </div>
    */}
        </div>

        
    )
}

export default HomePage
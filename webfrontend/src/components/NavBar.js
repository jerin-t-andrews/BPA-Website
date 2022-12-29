import React from 'react'
import { Link } from 'react-router-dom'
import logo from './favicon.ico'

const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/">
                <button className='logoButton'>
                    <img src={logo} alt='logopng'></img>
                </button>
            </Link>

            <Link to="/CarList">
                <button className='navButton'>
                    Shop
                </button>
            </Link>
        </nav>
    )
}

export default NavBar
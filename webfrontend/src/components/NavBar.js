import React from 'react'
import { Link } from 'react-router-dom'
import logo from './favicon.ico'

const NavBar = () => {
    return (
        <nav className="nav">
            <ul>
                <Link to="/">
                    <img className='logo navFirst' src={logo} alt='logopng'></img>
                </Link>

                <Link to="/CarList">
                    <button className='navButton'>
                        Shop
                    </button>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar
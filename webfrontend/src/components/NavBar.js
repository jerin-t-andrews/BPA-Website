import React from 'react'
import { Link } from 'react-router-dom'
import logo from './favicon.ico'

const NavBar = () => {
    return (
        <nav className="nav">
            <table>
                <tr>
                    <th>
                        <Link to="/">
                            <img className='navLogo' src={logo} alt='logopng'></img>
                        </Link>
                    </th>
                    <th>
                        <Link to="/CarList">
                            <button className='navButton'>
                                Shop
                            </button>
                        </Link>
                    </th>
                </tr>
            </table>
        </nav>
    )
}

export default NavBar
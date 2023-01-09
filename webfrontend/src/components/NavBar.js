import React from 'react'
import { Link } from 'react-router-dom'
// import logo from './favicon.ico'
import logo_ from './caravellecut.png'

const NavBar = () => {
    return (
        <nav className="navbar">
            <table>
                <tr>
                    <th>
                        <Link to="/BPA-Website">
                            <img className='navLogo' src={logo_} alt='logopng'></img>
                        </Link>
                    </th>
                    <th className='splitter'/>
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
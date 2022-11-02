import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {


  return (
    <nav className='nav'>
        <a href='/' className=''>Youtify</a>
        <ul>
            <li>
                <Link to={}='/about'>About the App</Link>
            </li>
            <li>
                <Link to={}='/news'>News</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar;
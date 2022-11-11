import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
    //const path = window.location.pathname

  return (
    <nav className='nav'>
        <Link to='/' className=''>Youtify</Link>
        <ul>
            <CustomLink to='/about'>About the App</CustomLink>
            <CustomLink to='/news'>News</CustomLink>
        </ul>
    </nav>
  )
}
export default Navbar;

const CustomLink = ({to, children, ...props}) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? 'active': ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
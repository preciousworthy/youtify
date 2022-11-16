import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
    //const path = window.location.pathname

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>Youtify</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
                <CustomLink className='nav-item' to='/about'>About the App</CustomLink>
                <CustomLink className='nav-item' to='/news'> News</CustomLink>
            </ul>
        </div>
    </div>
    </nav>
  )
}
export default Navbar;

const CustomLink = ({to, children, ...props}) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? 'active': ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
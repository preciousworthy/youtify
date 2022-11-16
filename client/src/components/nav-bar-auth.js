import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AuthNav from './auth-nav';

const NavBar = () => {
  const { user } = useAuth0();
  console.log(user);

  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo">
          
          {!user ? <span>Welcome, please log in!</span> : <span>Hello <Link to="/profile">{user.name}</Link></span> }
          </div>
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
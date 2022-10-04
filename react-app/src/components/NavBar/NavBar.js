
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';


const NavBar = () => {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar-inner'>
        <div className='logo-container'>
          <Link to='/' exact={true} activeClassName='active'>
          {" "}
            YouTut{" "}
          </Link>
        </div>
        <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

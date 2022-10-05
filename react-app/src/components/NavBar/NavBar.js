
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { loadUserRequest } from '../../store/session';
import LogoutButton from '../auth/LogoutButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import "./NavBar.css"

import playImage from "./youtut-icon.png"


const NavBar = () => {

  const dispatch = useDispatch();

  const userLoggedIn = useSelector((state) => state.session.user)

  useEffect(() => {
    dispatch(loadUserRequest(userLoggedIn.id))
  }, [dispatch])

  return (
    <div className='navbar-wrapper'>
      <div className='navbar-inner'>

        <div className='logo-container'>
          <div className='icon-pic'>

        </div>
          <Link to='/' exact={true} className="text-logo">
           <img alt="logo" className="play-pic" src={playImage}/>
           {" "}
            YouTut{" "}
          </Link>
        </div>
        <div className="user-icon-wrapper">
        <NavLink
            to={`/users/${userLoggedIn.id}`}
            exact={true}
            // activeClassName="active"
            // className="icon"
          >
            <img className="profile-pic-nav" alt="profile-thumbnail" src={userLoggedIn.profile_img} />
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

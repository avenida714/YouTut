
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { loadUserRequest } from '../../store/session';
import LogoutButton from '../auth/LogoutButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import "./NavBar.css"

import playImage from "./youtut-icon.png"


const NavBar = () => {

  const dispatch = useDispatch();
  // const [searchText, setSearchText] = useState('');


  //Search Props
  const [searchText, setSearchText] = useState('')

  const searchMeFunc = (e) => {
    e.preventDefault();
    setSearchText(e.target.value)
  }



  const userLoggedIn = useSelector((state) => state.session.user)

  useEffect(() => {
    dispatch(loadUserRequest(userLoggedIn.id))

  }, [dispatch])

  useEffect(() => {
     console.log("text:", searchText)
  }, [searchText])

  // console.log("text:", searchText)

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

        <div className='search-div' >
          <div>
        <input
          placeholder="Search"
          type="text"
          onChange={searchMeFunc}
          value={searchText}
        />
        <button type="submit" className='search-button' onClick={(e) => searchMeFunc()}
><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        </div>

        <div className="user-icon-wrapper">
        <NavLink
            to={`/users/${userLoggedIn.id}`}
            exact={true}
            // activeClassName="active"
            // className="icon"
          >
            <div className='upload-and-profile-pic'>
              <i className='fa-solid fa-upload'></i>
            <img className="profile-pic-nav" alt="profile-thumbnail" src={userLoggedIn.profile_img} />
            </div>

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

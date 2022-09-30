//TutCard
import React from 'react'
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import "./TutCard.css";



function TutCard(tut) {

  const dispatch = useDispatch();
  const history = useHistory();

  const userLoggedIn = useSelector((state) => state.session.user)

  let id = tut.id


  //helper func to take to other user profile when you click
  const usersProfilePage = () => {
    let path = `/profile/${tut.user_id}`
    history.push(path)
  }

  return (
    <div className="wrapper-div-TutCard">
      {/* <div className="user-profile-icon" onClick={usersProfilePage}>
        <img alt="profile-icon" className="img circle" src={tut.user.profile_img}></img>
      </div> */}
      <ReactPlayer url={tut.tut_video} controls/>
    </div>
  )
}

export default TutCard

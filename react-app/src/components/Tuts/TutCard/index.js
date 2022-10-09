//TutCard
import React from 'react'
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DeleteTut from '../DeleteTut';
import EditTut from '../EditTut';

import "./TutCard.css";



function TutCard({tut}) {

  const dispatch = useDispatch();
  const history = useHistory();

  const userLoggedIn = useSelector((state) => state.session.user)

  const onClickWatchTut = () => {
    let path = `/tuts/${tut.id}`
    history.push(path)
  }


  const usersProfilePage = () => {
    let path = `/users/${tut.user_id}`;
    history.push(path);
  };




  // console.log("*****I am the Tut data being passed into the TUT card ********", tut.tut_video)



  return (
    tut ?
    <div className="wrapper-div-TutCard" >


        <img className="thumbnail"src={tut.thumbnail_pic} alt="tut-thumbnail" onClick={onClickWatchTut}/>

      <div className='profile-title-user-outer'>
        <div className='profile-pic-div' onClick={usersProfilePage}>
          <img className="profile-pic" src={tut.user.profile_img} alt="profile-thumbnail" />
        </div>
        <div className='titleAndUsername'>
        <div className='tut-title' onClick={usersProfilePage}>{tut.tut_title}</div>
        <div className='tut-username'>{tut.user.username}</div>
        </div>
      </div>
    </div>
    :
    null
  )
}

export default TutCard

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

  //helper func to take to other user profile when you click; need to get the users based on the id of the video
  // const usersProfilePage = () => {
  //   let path = `/profile/${tut.user_id}`
  //   history.push(path)
  // }

  return (
    tut ?
    <div className="wrapper-div-TutCard" >
      {/* <div className="user-profile-icon" onClick={usersProfilePage}>
        <img alt="profile-icon" className="img circle" src={tut.user.profile_img}></img>
      </div> */}
      {/* <ReactPlayer url={tut.tut_video} controls/> */}
      {/* <div>{tut.tut_description}</div> */}

        <img className="thumbnail"src={tut.thumbnail_pic} alt="tut-thumbnail" onClick={onClickWatchTut}/>

      <div className='profile-title-user-outer'>
        <div className='profile-pic-div' onClick={usersProfilePage}>
          <img className="profile-pic" src={tut.user.profile_img} alt="profile-thumbnail" />
        </div>
        <div className='titleAndUsername'>
        <div className='tut-title'>{tut.tut_title}</div>
        <div className='tut-username'>{tut.user.username}</div>
        </div>
      </div>
      {/* <DeleteTut tutId={tut.id} />
      <EditTut tut={tut} tutId={tut.id} oldTitle={tut.title} oldDescription={tut.description}/> */}
    </div>
    :
    null
  )
}

export default TutCard

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


  // console.log("*****I am the Tut data being passed into the TUT card ********", tut.tut_video)

  //helper func to take to other user profile when you click; need to get the users based on the id of the video
  // const usersProfilePage = () => {
  //   let path = `/profile/${tut.user_id}`
  //   history.push(path)
  // }

  return (
    tut ?
    <div className="wrapper-div-TutCard">
      {/* <div className="user-profile-icon" onClick={usersProfilePage}>
        <img alt="profile-icon" className="img circle" src={tut.user.profile_img}></img>
      </div> */}
      <h3 className='tut-title'>{tut.tut_title}</h3>
      <ReactPlayer url={tut.tut_video} controls/>
      <div>{tut.tut_description}</div>
      <div>
        <img src={tut.thumbnail_pic} alt="tut-thumbnail"/>
      </div>
      <DeleteTut tutId={tut.id} />
      <EditTut tutId={tut.id} oldTitle={tut.title} oldDescription={tut.description}/>
    </div>
    :
    null
  )
}

export default TutCard

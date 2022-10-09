//MainFeed

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { loadUserRequest } from '../../store/session';
import { getAllTutsOfOneUser, getAllTutsOnYouTut, getCurrentUserTuts } from '../../store/tuts';
import DeleteTut from '../Tuts/DeleteTut';
import EditTut from '../Tuts/EditTut';
import TutCard from '../Tuts/TutCard';
import UploadTut from '../Tuts/UploadTut';

import "./UserAndFeed.css"



// import UploadTut from '../Uploadtut';

function UserFeed({userId}) {



  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false);

  const [notPressed, setNotPressed] = useState(true)

  const [thisIsMyTut, setThisIsMyTut] = useState(false)

  const userLoggedInId = useSelector((state) => {
    return state.session.user.id;
  })

  const tutsObj = useSelector((state) => state.tuts);
  const tuts = Object.values(tutsObj)
  tuts.reverse() //will put in reverse chron order, newest first

  const history = useHistory()







  // let thisIsMyTut;
  // if (userLoggedIn === tut.userId) {
  //   thisIsMyTut = (<div><DeleteTut tutId={tut.id} /> <EditTut tut={tut} tutId={tut.id} oldTitle={tut.title} oldDescription={tut.description}/> </div> )
  // } else {
  //   thisIsMyTut = null;
  // }


  useEffect(() => {
    dispatch(getAllTutsOfOneUser(userId))
    .then(() =>  dispatch(loadUserRequest(userLoggedInId)))
    .then(() => setIsLoaded(true))
    .then(() => {
      if (userLoggedInId === userId) setThisIsMyTut(true)
      // console.log(userLoggedInId)
      // console.log(userId)
      // console.log(thisIsMyTut)
      if (history.action === 'POP') {
        setNotPressed(false)
      }
      return
    })

  }, [dispatch, userLoggedInId, userId, thisIsMyTut])

  // useEffect(() => {
  //   if (userLoggedIn === userId) {
  //     setThisIsMyTut(true)
  //   }
  // }, [userId, userLoggedIn])





  const displayTuts = tuts.map((tut, i) => (
    <div className='display-Tuts-userFeed'>
      <div className='card-and-description'>
    <TutCard key={i} tut={tut} />
    <div className='tut-description'>{tut.tut_description}</div>
      </div>
    <div className="edit-delete-div">
    {thisIsMyTut && notPressed && (<div className='edit-and-delete-buttons'><EditTut tut={tut} tutId={tut.id} oldTitle={tut.title} oldDescription={tut.description}/>
    <DeleteTut tutId={tut.id}/> </div>
     )}
    </div>
    </div>


  ))


  return (
    isLoaded && userLoggedInId && displayTuts &&(
    <div className="outer-most-wrapper">
      <div className='main-feed-display'>
        <div className='display-Tuts-user'>
        {displayTuts}
        </div>
      </div>
    </div>
    )
  );
}

export default UserFeed

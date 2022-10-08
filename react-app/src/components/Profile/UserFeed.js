//MainFeed

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

  const [thisIsMyTut, setThisIsMyTut] = useState(false)

  const userLoggedInId = useSelector((state) => {
    return state.session.user.id;
  })

  const tutsObj = useSelector((state) => state.tuts);
  const tuts = Object.values(tutsObj)
  tuts.reverse() //will put in reverse chron order, newest first







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
      console.log(userLoggedInId)
      console.log(userId)
      console.log(thisIsMyTut)
      return
    })

  }, [dispatch, userLoggedInId, userId, thisIsMyTut])

  // useEffect(() => {
  //   if (userLoggedIn === userId) {
  //     setThisIsMyTut(true)
  //   }
  // }, [userId, userLoggedIn])





  const displayTuts = tuts.map((tut, i) => (
    <div className='displayTuts'>
    <TutCard key={i} tut={tut} />
    {thisIsMyTut ? (<div><DeleteTut tutId={tut.id} /> <EditTut tut={tut} tutId={tut.id} oldTitle={tut.title} oldDescription={tut.description}/> </div> ) : null}
    </div>

  ))


  return (
    isLoaded && userLoggedInId && displayTuts &&(
    <div className="outer-most-wrapper">
      <div className='main-feed-display'>
        <div className='display-Tuts'>
        {displayTuts}
        </div>
      </div>
    </div>
    )
  );
}

export default UserFeed

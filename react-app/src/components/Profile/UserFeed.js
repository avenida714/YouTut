//MainFeed

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserRequest } from '../../store/session';
import { getAllTutsOfOneUser, getAllTutsOnYouTut, getCurrentUserTuts } from '../../store/tuts';
import DeleteTut from '../Tuts/DeleteTut';
import TutCard from '../Tuts/TutCard';
import UploadTut from '../Tuts/UploadTut';

// import "./MainFeed.css";

// import UploadTut from '../Uploadtut';

function UserFeed({userId}) {

  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false);

  const [thisIsMyTut, setThisIsMyTut] = useState(false)

  const tutsObj = useSelector((state) => state.tuts);
  const tuts = Object.values(tutsObj)
  tuts.reverse() //will put in reverse chron order, newest first

  const userLoggedIn = useSelector((state) => {
    return state.session.user;
  })


  const displayTuts = tuts.map((tut, i) => (
    <div>
    <TutCard key={i} tut={tut} />
    </div>

  ))




  useEffect(() => {
    dispatch(getAllTutsOfOneUser(userId))
    .then(() =>  dispatch(loadUserRequest(userLoggedIn.id)))
    .then(() => setIsLoaded(true))
    // .then(() => {
    //   if (userLoggedIn === userId) {
    //     setThisIsMyTut(true)
    //   }
    // })
  }, [dispatch, userLoggedIn, userId])

  useEffect(() => {
    if (userLoggedIn === userId) {
      setThisIsMyTut(true)
    }
  }, [thisIsMyTut, userId, userLoggedIn])

  return (
    isLoaded && userLoggedIn && displayTuts &&(
    <div className="outer-most-wrapper">
      <div className='main-feed-display'>
        {thisIsMyTut ? <UploadTut /> : null}
        <div className='display-Tuts'>
        {displayTuts}
        </div>
      </div>
    </div>
    )
  );
}

export default UserFeed

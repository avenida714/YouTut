//MainFeed

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { loadUserRequest } from '../../store/session';
import { getAllTutsOnYouTut } from '../../store/tuts';
import DeleteTut from '../Tuts/DeleteTut';
import TutCard from '../Tuts/TutCard';
// import UploadTut from '../Tuts/UploadTut';

import "./MainFeed.css";

// import UploadTut from '../Uploadtut';

function MainFeed() {

  const history = useHistory()

  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false);

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
    dispatch(getAllTutsOnYouTut())
    .then(() =>  dispatch(loadUserRequest(userLoggedIn.id)))
    .then(() => setIsLoaded(true)
    )
  }, [dispatch, userLoggedIn.id])

  return (
    isLoaded && (
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

export default MainFeed

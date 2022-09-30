//MainFeed

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUserRequest } from '../../store/session';
import { getAllTutsOnYouTut } from '../../store/tuts';
import TutCard from '../Tuts/TutCard';

function MainFeed() {

  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false);

  const tutsObj = useSelector((state) => state.tuts); //capitalize?

  const tuts = Object.values(tutsObj)

  // tuts.reverse()  will put in reverse chron order, newest first

  const userLoggedIn = useSelector((state) => {
    return state.session.user;
  })


  const displayTuts = tuts.map((tut, i) => (
    <TutCard key={i} tut={tut} />
  ))


  useEffect(() => {
    dispatch(getAllTutsOnYouTut()).then(() => {
      dispatch(loadUserRequest(userLoggedIn.id))
      setIsLoaded(true);
    })
  }, [dispatch])

  return (
    isLoaded && (
    <div className="outer-most-wrapper">
      <div className='main-feed-display'>
        {displayTuts}
        test
      </div>
    </div>
    )
  );
}

export default MainFeed

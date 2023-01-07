import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadUserRequest } from '../../store/session';
import { getAllTutsOnYouTut } from '../../store/tuts';
import TutCard from '../Tuts/TutCard';

function SearchFeed() {

  const dispatch = useDispatch()

  const [isLoaded, setIsLoaded] = useState(false);


  const tutsObj = useSelector((state) => state.tuts);
  const tuts = Object.values(tutsObj)

  const {searchText} = useParams();

  const userLoggedIn = useSelector((state) => {
    return state.session.user;
  })


  const searchResults = tuts.filter(tut => tut.tut_title.toLowerCase().includes(searchText.toLowerCase()) || tut.user.username.toLowerCase().includes(searchText.toLowerCase()) || tut.tut_description.toLowerCase().includes(searchText.toLowerCase()))


  const displayTuts = searchResults.map((tut, i) => (
    <div className='display-Tuts-userFeed'>
      <div className='card-and-description'>
    <TutCard key={i} tut={tut} />
    <div className='tut-description'>{tut.tut_description}</div>
      </div>
      </div>
      ))

  useEffect(() => {
    dispatch(getAllTutsOnYouTut())
    .then(() =>  dispatch(loadUserRequest(userLoggedIn.id)))
    .then(() => setIsLoaded(true)
    )
  }, [dispatch, userLoggedIn.id])

  const noResults = (<div className='no-results'> No Results Found D: </div>)


  return (
    isLoaded && (
    <div className="outer-most-wrapper">
    <div className='main-feed-display'>
      <div className='display-Tuts'>
      {displayTuts.length ? displayTuts : noResults}
      </div>
    </div>
  </div>
  )
  );
}

export default SearchFeed

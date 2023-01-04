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

function MainFeed({searchText}) {

  const history = useHistory()

  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false);

  const tutsObj = useSelector((state) => state.tuts);
  const tuts = Object.values(tutsObj)
  // tuts.reverse() //will put in reverse chron order, newest first


  // //Fisher-Yates (Knuth) Shuffle
  // function shuffle(array) {
  //   let currentIndex = array.length,  randomIndex;

  //   // While there remain elements to shuffle.
  //   while (currentIndex != 0) {

  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;

  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex], array[currentIndex]];
  //   }

  //   return array;
  // }

  //Durstenfeld Shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
  //SHUFFLE IT UP
  if(!searchText) shuffle(tuts)
  else tuts.filter(tut => tut.tut_title.toLowerCase().includes(searchText.toLowerCase()) || tut.user.username.toLowerCase().includes(searchText.toLowerCase()) || tut.tut_description.toLowerCase().includes(searchText.toLowerCase()))



  const userLoggedIn = useSelector((state) => {
    return state.session.user;
  })


// Search bar logic
//      const searchTutsResults = tuts.filter(tut => tut.tut_title.toLowerCase().includes(searchText.toLowerCase()) || tut.user.username.toLowerCase().includes(searchText.toLowerCase()) || tut.tut_description.toLowerCase().includes(searchText.toLowerCase()))

/*

  const [searchText, setSearchText] = useState('');

 <div className="search-field">
        {!searchText &&
          <Search className="search-icon" />
        }
        <input
          placeholder="Search"
          onChange={(e) => handleChange(e.target.value)}
          value={searchWords}
        />


        useEffect()
          setSearchText(searchWords)
*/


  //Map out all the Tuts, now shuffled
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

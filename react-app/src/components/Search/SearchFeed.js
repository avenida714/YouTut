import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function SearchFeed() {

  const tutsObj = useSelector((state) => state.tuts);
  const tuts = Object.values(tutsObj)

  const {searchText} = useParams();


  // tuts.filter(tut => tut.tut_title.toLowerCase().includes(searchText.toLowerCase()) || tut.user.username.toLowerCase().includes(searchText.toLowerCase()) || tut.tut_description.toLowerCase().includes(searchText.toLowerCase()))


  return (
    <div>SearchFeed</div>
  )
}

export default SearchFeed

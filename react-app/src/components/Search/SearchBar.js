import React, { useState } from 'react'

function SearchBar() {


  //Search Props
  const [searchText, setSearchText] = useState('')

  const searchMeFunc = (e) => {
    e.preventDefault();
    setSearchText(e.target.value)
  }

  return (
    <div className='search-div' >
    <div>
  <input
    placeholder="Search"
    type="text"
    onChange={searchMeFunc}
    value={searchText}
  />
  <button type="submit" className='search-button' onClick={(e) => searchMeFunc()}
><i class="fa-solid fa-magnifying-glass"></i></button>
  </div>
  </div>
  )
}

export default SearchBar

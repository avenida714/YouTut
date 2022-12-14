import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import "./SearchBar.css"


function SearchBar() {

  const history = useHistory()
  //Search Props
  const [searchText, setSearchText] = useState('')

  const searchMeFunc = (e) => {
    e.preventDefault();
    setSearchText(e.target.value)
    console.log("Search Me Func", searchText)

  }



  const submitMe = (e) => {
    setSearchText(e.target.value)
    history.push(`/search/${searchText}`)
    console.log("SUBMIT ME FUNC", searchText)
  }

//   useEffect(() => {
//     console.log("text:", searchText)
//  }, [searchText])

//  // console.log("text:", searchText)

  return (
    <div className='search-div' >
    <form>
  <input
    className='search-input'
    placeholder="Search"
    type="text"
    onChange={searchMeFunc}
    value={searchText}
  />
  <button type="submit" className='search-button' onClick={submitMe}
><i class="fa-solid fa-magnifying-glass"></i></button>
  </form>
  </div>
  )
}

export default SearchBar

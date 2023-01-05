import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

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

    placeholder="Search"
    type="text"
    onChange={searchMeFunc}
    value={searchText}
  />
  <button type="submit" className='search-button' onSubmit={submitMe}
><i class="fa-solid fa-magnifying-glass"></i></button>
  </form>
  </div>
  )
}

export default SearchBar

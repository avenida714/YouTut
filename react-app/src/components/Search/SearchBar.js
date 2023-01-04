import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function SearchBar() {

  const history = useHistory()
  //Search Props
  const [searchText, setSearchText] = useState('')

  const searchMeFunc = (e) => {
    e.preventDefault();
    setSearchText(e.target.value)
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
    onSubmit={searchMeFunc}
  />
  <button type="submit" className='search-button' onSubmit={history.push(`/search/${searchText}`)}
><i class="fa-solid fa-magnifying-glass"></i></button>
  </form>
  </div>
  )
}

export default SearchBar

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
    <div>
  <input
    placeholder="Search"
    type="text"
    onChange={searchMeFunc}
    value={searchText}
  />
  <button type="submit" className='search-button' onClick={history.push(searchText)}
><i class="fa-solid fa-magnifying-glass"></i></button>
  </div>
  </div>
  )
}

export default SearchBar

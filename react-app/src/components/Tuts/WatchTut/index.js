//WatchTut

import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getAllTutsOnYouTut, getOneTutById } from '../../../store/tuts'

import "./WatchTut.css"


function WatchTut() {

  const tutId = useParams().tutId

  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  const userLoggedIn = useSelector((state) => {
    return state.session.user;
  })


  useEffect( () => {
     dispatch(getAllTutsOnYouTut())
    .then(() => setIsLoaded(true)
    )
  }, [dispatch, userLoggedIn.id])



  const tuts = useSelector(state => state.tuts)

  const currentlyWatchingThisTut = tuts[tutId]

  console.log(currentlyWatchingThisTut)



  const tutUrl = useSelector(state => state.tuts[tutId])

  console.log("THIS IS THE TUTURL ****", tutUrl)

  // const tut = getOneTutById(tutId)

  // console.log(tut)

  // console.log("use params of .tutId", tut)

  return (
    isLoaded &&
    (<div className='outer-wrapper-watchTut'>
      <div className='tut-and-block'>
        <div className='watch-tut-player'>
        <ReactPlayer
        url={tutUrl.tut_video}
        controls
        width='100%'
        height='100%'
        />
      </div>
      <div className='comments-div'>
        COMMENTS GO HERE
      </div>
      </div>
<div className='tut-card-feed'>
        MINI TUT CARD FEED
      </div>

    </div>
    )


  )
}

export default WatchTut

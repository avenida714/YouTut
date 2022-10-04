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



  const tut = useSelector(state => state.tuts[tutId])

  // console.log("THIS IS THE TUTURL ****", tutUrl)

  // const tut = getOneTutById(tutId)

  // console.log(tut)

  // console.log("use params of .tutId", tut)

  return (
    isLoaded &&
    (<div className='outer-wrapper-watchTut'>
      <div className='tut-and-block'>
        <div className='watch-tut-player'>
        <ReactPlayer
        url={tut.tut_video}
        controls
        width='100%'
        height='100%'
        />
      </div>
      <div className='title-likes-dislikes-WatchTut'>
        <div className='tut-title-WatchTut'>{tut.tut_title}</div>
      </div>
      <div className='profile-user-about-outer-WatchTut'>
        <div className='profile-pic-div-WatchTut'>
          <img className="profile-pic-WatchTut" src={tut.user.profile_img} alt="profile-thumbnail-WatchTut" />
        </div>
        <div className='Username-WatchTut'>
        <div className='tut-username-WatchTut'>{tut.user.username}</div>
        <div className='tut-about-WatchTut'>{tut.user.about}</div>
        </div>
      </div>
      <div className='comments-div'>
        COMMENTS GO HERE
      </div>
      </div>
<div className='mini-tut-card-feed'>
        MINI TUT CARD FEED
      </div>

    </div>
    )


  )
}

export default WatchTut

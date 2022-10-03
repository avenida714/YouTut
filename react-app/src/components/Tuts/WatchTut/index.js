//WatchTut

import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import tutsReducer, { getOneTutById } from '../../../store/tuts'

import "./WatchTut.css"


function WatchTut() {

  const tutId = useParams().tutId

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneTutById(tutId))
  }, [dispatch, tutId])

  const tutUrl = useSelector(state => state.tuts[tutId])

  console.log("THIS IS THE TUTURL ****", tutUrl)

  // const tut = getOneTutById(tutId)

  // console.log(tut)

  // console.log("use params of .tutId", tut)

  return (
    tutUrl ?
    <div className='outer-wrapper-watchTut'>
      <div className='tut-and-block'>
        <div className='watch-tut-player'>
        <ReactPlayer
        url={tutUrl.tut_video}
        controls
        width='100%'
        height='100%'
        />
      </div>
      <div className='block'>
        BLOCK OF STUFF
      </div>
      </div>

      <div className='comments-div'>
        COMMENTS GO HERE
      </div>
    </div>

    :
    null
  )
}

export default WatchTut

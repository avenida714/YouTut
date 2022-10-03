//WatchTut

import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import tutsReducer, { getOneTutById } from '../../../store/tuts'


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
    <div>
      <ReactPlayer url={tutUrl.tut_video} controls/>
    </div>
    :
    null
  )
}

export default WatchTut

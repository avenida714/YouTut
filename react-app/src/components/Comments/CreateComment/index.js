import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createComment, getTutComments } from '../../../store/comments';
import { getOneTutById } from '../../../store/tuts';

import "./CreateComment.css"

function CreateComment({tut}) {
  const dispatch = useDispatch()

  const userLoggedIn = useSelector((state) => state.session.user);

  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState("");
  const [disabled, setDisabled] = useState(true)


  const tutId = tut.id




  const handleChange = (e) => {
    setComment(e.target.value)

    if (e.target.value.length === 0) {
      setDisabled(true);
    } else {
      setDisabled(false)
    }

    if (e.target.value.length > 300) {
      setDisabled(true);

    } else {
      setDisabled(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newComment = {
      comment: comment,
      user_id: userLoggedIn.id,
      tut_id: tutId,
    };

    const waitForThisComment = await dispatch(createComment(newComment));

    if (waitForThisComment) {

      setComment("");
      setDisabled(true)
      // dispatch(getOneTutById(tut.id))
      dispatch(getTutComments(tutId))


    }
  };

  console.log(comment)

  useEffect(() => {
    let errs = [];

    if (comment.length > 300) {
      errs.push("Your comment must be fewer than 300 characters, please.")
    }

    setErrors(errs)

  }, [comment])



  return (
    <div className="leave-comment-watchTut" /* comment text area */>
    <form className="create-comment-form" onSubmit={handleSubmit}>
      <div className='create-comment-profile-pic-div'>
        <img src={userLoggedIn.profile_img} alt="profile-pic" className='create-comment-profile-pic'/>

      <input
        type="text"
        rows='1'
        required
        className="comment-area-watchTut"
        placeholder="Add a comment..."
        value={comment}
        onChange={handleChange}
      />
      <button
        className={disabled ? 'gray_out' : "button-post-comment-watchTut"} // css to hide the button
        disabled={disabled}
      >
        Comment
      </button>
      </div>
    </form>
    <div className='login-errors'>
        {errors ? <div className='login-errors'>{errors}</div>: null}
      </div>
  </div>
  )
}

export default CreateComment

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../../store/comments';
import { getOneTutById } from '../../../store/tuts';

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
      dispatch(getOneTutById(tut.id))


    }
  };




  return (
    <div className="leave-comment-sp" /* comment text area */>
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        rows='1'
        required
        className="comment-area-watchTut"
        placeholder="Add a comment..."
        value={comment}
        onChange={handleChange}
      />
      <button
        className={errors.length ? 'gray_out' : "button-post-comment-watchTut"} // css to hide the button
        disabled={ disabled }
      >
        Comment
      </button>
    </form>
  </div>
  )
}

export default CreateComment

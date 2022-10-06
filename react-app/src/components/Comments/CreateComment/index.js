import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../../store/comments';

function CreateComment({tut}) {
  const dispatch = useDispatch()

  const userLoggedIn = useSelector((state) => state.session.user);

  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState("");


  const tutId = tut.id


  const handleSubmit = (e) => {
    e.preventDefault();

    let newComment = {
      comment: comment,
      user_id: userLoggedIn.id,
      tut_id: tutId,
    };

    dispatch(createComment(newComment));
    setComment("");
  };


  return (
    <div className="leave-comment-sp" /* comment text area */>
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="comment-area-sp"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className={errors.length ? 'gray_out' : "button-post-comment-sp"} // css to hide the button
        disabled={ errors.length > 0 }
      >
        Comment
      </button>
    </form>
  </div>
  )
}

export default CreateComment

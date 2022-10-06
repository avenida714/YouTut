//EditComment

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateAComment } from '../../../store/comments';
import { getOneTutById } from '../../../store/tuts';

function EditComment({tut, oldComment, commentId }) {

  const history = useHistory();
  const dispatch = useDispatch();

  const currUser = useSelector((state) => state.session.user);

  let id = tut.id;

  const [comment, setComment] = useState(oldComment);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);

    if (validationErrors.length > 0) {
      return alert("Cannot Submit");
    }

    let editedComment = {
      comment: comment,
      user_id: currUser.id,
      tut_id: id,
    };

    // console.log("editedComment**********", editedComment);

    const editCom = await dispatch(updateAComment(editedComment, commentId));
    if (editCom) {
      dispatch(getOneTutById(tut.id));

    }

    setComment("");
    setValidationErrors([]);
    setHasSubmitted(false);
  };
  return (
    <div className="leave-comment-pc" /* comment text area */>
      <form className="comment-form" onSubmit={handleSubmit}>
        <div>
          <ul>
            {hasSubmitted &&
              validationErrors.map((error) => (
                <li className="comment_errorsList" key={error}>
                  {error}
                </li>
              ))}
          </ul>
        </div>

        <input
          className="comment_input"
          type="text"
          autoFocus
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="tut-comment">
          {" "}
          <i className="fa-solid fa-pen-to-square"></i>
          Update
        </button>
      </form>


    </div>
  );
}

export default EditComment

//EditComment

import React, { useEffect, useState } from 'react'
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
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [disabled, setDisabled] = useState(true)


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

    setHasSubmitted(true);

    if (errors.length > 0) {
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
    setErrors([]);
    setHasSubmitted(false);
  };

  useEffect(() => {
    let errs = [];

    // if (comment.length > 300) {
    //   errs.push("Your comment must be fewer than 300 characters, please.")
    // }

    if (disabled) {
      errs.push("Your comment must be fewer than 300 characters, please.")
    }

    setErrors(errs)

  }, [comment, disabled])

  return (
    <div className="leave-comment-edit-comment" /* comment text area */>
      <form className="comment-form" onSubmit={handleSubmit}>
        <div>
          <ul>
            {
              errors.map((error) => (
                <li className="errors" key={error}>
                  {error}
                </li>
              ))}
          </ul>
        </div>

        <input className="edit-comment-input"
          type="text"
          autoFocus
          placeholder="Update your comment..."
          value={comment}
          onChange={handleChange}
        />
        <button className={disabled ? 'gray_out' : "update-button"}
        disabled={disabled}
        >
          {" "}
          Update
        </button>
      </form>


    </div>
  );
}

export default EditComment

//DeleteComment
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { deleteAComment } from '../../../store/comments';
import { getOneTutById } from '../../../store/tuts';
// import { getOneTutById } from '../../../store/tuts';

function DeleteComment({commentId, tutId}) {
  const dispatch = useDispatch()


  const deleteComment = async (commentId) => {
    const del = await dispatch(deleteAComment(commentId));
    if (del) alert("Your comment has been deleted");
    dispatch(getOneTutById(tutId))

  };



  return (
    <button className="delete_button_edit_comment" onClick={() => deleteComment(commentId)}>
    <i className="fa-solid fa-trash-can"></i>
  </button>
  )
}

export default DeleteComment

const CREATE_COMMENT = "comment/createComment";
const READ_COMMENT = "comment/readComment"; // get all comments action type
const UPDATE_COMMENT = "comment/updateComment";
const DELETE_COMMENT = "comment/deleteComment";

// ACTION CREATORS ----------------
const actionCreateComment = (comment) => {
  return {
    type: CREATE_COMMENT,
    comment,
  };
};
const actionReadComment = (comment) => {
  return {
    type: READ_COMMENT,
    comment,
  };
};
const actionUpdateComment = (comment) => {
  return {
    type: UPDATE_COMMENT,
    comment,
  };
};
const actionDeleteComment = (id) => {
  return {
    type: DELETE_COMMENT,
    id,
  };
};

//THUNKS -------------------

// GET ALL COMMENTS OF A TUT
export const getTutComments = (tutId) => async (dispatch) => {
  const response = await fetch(`/api/tuts/${tutId}/all_comments`);

  if (response.ok) {
    const comments = await response.json();
    dispatch(actionReadComment(comments.comments));
  }
  return response;
};

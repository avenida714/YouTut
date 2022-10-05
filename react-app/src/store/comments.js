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

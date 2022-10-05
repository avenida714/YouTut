import { getOneTutById } from "./tuts";

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

// Create a comment for tut
export const createComment = (newCommentData) => async (dispatch) => {
  const response = await fetch(
    `/api/tuts/${newCommentData.tut_id}/new_comment`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCommentData),
    }
  );
  if (response.ok) {
    const newComment = await response.json();
    await dispatch(actionCreateComment(newComment));
    await dispatch(getOneTutById(newCommentData.tut_id));
    return newComment;
  }
  return response;
};



//Initial State:
const initialState = {};

//Reducer:
const commentsReducer = (state = initialState, action) => {
  let newState = {};

  switch (action.type) {
    case CREATE_COMMENT: {
      newState = { ...state };
      newState[action.comment.id] = action.comment;
      return newState;
    }

    case READ_COMMENT: {
      action.comment.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    }


    default:
      return state;
  }
};

export default commentsReducer;

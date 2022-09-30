//~~~~~~~~~~~TYPES~~~~~~~~~~~~~~~~
const READ_ONE_TUT = "tuts/getOneTut"

const READ_ALL_TUTS = "tuts/getAllTuts"


//~~~~~~~~~~~ACTION CREATORS~~~~~~~~~~~~~~~~


//Read ONE
const actionReadTut = (tut) => {
  return {
    type: READ_ONE_TUT,
    tut,
  }
}

//Read All
const actionReadAllTuts = (tuts) => {
  return {
    type: READ_ALL_TUTS,
    tuts
  }
}


//~~~~~~~~~~~THUNKS~~~~~~~~~~~~~~~~


//READ/FETCH ONE TUT BY ID
export const getOneTutById = (tutId) => async (dispatch) => {
  const response = await fetch(`/api/tuts/${tutId}`)
  if (response.ok) {
    const tutById = await response.json();
    dispatch(actionReadTut(tutById))
    return tutById;
  }
  return response
}

//READ/FETCH ALL TUTS ON YOUTUT
export const getAllTutsOnYouTut = () => async (dispatch) => {
  const response = await fetch(`/api/tuts/all`);
  if (response.ok) {
    const data = await response.json();
    dispatch(actionReadAllTuts(data.tuts));
    return data;
  }
  return response;
};


//READ/FETCH ALL TUTS OF THE CURRENT USER (1st person)
export const getCurrentUserTuts = () => async (dispatch) => {
  const response = await fetch(`/api/tuts/current`, {});
  if (response.ok) {
    const data = await response.json();
    dispatch(actionReadAllTuts(data.current_tuts));
    return data;
  }
  return response;
};

//READ/FETCH ALL TUTS OF ONE USER (3rd person)
export const getAllTutsOfAnotherUser = (id) => async (dispatch) => {
  const response = await fetch(`/api/tuts/user/${id}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(actionReadAllTuts(data.tuts));
    return data;
  }
};


//~~~~~~~~~~~REDUCER~~~~~~~~~~~~~~~~

//Initial State:
const initialState = {};

//Reducer:
const postsReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {

    case READ_ONE_TUT: {
      newState = { ...state };
      newState[action.tut.id] = action.tut;
      return newState;
    }
    case READ_ALL_TUTS: {
      action.tuts.forEach((tut) => {
        newState[tut.id] = tut;
      });
      return newState;
    }


    default:
      return state;
  }
};

export default postsReducer;

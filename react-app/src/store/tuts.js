//~~~~~~~~~~~TYPES~~~~~~~~~~~~~~~~
const READ_ONE_TUT = "tuts/getOneTut"

const READ_ALL_TUTS = "tuts/getAllTuts"


//~~~~~~~~~~~ACTION CREATORS~~~~~~~~~~~~~~~~



//~~~~~~~~~~~THUNKS~~~~~~~~~~~~~~~~



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

//store/tuts

//~~~~~~~~~~~TYPES~~~~~~~~~~~~~~~~
const READ_ONE_TUT = "tuts/getOneTut"

const READ_ALL_TUTS = "tuts/getAllTuts"

const CREATE_TUT = "tuts/addATut"

const DELETE_TUT = "tuts/deleteATut"



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
  console.log("ACTION READ ALL TUTS", tuts)
  return {
    type: READ_ALL_TUTS,
    tuts
  }
}

//Create/upload a tut

const addATut = (tut) => {
  return {
    type: CREATE_TUT,
    tut
  }
}

//Delete/destroy a tut
const destroyTutAC = (tutId) => {
  return {
    type: DELETE_TUT,
    tutId
  }
}




//~~~~~~~~~~~THUNKS~~~~~~~~~~~~~~~~


//READ/FETCH ONE TUT BY ID
export const getOneTutById = (tutId) => async (dispatch) => {
  // console.log("this is the tutID", tutId)

  const response = await fetch(`/api/tuts/${tutId}`)
  if (response.ok) {
    const tutById = await response.json();
    dispatch(actionReadTut(tutById.tuts)) //tutById.tuts NOT just tutById
    // console.log("THIS IS THE TUTBY ID IN ONE TUT THUNK",tutById)
    return tutById;
  }
  return response
}

//READ/FETCH ALL TUTS ON YOUTUT
export const getAllTutsOnYouTut = () => async (dispatch) => {
  const response = await fetch(`/api/tuts/all`);
  if (response.ok) {
    const data = await response.json();
    dispatch(actionReadAllTuts(data.tuts)); //data.tuts NOT just data
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

//READ/FETCH ALL TUTS OF ONE USER (1st or 3rd person)
export const getAllTutsOfOneUser = (id) => async (dispatch) => {
  const response = await fetch(`/api/tuts/user/${id}`);
  if (response.ok) {
    const data = await response.json();
    console.log("****** THIS IS THE DATA ******", data)
    dispatch(actionReadAllTuts(data.tuts));
    return data;
  }
  return response;
};

//CREATE A TUT AWS

export const uploadTut = (tut) => async (dispatch) => {
  const response = await fetch('/api/tuts/upload-tut', {
    method:'POST',
    body: tut
  })

  if (response.ok) {
    const data = await response.json()
    dispatch(addATut(data.tut))
    return response   // make sure we return response, and not data for response.ok
  } else {
    // console.log("DID WE MAKE IT HERE??? ****************")
    return response
  }

}

//UPDATE A TUT
export const editTut = (tutId, tut) => async (dispatch) => {

  console.log("*****this is the tut (form data) coming from the submit form *********", tut)

  const response = await fetch(`/api/tuts/${tutId}/update`, {
    method: "PATCH",
    body: tut
  })

  const data = await response.json()
  if (response.ok) {
    dispatch(addATut(data.tut))
    return data
  } else {
    return data.errors
  }
}

//DELETE A TUT

export const deleteTut = (tutId) => async (dispatch) => {
  const response = await fetch(`/api/tuts/${tutId}`, {
    method: 'DELETE'
  })

  const data = await response.json()
  // console.log("THIS IS THE DATA FROM JSON RESPONSE IN deleteTut **********", data)
  //message: "The Tut has been sucessfully deleted"
  if(response.ok) {
    dispatch(destroyTutAC(tutId))
    return data.message
  } else {
    return data
  }

}


//~~~~~~~~~~~REDUCER~~~~~~~~~~~~~~~~

//Initial State:
const initialState = {};

//Reducer:
const tutsReducer = (state = initialState, action) => {
  let newState = {};
  switch (action.type) {

    case READ_ONE_TUT: {
      newState = { ...state };
      console.log("this is action.tut *******", action.tut)
      console.log("this is action.tut.id", action.tut.id)
      newState[action.tut.id] = action.tut;
      return newState;
    }
    case READ_ALL_TUTS: {
      // console.log("THIS IS ACTION.TUTS *****", action.tuts)
      action.tuts.forEach((tut) => {
        newState[tut.id] = tut;
      });
      return newState;
    }
    case CREATE_TUT: {
      const newState = {...state}
      newState[action.tut.id] = action.tut
      return newState
    }
    case DELETE_TUT: {
      const newState = {...state}
      delete newState[action.tutId]
      return newState
    }


    default:
      return state;
  }
};

export default tutsReducer;

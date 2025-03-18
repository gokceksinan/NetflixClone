import { ActionTypes } from "./actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  movies: [],
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.MOVİES_LOADİNG:
      return { ...state, isLoading: true };
    case ActionTypes.MOVİES_ERROR:
      return { ...state,isLoading:false , error: payload}
    case  ActionTypes.MOVİES_SUCCESS:
      return {
        ...state,
        isLoading:false,
        error:null,
        movies:payload.results,
      }
    default:
      return state;
  }
};

export default movieReducer;

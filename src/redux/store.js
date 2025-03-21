import { applyMiddleware, combineReducers, createStore } from "redux";
import movieReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genreReducer";

const rootreducer = combineReducers({
    genres:genreReducer,
    movies: movieReducer,
})

export default createStore(rootreducer, applyMiddleware(thunk))
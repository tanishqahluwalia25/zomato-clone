import { combineReducers, configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "./restaurants/restaurantsReducer";
import likesReducer from "./likes/likesReducer";

const rootReducer = combineReducers({
    restaurantsReducer,
    likesReducer
})


export default configureStore({ reducer: rootReducer })
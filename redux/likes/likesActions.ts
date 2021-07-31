import { ADD_TO_LIKED, REMOVE_FROM_LIKED, START, END } from "./likesReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const likeAction = createAsyncThunk(
    'liked',
    (props: any, thunkAPI) => {
        thunkAPI.dispatch(START())
        thunkAPI.dispatch(ADD_TO_LIKED(props))
        thunkAPI.dispatch(END())
    }
)
export const unlikeAction = createAsyncThunk(
    'liked',
    (props: number, thunkAPI) => {
        thunkAPI.dispatch(START())
        thunkAPI.dispatch(REMOVE_FROM_LIKED(props))
        thunkAPI.dispatch(END())
    }
)
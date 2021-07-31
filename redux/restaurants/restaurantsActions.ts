import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LOAD_RESTAURANTS, LOAD_RESTAURANTS_FAIL, LOAD_RESTAURANTS_SUCCESS } from "./restaurantsReducer";

export default createAsyncThunk(
    'restaurants',
    (_, thunkAPI) => {
        thunkAPI.dispatch(LOAD_RESTAURANTS)
        axios.get('https://FondDefenselessAtom.tanishqwalia25.repl.co').then(
            ({ data }) => {

                thunkAPI.dispatch(LOAD_RESTAURANTS_SUCCESS(data))
            }
        ).catch(
            error => thunkAPI.dispatch(LOAD_RESTAURANTS_FAIL([{ error: error.message }]))
        )
    }
)

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    loadResponse: [],
    isLoadSuccess: false
}

const restaurantSlice = createSlice({
    initialState,
    name: 'restaurant',
    reducers: {
        LOAD_RESTAURANTS: state => {
            state.isLoadSuccess = false;
            state.isLoading = true;
            state.loadResponse = [];
        },

        LOAD_RESTAURANTS_SUCCESS: (state, { payload }) => {
            state.isLoading = false;
            state.isLoadSuccess = true;
            state.loadResponse = payload;
        },
        LOAD_RESTAURANTS_FAIL: (state, { payload }) => {
            state.isLoading = false;
            state.isLoadSuccess = false;
            state.loadResponse = payload;
        },
    }
})


export const { LOAD_RESTAURANTS, LOAD_RESTAURANTS_FAIL, LOAD_RESTAURANTS_SUCCESS } = restaurantSlice.actions
export default restaurantSlice.reducer
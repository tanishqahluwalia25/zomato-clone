import { createSlice } from "@reduxjs/toolkit";
import { detailsInterface } from "../../components/cards/RestaurantCard";

const initialState = {
    likedList: [] as detailsInterface[],
    reload: false,
    count: 0
}
const likesSlice = createSlice(
    {
        initialState,
        name: 'likes',
        reducers: {
            START: state => { state.reload = true },
            END: state => { state.reload = false },
            ADD_TO_LIKED: (state, { payload }) => {
                state.likedList = [...state.likedList, payload]
                state.count++;
            },
            REMOVE_FROM_LIKED: (state, { payload }) => {
                state.likedList = state.likedList.filter(({ id }: { id: number }) => id !== payload)
                state.count--;
            },

        }
    }
)

export default likesSlice.reducer

export const { ADD_TO_LIKED, START, END, REMOVE_FROM_LIKED } = likesSlice.actions
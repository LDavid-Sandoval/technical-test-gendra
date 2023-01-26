import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    page: 1,
}

export const locationSlice = createSlice({
    name: 'listLocation',
    initialState,
    reducers: {
        addListLocation: (state, action) => {
            state.data = action.payload
        },
        addPageListLocation: (state, action) => {
            state.page = action.payload
        },
    }
})

export const { addListLocation, addPageListLocation } = locationSlice.actions

export default locationSlice.reducer
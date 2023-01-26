import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    page: 1,
}

export const characterSlice = createSlice({
    name: 'listCharacter',
    initialState,
    reducers: {
        addListCharacter: (state, action) => {
            state.data = action.payload
        },
        addPageListCharacter: (state, action) => {
            state.page = action.payload
        },
    }
})

export const { addListCharacter, addPageListCharacter } = characterSlice.actions

export default characterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    page: 1,
}

export const episodeSlice = createSlice({
    name: 'listEpisode',
    initialState,
    reducers: {
        addListEpisode: (state, action) => {
            state.data = action.payload
        },
        addPageListEpisode: (state, action) => {
            state.page = action.payload
        },
    }
})

export const { addListEpisode, addPageListEpisode } = episodeSlice.actions

export default episodeSlice.reducer
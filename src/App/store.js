import { configureStore } from "@reduxjs/toolkit";
import characterSliceReducer from '../Features/Character/characterSlice'
import episodeSliceReducer from '../Features/Episode/episodeSlice'
import listSliceReducer from '../Features/Location/locationSlice'

export const store = configureStore({
    reducer: {
        listCharacter: characterSliceReducer,
        listEpisode: episodeSliceReducer,
        listLocation: listSliceReducer,
    }
})
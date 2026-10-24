
import { createSlice } from '@reduxjs/toolkit'
import { films } from '../films'

const filmsSlice = createSlice({
    name: 'films',

    initialState: {
        items: films
    },

    reducers: {
        addFilm: (state, action) => {
            state.items.push(action.payload)
        },

        removeFilm: (state, action) => {
            state.items = state.items.filter(
                (film) => film.id !== action.payload
            )
        }
    }
})

export const { addFilm, removeFilm } = filmsSlice.actions

export default filmsSlice.reducer

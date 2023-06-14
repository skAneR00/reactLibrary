import { createSlice } from '@reduxjs/toolkit'

export const CurrentBookSlice = createSlice({
    name: 'allBooks',
    initialState: {
        currentBook: -1
    },
    reducers: {
        setCurrentBook: (state, action) => {
            state.currentBook = action.payload
        }
    },
})

export const { setCurrentBook } = CurrentBookSlice.actions

export default CurrentBookSlice.reducer
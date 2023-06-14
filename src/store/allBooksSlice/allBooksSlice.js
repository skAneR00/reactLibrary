import { createSlice } from '@reduxjs/toolkit'

export const allBooks = createSlice({
    name: 'allBooks',
    initialState: {
        allBooks: []
    },
    reducers: {
        setAllBooks: (state, action) => {
            state.allBooks = action.payload
        }
    },
})

export const { setAllBooks } = allBooks.actions

export default allBooks.reducer
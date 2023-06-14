import { createSlice } from '@reduxjs/toolkit'

export const addBook = createSlice({
    name: 'addBook',
    initialState: {
        newBook: {
            bookName: "",
            author: "",
            avatar: "",
            year: 0,
            publishingHouse: "",
            isTaken: false
        }
    },
    reducers: {
        setBookName: (state, action) => {
            state.newBook.bookName = action.payload
        },
        setAuthor: (state, action) => {
            state.newBook.author = action.payload
        },
        setaAvatar: (state, action) => {
            state.newBook.avatar = action.payload
        },
        setYear: (state, action) => {
            state.newBook.year = action.payload
        },
        setPublishingHouse: (state, action) => {
            state.newBook.publishingHouse = action.payload
        }
    },
})

export const { setBookName, setAuthor, setaAvatar, setYear, setPublishingHouse } = addBook.actions

export default addBook.reducer
import { configureStore } from '@reduxjs/toolkit'
import addBookSlice from './addBookSlice/addBookSlice'
import allBooksSlice from './allBooksSlice/allBooksSlice'
import modalAddBookSlice from './addBookSlice/addBookModalSlice'
import deleteBookModalSlice from './deleteBookSlice/deleteBookModalSlice'
import usersSlice from './users/usersSlice'
import giveBookModalSlice from './giveBookSlice/giveBookModalSlice'
import CurrentBookSlice from './CurrentBookSlice/CurrentBookSlice'

export default configureStore({
    reducer: {
        addBook: addBookSlice,
        allBooks: allBooksSlice,
        modalAddBook: modalAddBookSlice,
        modalDeleteBook: deleteBookModalSlice,
        users: usersSlice,
        moadlGiveBook: giveBookModalSlice,
        currentBook: CurrentBookSlice
    },
})
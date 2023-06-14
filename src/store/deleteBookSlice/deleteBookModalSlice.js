import { createSlice } from "@reduxjs/toolkit";

export const modalDeleteBookSlcie = createSlice({
    name: "modalDeleteBook",
    initialState: {
        visible: false
    },
    reducers: {
        showModalDelete: (state) => void (state.visible = true),
        hideModalDelete: (state) => void (state.visible = false),
    }
})

export const { showModalDelete, hideModalDelete } = modalDeleteBookSlcie.actions

export default modalDeleteBookSlcie.reducer
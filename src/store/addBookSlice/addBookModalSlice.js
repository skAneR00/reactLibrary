import { createSlice } from "@reduxjs/toolkit";

export const modalAddBookSlcie = createSlice({
    name: "modalAddBook",
    initialState: {
        visible: false
    },
    reducers: {
        showModal: (state) => void (state.visible = true),
        hideModal: (state) => void (state.visible = false),
    }
})

export const { showModal, hideModal } = modalAddBookSlcie.actions

export default modalAddBookSlcie.reducer
import { createSlice } from "@reduxjs/toolkit";

export const modalGiveBookSlice = createSlice({
    name: "modalAddBook",
    initialState: {
        visible: false
    },
    reducers: {
        showGiveModal: (state) => void (state.visible = true),
        hideGiveModal: (state) => void (state.visible = false),
    }
})

export const { showGiveModal, hideGiveModal } = modalGiveBookSlice.actions

export default modalGiveBookSlice.reducer
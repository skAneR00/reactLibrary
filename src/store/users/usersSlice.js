import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [
            { name: "Пользователь 1", id: 0 }, 
            { name: "Пользователь 2", id: 1 }, 
            { name: "Пользователь 3", id: 2 }, 
            { name: "Пользователь 4", id: 3 }, 
            { name: "Пользователь 5", id: 4 }
        ]
    },
    reducers: {
    }
})

export default usersSlice.reducer
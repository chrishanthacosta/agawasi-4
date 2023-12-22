"use client"

import { createSlice } from "@reduxjs/toolkit"
import { boolean, string } from "zod"

export interface UserState  {
    userName: string
    loggedIn : boolean
        
} 

const initialState: UserState = {
    userName: "guesta",
    loggedIn: false
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUSer: (state, action) => {
            console.log(" action.payload", action.payload,)
            state.userName = action.payload.userName,
            state.loggedIn =  action.payload.loggedIn
        } 
    }
    
})

export const { setUSer } = UserSlice.actions;

export default UserSlice.reducer;

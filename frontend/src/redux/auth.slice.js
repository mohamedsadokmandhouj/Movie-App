import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user : "user"
}

const AuthSlice = createSlice({
name:"auth",
initialState,
reducers:{}



})

export const AuthReducer = AuthSlice.reducer 
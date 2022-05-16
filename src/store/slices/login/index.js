import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isAuth:false,
    error:false,
    userData:{}
}

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        loginPending: (state, action) => {
            return {...state, ...action.payload}
        },
        loginSuccess: (state, action) => {
           return {...state, ...action.payload}
        },
        loginFail: (state, action) => {
            return {...state, ...action.payload}
        },
        loginData : (state, action) => {
            return {...state, ...action.payload}
        }
    }
})

const {reducer, actions} = loginSlice;

export const {loginPending, loginSuccess, loginFail, loginData} = actions;

export default reducer;
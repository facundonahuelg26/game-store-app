import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shippingData:null,
}

const shippingSlice = createSlice({
    name:'shipping',
    initialState,
    reducers:{
        addData: (state, action) => {
            state.shippingData = action.payload;
        }
    }
})

const {reducer, actions} = shippingSlice;

export const {addData } = actions;

export default reducer;

export const getShipping = (userId) => {
    return async (dispatch) => {
        let ENDPOINT =  `user-info/${userId}`
        try {
            const res = await fetch(`https://game-store-application.herokuapp.com/api/${ENDPOINT}`)
    
            const data = await res.json();

            dispatch(addData(data))
        } catch (error) {
            console.log(error)
        }
    }
}
import {createSlice} from '@reduxjs/toolkit';
//appApi

import appApi from '../services/appApi';

const initialState = [];

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        updateProducts:(_, action) => {
            return action.payload;
        },
    },
});

export const {updateProducts} = productSlice.actions;
export default productSlice.reducer;
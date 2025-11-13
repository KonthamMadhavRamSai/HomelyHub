import { createSlice } from "@reduxjs/toolkit";

const accomodationSlice = createSlice({
    name:"accomodation",
    initialState:{
        accomodation:[],
        loading:false,
        errors:null,
    },
    reducers:{
        getAccomodationRequest(state){
            state.loading = true;
            state.errors = null;
        },
        getAccomodation(state, action){
            state.accomodation = action.payload;
            state.loading = false;
            state.errors = null;
        },
        getAccomodationSuccess(state, action){
            state.loading = false;
            state.errors = null;
            state.accomodation = [...state.accomodation, action.payload];
        },
        getErrors(state, action){
            state.errors = action.payload;
            state.loading = false;
        }
    }
})

export const accomodationActions = accomodationSlice.actions;
export default accomodationSlice;
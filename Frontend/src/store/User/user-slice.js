import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        isAuthenticated:false,
        user:null,
        errors:null,
        loading:false,
        success:false
    },
    reducers:{
        getSignupRequest(state){
            state.loading = true;
        },
        getSignupDetails(state,action){
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        },
        getLoginRequest(state){
            state.loading = true;
        },
        getLoginDetails(state,action){
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        },
        getError(state,action){
            state.errors= action.payload;
            state.loading = false;
        },
        getCurrentUserRequest(state){
            state.loading = true;
        },
        getUpdateUserRequest(state){
            state.loading = true;
        },
        getCurrentUser(state,action){
            state.user = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
        },
        getLogoutRequest(state){
            state.loading = true;
        },
        getLogout(state,action){
            state.isAuthenticated = false;
            state.user = action.payload;
            state.loading = false;
        },
        getPasswordRequest(state){
            state.loading = true;
        },
        getPasswordSucess(state,action){
            state.success = action.payload;
            state.errors = null;
        },
        clearErrors(state){
            state.errors = null;
        }
    }
})
export const userActions = userSlice.actions;
export default userSlice;
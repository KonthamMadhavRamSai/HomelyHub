import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
    name:"property",
    initialState:{
        properties:[],
        totalProperties:0,
        searchParams:{},
        error:null,
        loading:false,
    },
    reducers:{
        getRequest(state){
            state.loading = true;
        },
        getProperties(state,action){
            // Be defensive about the API response shape. Some endpoints return
            // { data: [...], all_properties: N } while others may return the
            // array directly. Normalize both cases.
            const payload = action.payload || {};
            // If payload.data is present and is an array, use it; otherwise
            // if payload itself is an array, use that. Fallback to empty array.
            if (Array.isArray(payload.data)) {
                state.properties = payload.data;
            } else if (Array.isArray(payload)) {
                // payload might be the array itself
                state.properties = payload;
            } else if (Array.isArray(action.payload)) {
                state.properties = action.payload;
            } else {
                state.properties = payload.data ?? [];
            }

            // totalProperties may be named differently depending on backend
            state.totalProperties = payload.all_properties ?? payload.totalProperties ?? state.totalProperties ?? 0;
            state.loading = false;
        },
        updateSearchParams(state,action){
            state.searchParams = Object.keys(action.payload).length === 0 ? {} : {...state.searchParams,...action.payload};
        },
        getErrors(state,action){
            state.error = action.payload;
        }
    }
})
export const propertyAction = propertySlice.actions;
export default propertySlice;
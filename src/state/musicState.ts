import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
    name: 'music',
    initialState:{
        music: [],
        singleMusic:[],
        isLoading: false
    },
    reducers: {
        getMusicsFetch: (state,filter)=>{
            state.isLoading = true;
        },
        getMusicsSuccess: (state, action)=>{
            state.music = action.payload;
            state.isLoading = false;
        },
        getMusicsFailure: (state)=>{
            state.isLoading = false;
        },
    }
});


export const { getMusicsFailure, getMusicsFetch, getMusicsSuccess} = musicSlice.actions;

export default musicSlice.reducer;
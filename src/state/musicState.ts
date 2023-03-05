import { createSlice } from "@reduxjs/toolkit";

export const musicSlice = createSlice({
    name: 'music',
    initialState:{
        music: [],
        singleMusic:{},
        isLoading: false
    },
    reducers: {
        addMusic: (state, payload)=>{
            state.isLoading = true;
        },
        getMusicsFetch: (state,filter)=>{
            state.isLoading = true;
        },
        getMusicFetch: (state, payload) =>{
            state.isLoading = true;
        },

        getMusicsSuccess: (state, action)=>{
            state.music = action.payload;
            state.isLoading = false;
        },
        getMusicSuccess: (state, action)=>{
            state.singleMusic = action.payload;
            state.isLoading = false;
        },

        getMusicsFailure: (state)=>{
            state.isLoading = false;
        }
    }
});



export const { getMusicsFailure, getMusicsFetch, getMusicsSuccess, getMusicFetch, getMusicSuccess, addMusic} = musicSlice.actions;

export default musicSlice.reducer;
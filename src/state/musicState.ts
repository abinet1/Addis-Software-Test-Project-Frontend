import { createSlice } from "@reduxjs/toolkit";
import { MusicType, MusicsType } from "../interfaces/interface";


interface initialStateType{
    music: MusicsType| [],
    singleMusic: MusicType,
    musicCount: number|0,
    isLoading: boolean|false
}

const initialState: initialStateType = {
    music: [],
    singleMusic:{
        _id:'',
        title:'',
        artist:'',
        genre:'',
        album:'',
        image:'',
        date:'',
        __v: 0
    },
    musicCount:0,
    isLoading: false
}


export const musicSlice = createSlice({
    name: 'music',
    initialState: initialState,
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
        updateMusic: (state, payload)=>{
            state.isLoading = true;
        },
        setMusicsCount: (state, action)=>{
            state.musicCount = action.payload;
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
            
        },
        deleteMusic: (state, action)=>{
            state.isLoading = true;
        }
    }
});

export const { setMusicsCount, getMusicsFailure, getMusicsFetch, getMusicsSuccess, getMusicFetch, getMusicSuccess, addMusic, updateMusic, deleteMusic} = musicSlice.actions;

export default musicSlice.reducer;

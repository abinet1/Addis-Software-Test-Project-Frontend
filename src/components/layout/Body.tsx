import Musics from "./Musics";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import { getMusicsFetch } from "../../state/musicState";

const Section = styled.section`
    padding-left: 5%;
    padding-right: 5%;
`;
const Filter = styled.div`
    margin-bottom:25px;
`;

const Input = styled.input`
    border:none;
    border-bottom: solid;
    margin:5px;
    width:20%;
    height:20px;
`;

export default function Body(){

    const titleData = useRef<HTMLInputElement>(null);
    const genreData = useRef<HTMLInputElement>(null);
    const albumData = useRef<HTMLInputElement>(null);

    const filter = {title: '',album: '',genre: ''};
    
    function filterChange(){
        console.log()
        // @ts-ignore
        filter.title = titleData.current.value;
        // @ts-ignore
        filter.album = albumData.current.value;
        // @ts-ignore
        filter.genre = genreData.current.value;

        apiCall();
    }

    const dispatch = useDispatch();

    const apiCall = useCallback(async () => {
        await dispatch(getMusicsFetch(filter));
    }, []);

    useEffect(()=>{
        apiCall()
    },[])

    return (
        <Section>
            <Filter> 
                <Input placeholder="title" ref={titleData} onChange={()=>{filterChange()}} />
                <Input placeholder="genre" ref={genreData} onChange={()=>{filterChange()}} />
                <Input placeholder="album" ref={albumData} onChange={()=>{filterChange()}} />
            </Filter >
             {/* @ts-ignore */}
            <Musics />
        </Section>
    )
} 
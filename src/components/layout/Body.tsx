import Musics from "./Musics";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef } from "react";
import { getMusicsFetch } from "../../state/musicState";
import { Box } from "rebass";
import { FilterType } from "../../interfaces/interface";

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

    const titleData = useRef<HTMLInputElement>(null!);
    const genreData = useRef<HTMLInputElement>(null!);
    const albumData = useRef<HTMLInputElement>(null!);

    const filter: FilterType = {title: '',album: '',genre: ''};
    
    function filterChange(){
        console.log()
        filter.title = titleData.current.value;
        filter.album = albumData.current.value;
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
            <Musics />
        </Section>
    )
} 
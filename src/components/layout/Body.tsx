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

    const [filter, setFilter] = useState({title: '',album: '',genre: ''});
    
    function filterChange(){
        // @ts-ignore
        const title = titleData.current.value;
        // @ts-ignore
        const album = albumData.current.value;
        // @ts-ignore
        const genre = genreData.current.value;

        setFilter({title:title,genre:genre,album:album})
    }

    // @ts-ignore
    const musics = useSelector(state => state.music.music);

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
            <Musics musics={musics}/>
        </Section>
    )
} 
import Musics from "./Musics";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useRef } from "react";
import { getMusicsFetch } from "../../state/musicState";
import { Box } from "rebass";
import stats from "./stats";
import StateDetail from "./StateDetail";

const Section = styled.section`
    padding-left: 5%;
    padding-right: 5%;
`;

const Span = styled.span`
    font-size: 1.4em;
    margin:10%;
`;
export default function Statistics(){

    const filter = {title: '',album: '',genre: ''};

    const dispatch = useDispatch();

    const apiCall = useCallback(async () => {
        await dispatch(getMusicsFetch(filter));
    }, []);

    useEffect(()=>{
        apiCall()
    },[])

    // @ts-ignore
    const music = useSelector(state=>state.music)
    // @ts-ignore
    const data = stats(music.music)
    console.log(data[2])
    
    return (
        <Section>   
            <Box width={2/2}>
                <Box textAlign={'center'}>
                    <StateDetail name='artist' data={data[1]} />
                    <StateDetail name='album' data={data[0]} />
                    <StateDetail name='genre' data={data[2]} />
                </Box>
            </Box>
            <Box my={50} width={2/2}>
                <Box textAlign={'right'}>
                    <Span >
                        Total Musics: { music.musicCount} 
                    </Span>
                </Box>
                <Box textAlign={'right'}>
                    <Span >
                        number of albums: { music.musicCount} 
                    </Span>
                </Box>
            </Box> 
        </Section>
    )
} 
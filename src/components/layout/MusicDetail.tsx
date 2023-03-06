import styled from "@emotion/styled";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams, redirect} from "react-router-dom";
import MusicPage from "./MusicPage";
import { getMusicFetch } from "../../state/musicState";
import FOF from "../../FOF";

const Section = styled.section`
    text-align: center;
    margin-left:10%;
    margin-right:10%;
`;


export default function MusicDetail(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // @ts-ignore   
    const singleMusic = useSelector(state => state.music.singleMusic);

    const {id} = useParams();

    const apiCall = useCallback(async () => {
        await dispatch(getMusicFetch(id));
    }, []);

    // // @ts-ignore
    // const status = useSelector(state => state.music.status)

    useEffect(()=> {
        apiCall();
    }, []);

     
    return (
        
        <Section>
            { Object.keys(singleMusic).length === 0 ?
                <FOF msg="no music with that id"/>:
                <MusicPage music={singleMusic}/>
            }
        </Section>
    )
}
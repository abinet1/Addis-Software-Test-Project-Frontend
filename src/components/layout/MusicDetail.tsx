import styled from "@emotion/styled";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import MusicPage from "./MusicPage";
import { getMusicFetch } from "../../state/musicState";

const Section = styled.section`
    text-align: center;
    margin-left:10%;
    margin-right:10%;
`;

// @ts-ignore
export default function MusicDetail(){
    const dispatch = useDispatch();

    // @ts-ignore
    const singleMusic = useSelector(state => state.music.singleMusic);

    const {id} = useParams();

    const apiCall = useCallback(async () => {
        await dispatch(getMusicFetch(id));
    }, []);

    useEffect(()=> {
        apiCall();
    }, []);

     
    return (
        <Section>
            { singleMusic &&
                <MusicPage music={singleMusic}/>
            }
        </Section>
    )
}
import styled from "@emotion/styled";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MusicPage from "./MusicPage";
import { getMusicFetch } from "../../state/musicState";
import FOF from "../../FOF";
import { RootState } from "../../state/reduxConf";

const Section = styled.section`
    text-align: center;
    margin-left:10%;
    margin-right:10%;
`;


export default function MusicDetail(){
    const dispatch = useDispatch();
    
    const singleMusic = useSelector((state: RootState) => state.music.singleMusic);

    const {id} = useParams<{ id: string|'1' }>();

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
import styled from "@emotion/styled";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "rebass";
import { MusicType } from "../../interfaces/interface";
import { deleteMusic } from "../../state/musicState";


const Img = styled.img`
    width: 100%; 
    object-fit: cover;
    max-height: 500px; 
    text-align: center;
`;


const H1 = styled.h1`
    font-size: 20px; 
    line-height: 24px; 
    font-family: 'Helvetica', Arial, sans-serif; 
    font-weight: 600; 
    text-decoration: none; 
    color: #000000;
`;

const H4 = styled.h4`
    line-height: 24px; 
    font-family: 'Helvetica', Arial, sans-serif; 
    font-weight: 600; 
    text-decoration: none; 
    color: #000000;
`;

interface PropType{
    music: MusicType
}

export default function MusicPage(props: PropType){

    const navigation = useNavigate();

    const dispatch = useDispatch();

    const {id} = useParams<{ id: string|'1' }>();


    const apiCall = useCallback(async () => {
        await dispatch(deleteMusic(id));
    }, []);

    const deleteMusicBTN = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        apiCall();
        navigation('/');
    };

    
    return(
        <>
            <Img alt="Hero image" src={props.music.image} />
            <H1>title: {props.music.title}</H1>
            <H4>artist: {props.music.artist}</H4>
            <H4>album: {props.music.album}</H4>
            <H4>genre: {props.music.genre}</H4>
            <H4>date: <small>{props.music.date}</small></H4>
            <Link to={`/update/${props.music._id}`}><Button backgroundColor={'green'} marginBottom={'10'} >Update</Button></Link>
            <Button backgroundColor={'red'} marginBottom={'10'} onClick={deleteMusicBTN} >Delete</Button>
        </>
    )
}
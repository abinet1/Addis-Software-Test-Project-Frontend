import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


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

// @ts-ignore
export default function MusicPage(props){

    return(
        <>
            <Img alt="Hero image" src={props.music.image} />
            <H1>title: {props.music.title}</H1>
            <H4>artist: {props.music.artist}</H4>
            <H4>album: {props.music.album}</H4>
            <H4>genre: {props.music.genre}</H4>
            <H4>date: <small>{props.music.date}</small></H4>
            <Link to={`/${props.music._id}/update`}><button>update</button></Link>
            <Link to={`/${props.music._id}/delete`}><button>delete</button></Link>
        </>
    )
}
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Box, Button } from "rebass";
import {  MusicType } from "../../interfaces/interface";

const Card = styled.div`
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 400px;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`
const Image = styled.img`
    width:100%;
    radies: 5px;
`

const Container = styled.div`
    padding: 2px 16px;
    padding-bottom: 15px;
`

export default function Music(props: MusicType){

    return (
        <Card>
            <Image src={props.image} alt="Avatar" />
            
            <Container>
                <h4>title: <b>{props.title}</b></h4> 
                <p>artist: {props.artist}</p> 
                <p>album: {props.album}</p> 
                <p>genre: {props.genre}</p>
                <Box width={5/5} textAlign="center">
                    <Link to={`/${props._id}`}><Button backgroundColor={'red'} marginBottom={'10'} >see detail</Button></Link>
                </Box>
            </Container>
        </Card>
    )
} 
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
`

// @ts-ignore
export default function Music(props){

    return (
        <Card>
            <Image src={props.image} alt="Avatar" />
            {/* @ts-ignore */}
            
            <Container>
                <h4><b>{props.title}</b></h4> 
                <p>{props.artist}</p> 
                <p>{props.album}</p> 
                <p>{props.genre}</p>
                <Link to={`/${props._id}`}><button>see detail</button></Link>
            </Container>
        </Card>
    )
} 
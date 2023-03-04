import Musics from "./Musics";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

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

    // @ts-ignore
    const musics = useSelector(state => state.music.music);

    return (
        <Section>
            <Filter> 
                <Input placeholder="name" />
                <Input placeholder="genre" />
                <Input placeholder="albem" />
            </Filter >
             {/* @ts-ignore */}
            <Musics musics={musics}/>
        </Section>
    )
} 
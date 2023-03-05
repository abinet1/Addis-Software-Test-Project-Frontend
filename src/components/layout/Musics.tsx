import styled from "@emotion/styled";
// import { useSelector } from "react-redux";
import Music from "./Music";

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;

`
// @ts-ignore
export default function Musics (props){
    // @ts-ignore
    // const musics = useSelector(state => state.music.music);

    return (
    <Container>
        {props.musics.map((music: any) => {
            return <Music 
                        key={music._id} 
                        _id={music._id}
                        title={music.title} 
                        album={music.album} 
                        artist={music.artist} 
                        date={music.date} 
                        genre={music.genre}
                        image={music.image}/>
        })}
    </Container>
    )
};
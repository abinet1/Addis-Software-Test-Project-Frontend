import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import Music from "./Music";

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;

`
export default function Musics (){


    // @ts-ignore
    const musics = useSelector(state => state.music.music);

    return (
        <Container>
            {musics.map((music: any) => {
                return (
                    <Music key={music._id} 
                            _id={music._id}
                            title={music.title} 
                            album={music.album} 
                            artist={music.artist} 
                            date={music.date} 
                            genre={music.genre}
                            image={music.image}
                    />
                )
            })}
        </Container>
    )
};
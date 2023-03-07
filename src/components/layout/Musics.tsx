import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Box } from "rebass";
import Music from "./Music";

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;

`
export default function Musics (){


    // @ts-ignore
    const musics = useSelector(state => state.music);

    return (
        <section>
            <Container>
                {musics.music.map((music: any) => {
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
            <Box width={2/2}>
                <Box width={1/2} textAlign={'right'}>
                    <span>
                        {musics.music.length} music out of {musics.musicCount} musics 
                    </span>
                </Box>
                <Box textAlign={'right'}>
                    <span>
                        Total Music: {musics.musicCount}
                    </span>
                </Box>
            </Box>
        </section>
    )
};
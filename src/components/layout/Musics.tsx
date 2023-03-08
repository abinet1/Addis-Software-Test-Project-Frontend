import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Box } from "rebass";
import { MusicType } from "../../interfaces/interface";
import { RootState } from "../../state/reduxConf";
import Music from "./Music";

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;

`
export default function Musics (){

    const musics = useSelector((state: RootState) => state.music.music);
    const musicCount = useSelector((state: RootState) => state.music.musicCount);

    return (
        <section>
            <Container>
                {/* @ts-ignore */}
                {musics.map((music: MusicType) => {
                    return (
                        <Music key={music._id} 
                                _id={music._id}
                                title={music.title} 
                                album={music.album} 
                                artist={music.artist} 
                                date={music.date} 
                                genre={music.genre}
                                image={music.image}
                                __v={music.__v} />
                    )
                })}
            </Container>
            <Box width={2/2}>
                <Box width={1/2} textAlign={'right'}>
                    <span>
                        {/* @ts-ignore */}
                        {musics.length} music out of {musicCount} musics 
                    </span>
                </Box>
                <Box textAlign={'right'}>
                    <span>
                        Total Music: {musicCount}
                    </span>
                </Box>
            </Box>
        </section>
    )
};
import styled from '@emotion/styled';
import {
    Label,
    Input,
  } from '@rebass/forms'
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMusicFetch, updateMusic } from "../../state/musicState";
import { useNavigate, useParams } from "react-router-dom";

import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Flex,
    Button,
  } from 'rebass'
import FOF from '../../FOF';
import { RootState } from '../../state/reduxConf';

export default function UpdateMusic(){
    const Section = styled.section`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;

    const singleMusic = useSelector((state: RootState ) => state.music.singleMusic);

    const {id} = useParams<{ id: string|'1' }>();

    console.log()

    const getCall = useCallback(async () => {
        await dispatch(getMusicFetch(id));
    }, []);

    useEffect(()=> {
        getCall();
    }, []);

    const [error, setError] = useState(false);

    const navigation = useNavigate();

    const title = useRef<HTMLInputElement>(null!);
    const album = useRef<HTMLInputElement>(null!);
    const artist= useRef<HTMLInputElement>(null!);
    const genre= useRef<HTMLInputElement>(null!);
    const image= useRef<HTMLInputElement>(null!);
    const titleError= useRef<HTMLLabelElement>(null!);
    const albumError= useRef<HTMLLabelElement>(null!);
    const artistError= useRef<HTMLLabelElement>(null!);
    const genreError= useRef<HTMLLabelElement>(null!);
    const imageError= useRef<HTMLLabelElement>(null!);

    const dispatch = useDispatch();

    const apiCall = useCallback(async (id: string|undefined, tData: string|undefined, aData: string|undefined, arData: string|undefined, gData: string|undefined) => {
        await dispatch(updateMusic({
            'id':id,
            'title': tData, 
            'album': aData, 
            'artist': arData, 
            'genre': gData
        }));
    }, []);


    function validate(value: string|'', defaultValue: string){
        if(value.length===0){
            setError(true)       
            return false;
        }
        if(value === defaultValue){
            setError(true) 
            return false;
        }
        return true
    }

    const handleSubmit=()=>{

        if(validate(title.current.value, title.current.defaultValue)){
            titleError.current.style.color = 'white'
        }else{
            titleError.current.style.color = 'red'
        }

        if(validate(album.current.value, album.current.defaultValue)){
            albumError.current.style.color = 'white'
        }else{
            albumError.current.style.color = 'red'
        }

        if(validate(artist.current.value, artist.current.defaultValue)){
            artistError.current.style.color = 'white'
        }else{
            artistError.current.style.color = 'red'
        }

        if(validate(genre.current.value, genre.current.defaultValue)){
            genreError.current.style.color = 'white'
        }else{
            genreError.current.style.color = 'red'
        }

        if(error){
            return false
        }

        // add to the data base
        try{
            apiCall(id,title.current.value, album.current.value,artist.current.value,genre.current.value);
            navigation(`/${id}`);
        }catch(error){
            console.log(error);
        }
    }


    
    return (
        <Section>
            { Object.keys(singleMusic).length === 0 ?
                <FOF msg="no music with that id"/>:
                <Box width={700}>
                    <Card sx={{ p: 1, borderRadius: 2, boxShadow: '0 0 16px rgba(0, 0, 0, .25)', }}>
                        <Image src="" />
                        <Box textAlign={'center'}>
                            <Heading as='h3'>
                                Add Music
                            </Heading>
                            <Text fontSize={0}>
                                update music here 
                            </Text>
                        </Box>
                        <br />

                        <Box as='form' onSubmit={handleSubmit} py={3}>

                            <Box px={2} py={2}>
                                <Flex display={'flex'} justifyContent={'space-around'}>
                                    <Label width={1/5} paddingTop={2} htmlFor='title'fontSize={20}>title: </Label>
                                    <Input
                                        width={3/5}
                                        ref={title}
                                        id='title'
                                        name='title'
                                        required={true}
                                        defaultValue={singleMusic.title}
                                    />
                                    <Label 
                                        width={1/5} 
                                        ref={titleError}
                                        paddingTop={2} 
                                        color={'white'} 
                                        fontSize={1}> 
                                        required *
                                    </Label>
                                </Flex>
                            </Box>

                            <Box px={2} py={2}>
                                <Flex display={'flex'} justifyContent={'space-around'}>
                                    <Label width={1/5} paddingTop={2} htmlFor='artist'fontSize={20}>artist: </Label>
                                    <Input
                                        width={3/5}
                                        ref={artist}
                                        id='artist'
                                        name='artist'
                                        required={true}
                                        defaultValue={singleMusic.artist}
                                    />
                                    <Label 
                                        width={1/5} 
                                        paddingTop={2} 
                                        ref={artistError}
                                        color={'white'} 
                                        fontSize={1}> 
                                        required *
                                    </Label>
                                </Flex>
                            </Box>

                            <Box px={2} py={2}>
                                <Flex display={'flex'} justifyContent={'space-around'}>
                                    <Label width={1/5} paddingTop={2} htmlFor='album'fontSize={20}>album </Label>
                                    <Input
                                        width={3/5}
                                        ref={album}
                                        id='album'
                                        name='album'
                                        required={true}
                                        defaultValue={singleMusic.album}
                                    />
                                    <Label 
                                        width={1/5}
                                        ref={albumError}
                                        color={'white'}  
                                        paddingTop={2} 
                                        fontSize={1}> 
                                        required *
                                    </Label>
                                </Flex>
                            </Box>
                            <Box px={2} py={2}>
                                <Flex display={'flex'} justifyContent={'space-around'}>
                                    <Label width={1/5} paddingTop={2} htmlFor='genre'fontSize={20}>genre </Label>
                                    <Input
                                        width={3/5}
                                        ref={genre}
                                        id='genre'
                                        name='genre'
                                        required={true}
                                        defaultValue={singleMusic.genre}
                                    />
                                    <Label 
                                        width={1/5} 
                                        paddingTop={2} 
                                        ref={genreError}
                                        color={'white'} 
                                        fontSize={1}
                                        > 
                                        required *
                                    </Label>
                                </Flex>
                            </Box>

                            <Box px={2} py={2}>
                                <Flex display={'flex'} justifyContent={'space-around'}>
                                    <Label width={1/5} paddingTop={2} htmlFor='image'fontSize={20}>image </Label>
                                    <Input
                                        width={3/5}
                                        ref={image}
                                        id='image'
                                        name='image'
                                        type={"file"}
                                    />
                                    <Label 
                                        width={1/5} 
                                        paddingTop={2}
                                        fontSize={1}
                                        ref={imageError}
                                        color={'white'}> 
                                        required *
                                    </Label>
                                </Flex>
                            </Box>
                            <Box px={2} width={4/5} py={3} textAlign={'right'}>
                                <Button backgroundColor={'green'} >Submit</Button>
                                <Box width={1/5} />
                            </Box>
                        </Box>
                    </Card>
                </Box>
            }
        </Section>
    )
}
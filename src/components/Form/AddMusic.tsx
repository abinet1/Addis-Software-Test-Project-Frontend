import styled from '@emotion/styled';
import {
    Label,
    Input,
  } from '@rebass/forms'
import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMusic } from "../../state/musicState";
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

export default function AddMusic(){
    const Section = styled.section`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;

    const [error, setError] = useState(false);

    const {id} = useParams();

    const navigation = useNavigate();

    const title = useRef();
    const album = useRef();
    const artist= useRef();
    const genre= useRef();
    const image= useRef();
    const titleError= useRef();
    const albumError= useRef();
    const artistError= useRef();
    const genreError= useRef();
    const imageError= useRef();

    const dispatch = useDispatch();

    const apiCall = useCallback(async (tData: string|undefined, aData: string|undefined, arData: string|undefined, gData: string|undefined) => {
        await dispatch(addMusic({
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

    // @ts-ignore
    const handleSubmit=(e)=>{
        e.preventDefault();

        // @ts-ignore
        
        // @ts-ignore
        if(validate(title.current.value, title.current.defaultValue)){
            // @ts-ignore
            titleError.current.style.color = 'white'
        }else{
            // @ts-ignore
            titleError.current.style.color = 'red'
        }

        // @ts-ignore
        if(validate(album.current.value, album.current.defaultValue)){
            // @ts-ignore
            albumError.current.style.color = 'white'
        }else{
            // @ts-ignore
            albumError.current.style.color = 'red'
        }

        // @ts-ignore
        if(validate(artist.current.value, artist.current.defaultValue)){
            // @ts-ignore
            artistError.current.style.color = 'white'
        }else{
            // @ts-ignore
            artistError.current.style.color = 'red'
        }

        // @ts-ignore
        if(validate(genre.current.value, genre.current.defaultValue)){
            // @ts-ignore
            genreError.current.style.color = 'white'
        }else{
            // @ts-ignore
            genreError.current.style.color = 'red'
        }

        if(error){
            return false
        }
        // add to the data base
        try{
            // @ts-ignore
            apiCall(title.current.value, album.current.value,artist.current.value,genre.current.value);
            navigation(`/${id}`);
        }catch(error){
            console.log(error);
        }
    }


    
    return (
        <Section>
            <Box width={700}>
                <Card sx={{ p: 1, borderRadius: 2, boxShadow: '0 0 16px rgba(0, 0, 0, .25)', }}>
                    <Image src="" />
                    <Box textAlign={'center'}>
                        <Heading as='h3'>
                            Add Music
                        </Heading>
                        <Text fontSize={0}>
                            the people is 
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
                                    defaultValue='music'
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
                                    defaultValue='Abinet'
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
                                    defaultValue='album one'
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
                                    defaultValue='Action'
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
        </Section>
    )
}
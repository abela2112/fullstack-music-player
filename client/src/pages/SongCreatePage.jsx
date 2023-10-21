import React, { useState } from "react";

import axios from "axios";
import { Box, Button, Form, Heading, Input, Label } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import { createSong } from "../redux/features/songs";
import { createSongAPI } from "../api/songApi";
import { useNavigate } from "react-router-dom";

const SongCreatePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    const [country, setCountry] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [music, setMusic] = useState("");
    const { isLoading } = useSelector(state => state.songs)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("title", title);
        formData.set("artist", artist);
        formData.set("genre", genre);
        formData.set("language", language);
        formData.set("country", country);
        formData.set("song", music[0]);
        formData.set("img", coverImage[0]);

        try {
            dispatch(createSong(formData))
            //navigate('/home')

        } catch (error) {
            console.log(error);
        }
        // dispatch(createSong(formData))

    };
    return (

        <Box
            width="full"
            flexDirection="column"
            justifyContent={["start", "center"]}
            alignItems="center"
            bg={'white'}
        >
            <Box width={["full", "80%", "70%", "60%"]} p={[2, 5]} boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)" justifyContent='center' alignItems='center'>
                <Form p={2} width={['full', '80%']} onSubmit={handleSubmit}>
                    <Heading fontSize={['18px']} fontWeight='500'>Add songs</Heading>
                    <Box flexDirection="column">
                        <Label htmlFor="title" py={2}>
                            Title
                        </Label>
                        <Input
                            type="text"
                            placeholder="title"
                            px={[0, 3]}
                            py={[2]}
                            fontSize={["1rem", "1.2rem"]}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Box>
                    <Box flexDirection="column" >
                        <Label htmlFor="artistName" py={2}>
                            Artist
                        </Label>
                        <Input
                            type="text"
                            placeholder="artist name"
                            px={[0, 3]}
                            py={[2]}
                            fontSize={["1rem", "1.2rem"]}
                            value={artist}
                            onChange={(e) => setArtist(e.target.value)}
                        />
                    </Box>
                    <Box flexDirection="column">
                        <Label htmlFor="artistName" py={2}>
                            Artist
                        </Label>
                        <Input
                            type="text"
                            placeholder="Genre"
                            px={[0, 3]}
                            py={[2]}
                            fontSize={["1rem", "1.2rem"]}
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </Box>
                    <Box flexDirection="column" >
                        <Label htmlFor="title" py={2}>
                            Language
                        </Label>
                        <Input
                            type="text"
                            placeholder="language"
                            px={[0, 3]}
                            py={[2]}
                            fontSize={["1rem", "1.2rem"]}
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        />
                    </Box>

                    <Box flexDirection="column">

                        <Label htmlFor="country" py={2}>
                            country
                        </Label>
                        <Input
                            type="text"
                            placeholder="country"
                            px={[0, 3]}
                            py={[2]}
                            fontSize={["1rem", "1.2rem"]}
                            autoComplete="none"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </Box>
                    <Box flexDirection="column" >

                        <Label htmlFor="cover-photo" py={2}>
                            cover Photo
                        </Label>
                        <Input
                            type="file"
                            placeholder="cover photo"
                            px={[0, 3]}
                            py={[2]}
                            fontSize={["1rem", "1.2rem"]}
                            onChange={(e) => setCoverImage(e.target.files)}
                        />
                    </Box>
                    <Box flexDirection="column" >
                        <Label htmlFor="title" py={2}>
                            Music
                        </Label>
                        <Input
                            type="file"
                            placeholder="music"
                            px={[0, 3]}
                            py={[2]}
                            fontSize={["1rem", "1.2rem"]}
                            onChange={(e) => setMusic(e.target.files)}
                        />
                    </Box>
                    <Box flexDirection={['column', 'row']} justifyContent={["center", "flex-end"]} mt={4}>

                        <Button
                            type="submit"
                            width={["100%", '300px']}
                            px={[0, 3]}
                            py={2}
                            mx={2}
                            my={[2, 1]}
                            fontSize={"1.4rem"}
                            border="none"
                            outline="none"
                            justifyContent="center"
                            bg="#f0354b"
                            color="white"
                            borderRadius='12px'
                            disabled={isLoading}
                            className={isLoading ? "loading" : ''}
                        >
                            Submit
                        </Button>
                        <Button
                            type="button"
                            width={["100%", '300px']}
                            px={[0, 3]}
                            py={2}
                            mx={2}
                            fontSize={"1.4rem"}
                            border="none"
                            outline="none"
                            justifyContent="center"
                            borderRadius='12px'
                            bg="#909090"
                            my={[2, 1]}
                            color="white"
                            onClick={() => {
                                setArtist('')
                                setCountry('')
                                setCoverImage('')
                                setGenre('')
                                setLanguage('')
                                setTitle('')

                            }}

                        >
                            Cancel
                        </Button>
                    </Box>
                </Form>
            </Box>
        </Box>

    );
};

export default SongCreatePage;

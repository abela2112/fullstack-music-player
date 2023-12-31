import React, { useEffect, useState } from "react";
import { Box, Button, Form, Heading, Input, Label } from "../components/Styles";
import { useDispatch, useSelector } from "react-redux";
import { createSong, setSongSuccessMessage } from "../redux/features/songs";
import { useNavigate } from "react-router-dom";
import { setSongError } from "../redux/features/songs";

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
    const { isLoading, error, successMessage } = useSelector(state => state.songs)

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispatch(setSongError(''))
            }, 5000);
        }
    }, [error])


    useEffect(() => {
        if (successMessage) {
            setTimeout(() => {
                dispatch(setSongSuccessMessage(null))
                navigate('/home/mysongs')
            }, 5000);

        }
    }, [successMessage]);
    console.log('Success', successMessage)
    const handleCancel = () => {
        setArtist('')
        setCountry('')
        setCoverImage('')
        setGenre('')
        setLanguage('')
        setTitle('')
    }
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

            bg={'white'}
        >
            <Box width={["full"]} p={[2, 5]} boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)" flexDirection='column'>

                <Form p={2} width={['full']} onSubmit={handleSubmit} display='flex' >
                    <Heading fontSize={['36px']} fontWeight='500'>Add songs</Heading>
                    <Box flexWrap='wrap'>
                        <Box flexDirection="column" width='400px' mx={3}>
                        <Label htmlFor="title" py={2}>
                            Title
                        </Label>
                        <Input
                            type="text"
                            placeholder="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Box>
                        <Box flexDirection="column" width='400px' mx={3}>
                        <Label htmlFor="artistName" py={2}>
                            Artist
                        </Label>
                        <Input
                            type="text"
                            placeholder="artist name"
                            value={artist}
                            onChange={(e) => setArtist(e.target.value)}
                        />
                    </Box>
                        <Box flexDirection="column" width='400px' mx={3}>
                        <Label htmlFor="artistName" py={2}>
                            Genre
                        </Label>
                        <Input
                            type="text"
                            placeholder="Genre"
                            value={genre}
                            onChange={(e) => setGenre(e.target.value)}
                        />
                    </Box>
                        <Box flexDirection="column" width='400px' mx={3}>
                        <Label htmlFor="title" py={2}>
                            Language
                        </Label>
                        <Input
                            type="text"
                            placeholder="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        />
                    </Box>

                        <Box flexDirection="column" width='400px' mx={3}>

                        <Label htmlFor="country" py={2}>
                            country
                        </Label>
                        <Input
                            type="text"
                            placeholder="country"
                            autoComplete="none"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </Box>
                        <Box flexDirection="column" width='400px' mx={3}>

                        <Label htmlFor="cover-photo" py={2}>
                            cover Photo
                        </Label>
                        <Input
                            type="file"
                            placeholder="cover photo"
                            onChange={(e) => setCoverImage(e.target.files)}
                        />
                    </Box>
                        <Box flexDirection="column" width='400px' mx={3}>
                        <Label htmlFor="title" py={2}>
                            Music
                        </Label>
                        <Input
                            type="file"
                            placeholder="music"
                            onChange={(e) => setMusic(e.target.files)}
                        />
                    </Box>
                    </Box>
                    <Box width='full' flexDirection={['column', 'row']} justifyContent={["center", "flex-end"]} mt={4}>
                        <Button
                            type="submit"
                            width={["100%", '300px']}
                            px={[0, 3]}
                            py={[2, 3]}
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
                            py={[2, 3]}
                            mx={2}
                            fontSize={"1.4rem"}
                            border="none"
                            outline="none"
                            justifyContent="center"
                            borderRadius='12px'
                            bg="#909090"
                            my={[2, 1]}
                            color="white"
                            onClick={handleCancel}

                        >
                            Cancel
                        </Button>
                    </Box>
                    {error && <p className="error">{error}</p>}
                    {successMessage && <p className="success">{successMessage}</p>}
                </Form>
            </Box>
        </Box>

    );
};

export default SongCreatePage;

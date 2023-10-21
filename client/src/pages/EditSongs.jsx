import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSongByIdAPI, updateSongAPI } from '../api/songApi';
import { Heading, Form, Input, Button, Box, Label } from '../components/Styles';
import { useDispatch, useSelector } from 'react-redux'
import { setSongSuccessMessage, updateSong } from '../redux/features/songs';


const EditSongs = () => {
    const { songId } = useParams()
    const { isLoading, error, successMessage } = useSelector(state => state.songs)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    const [country, setCountry] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [music, setMusic] = useState("");


    useEffect(() => {
        getSongByIdAPI(songId)
            .then(({ data }) => {
            setTitle(data?.data?.title)
            setArtist(data?.data?.artist)
            setGenre(data?.data?.genre)
            setLanguage(data?.data?.language)
                setCountry(data?.data?.country)
        })
    }, [])




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
    const handleCancel = () => {
        setArtist('')
        setCountry('')
        setCoverImage('')
        setGenre('')
        setLanguage('')
        setTitle('')
    }
    const handleEdit = async (e) => {
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
            console.log(title, artist, genre, country, language, genre)
            dispatch(updateSong({ songId, formData }));

        } catch (error) {
            console.log(error);
        }
    }



    return (

        <Box
            width="full"
            flexDirection="column"
            justifyContent={["start", "center"]}
            alignItems="center"
            bg={'white'}
        >
            <Box width={["full", "80%", "70%", "60%"]} p={[2, 5]} boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)" justifyContent='center' alignItems='center' >
                <Form p={2} width={['full', '80%']} onSubmit={handleEdit}>
                    <Heading fontSize={['36px']} fontWeight='500'>Edit song</Heading>
                    <Box flexDirection="column" >
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
                    <Box flexDirection="column" >
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
                    <Box flexDirection="column" >
                        <Label htmlFor="Genre" py={2}>
                            Genre
                        </Label>
                        <Input
                            type="text"
                            placeholder="Genre"
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
                            autoComplete="none"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </Box>
                    <Box flexDirection="column">

                        <Label htmlFor="cover-photo">
                            cover Photo
                        </Label>
                        <Input
                            type="file"
                            placeholder="cover photo"
                            onChange={(e) => setCoverImage(e.target.files)}
                        />
                    </Box>
                    <Box flexDirection="column">
                        <Label htmlFor="title" py={2}>
                            Music
                        </Label>
                        <Input
                            type="file"
                            placeholder="music"
                            onChange={(e) => setMusic(e.target.files)}
                        />
                    </Box>
                    <Box flexDirection={['column', 'row']} justifyContent={["center", "flex-end"]} mt={4}>
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
                            justifyContent='center'
                            borderRadius="20px"
                            bg="#f0354b"
                            color="white"
                            disabled={isLoading}
                            className={isLoading ? 'loading' : ''}
                        >

                            Edit
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


export default EditSongs
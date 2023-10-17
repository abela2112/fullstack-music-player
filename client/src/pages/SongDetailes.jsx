import React, { useEffect, useState } from 'react'
import { Box, Button, Img, NavLinkButton, Typography } from '../components/Styles'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { getSongByIdAPI } from '../api/songApi'
import PlayerWidget from '../widget/PlayerWidget'

const SongDetailes = () => {
    const { user } = useSelector((state) => state.user)
    const { songId } = useParams()
    const [song, setSong] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        getSongByIdAPI(songId).then(({ data }) => {
            setSong(data?.data)
            setIsLoading(false)
        })

    }, [])
    if (isLoading) return <Loader />
    return (
        <Box width='full' flexDirection='column'>
            <Box width='full' height='400px'>
                <Img width={'full'} height={'full'} src={`http://localhost:5000/${song?.img}`} borderRadius={10} />
            </Box>
            <Box flexDirection={['column', 'column', 'row']} justifyContent='center' width='full' >
                <Box flexDirection='column' px={2} width='70%'>
                    <Typography>Title:{song?.title}</Typography>
                    <Typography>genre:{song?.genre ? song?.genre : 'pop'}</Typography>
                    <Typography>Language:{song?.language}</Typography>
                    <Typography>Country:{song?.country}</Typography>
                    <Typography>Language:{song?.language}</Typography>
                    <Typography>Lyrics:{song?.lyrics ? song?.lyrics : 'No Lyrics '}</Typography>
                    <Box>
                        {user?._id === song?.userCreated && <NavLinkButton bg='#F92457' px={3} py={3} to={`/home/editSongs/${song?._id}`}>Edit</NavLinkButton>
                        }
                    </Box>
                </Box>
                <PlayerWidget />
            </Box>


        </Box>
    )
}

export default SongDetailes
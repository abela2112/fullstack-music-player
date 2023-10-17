import React from 'react'
import { Box, Heading } from '../components/Styles'
import SongCard from '../components/SongCard'
import Loader from '../components/Loader'
import { useSelector } from 'react-redux'

const SongsPage = () => {
    const { songs, isLoading } = useSelector(state => state.songs)
    if (isLoading) {
        return <Loader />
    }
    return (
        <Box flexDirection={'column'} >
            <Heading>songs</Heading>
            <Box flexWrap='wrap'>
                {songs.length > 0 && songs.map((song, i) => (<SongCard song={song} i={i} key={i} />))}
            </Box>
        </Box>
    )
}

export default SongsPage
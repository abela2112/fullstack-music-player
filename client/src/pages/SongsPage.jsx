import React, { useEffect } from 'react'
import { Box, Heading } from '../components/Styles'
import SongCard from '../components/SongCard'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getSongsFetch } from '../redux/features/songs'
import PlayerWidget from '../widget/PlayerWidget'


const SongsPage = () => {
    const dispatch = useDispatch()
    const { songs, isLoading } = useSelector(state => state.songs)
    const { activeSong } = useSelector((state) => state.player);
    useEffect(() => {
        dispatch(getSongsFetch())
    }, [])


    if (isLoading) {
        return <Loader />
    }

    return (
        <Box flexDirection={'column'} width='full' >
            <Heading>songs</Heading>
            <Box flexWrap='wrap' width='full'>
                {songs.length > 0 && songs.map((song, i) => (<SongCard song={song} i={i} key={i} />))}
            </Box>
            {activeSong && <PlayerWidget />}
        </Box>
    )
}

export default SongsPage
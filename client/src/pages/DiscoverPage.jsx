import React, { useEffect } from 'react'

import SongCard from '../components/SongCard'
import { getSongsFetch } from '../redux/features/songs'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { Box, Heading, } from '../components/Styles'
import PlayList from '../widget/PlayList'
import PlayerWidget from '../widget/PlayerWidget'


const DiscoverPage = () => {
    const dispatch = useDispatch()
    const { songs, isLoading } = useSelector(state => state.songs)
    useEffect(() => {
        dispatch(getSongsFetch())
    }, [])
    if (isLoading) {
        return <Loader />
    }
    return (
        <Box flexDirection={'column'} >
            <Heading>Discover</Heading>
            <Box flexWrap='wrap'>
                {songs.length > 0 && songs.slice(0, 4).map((song, i) => (<SongCard song={song} i={i} key={i} />))}
            </Box>
            <Box flexDirection={['column', 'column', 'row']}>
                <PlayList songs={songs} />
                <PlayerWidget />
            </Box>
        </Box>
    )
}

export default DiscoverPage
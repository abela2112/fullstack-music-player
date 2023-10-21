import React, { useEffect } from 'react'

import SongCard from '../components/SongCard'
import { getSongsFetch } from '../redux/features/songs'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { Box, GridContainer, Heading, } from '../components/Styles'
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
        <Box flexDirection={'column'} width='full' >
            <Heading>Discover</Heading>
            <Box flexWrap='wrap' width='full' >
                {songs.length > 0 && songs.slice(0, 4).map((song, i) => (<SongCard song={song} i={i} key={i} />))}
            </Box>
            <GridContainer

                gap={1} // Space between grid items
                width='full'>
                <PlayList songs={songs} />
                <PlayerWidget />
            </GridContainer>
        </Box>
    )
}

export default DiscoverPage
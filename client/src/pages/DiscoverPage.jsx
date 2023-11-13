import React, { useEffect } from 'react'

import SongCard from '../components/SongCard'
import { getSongsFetch } from '../redux/features/songs'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { Box, GridContainer, Heading, } from '../components/Styles'
import PlayList from '../widget/PlayList'
import PlayerWidget from '../widget/PlayerWidget'

import { artist } from '../data'
import ArtistCard from '../components/ArtistCard'
import styled from '@emotion/styled'
import RecentlyPlayed from '../components/RecentlyPlayed'
import { AiFillPlayCircle } from 'react-icons/ai'

const Title = styled.span`
    font-size: 24px;
    font-weight:bold;
    color: black;
   
`
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
        <Box flexDirection={'column'} width='full' padding='20px'  >
            <Box width='full'>
                <Box display='flex'
                    flex={3}
                    flexDirection='column'>
                    <Title>Popular Artist</Title>
                    <Box flexWrap='wrap' width='full' my={3} alignItems={['center']} >
                        {artist.length > 0 && artist.slice(0, 4).map((song, i) => (<ArtistCard artist={song} key={i} />))}
                    </Box>
                    <Title>Trending Songs</Title>
                    <Box my={3} flexWrap='wrap' justifyContent={['center', 'inherit']}>
                        {songs.length > 0 && songs.slice(0, 3).map((song, i) => (<SongCard song={song} i={i} key={i} />))}
                    </Box>
                    <RecentlyPlayed songs={songs} />

                </Box>
                <Box display={['none', 'flex']} flexDirection='column' flex={1} gap={'1rem'}>
                    <PlayList songs={songs} />
                    <PlayerWidget />
                </Box>
            </Box>

        </Box>
    )
}

export default DiscoverPage
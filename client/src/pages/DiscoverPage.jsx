
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import SongCard from '../components/SongCard'
import { Box, Img } from '../components/Styles'

import styled from '@emotion/styled'
import { discoverBackground } from '../assets'
import Music from '../components/Music'
import ArtistsCard from '../components/ArtistsCard'
import { useEffect } from 'react'
import { getSongsFetch } from '../redux/features/songs'
import MusicPlayer from '../components/MusicPlayer'

const Title = styled.span`
    font-size: 24px;
    font-weight:bold;
    color: black;
   
`
const DiscoverPage = () => {
    const dispatch = useDispatch()
    const { songs, isLoading } = useSelector(state => state.songs)
    const { activeSong } = useSelector(state => state.player)
    useEffect(() => {
        dispatch(getSongsFetch())
    }, [])
    if (isLoading) {
        return <Loader />
    }
    return (<>

        <Box flexDirection={'column'} width='full' padding='20px'  >
            <Box>
                <Box flex={3} width={"full"} height={300}>
                    <Img
                        width={"full"}
                        height="full"
                        src={discoverBackground}
                        borderRadius={10} />

                </Box>
                <Box display={['none', 'flex']} flex={1} flexDirection='column' ml={"1rem"}>
                    <Title>Top Artists</Title>
                    {[1, 2, 3, 4].map((song, key) => (<ArtistsCard key={key} />))}
                </Box>
            </Box>
            <Box width='full'>
                <Box display='flex'
                    flex={3}
                    flexDirection='column'>
                    {/* <Title>Popular Artist</Title> */}
                    {/* <Box flexWrap='wrap' width='full' my={3} alignItems={['center']} >
                        {artist.length > 0 && artist.slice(0, 4).map((song, i) => (<ArtistCard artist={song} key={i} />))}
                    </Box> */}
                    <Title>Discover</Title>
                    <Box my={3} flexWrap='wrap' justifyContent={['center', 'inherit']}>
                        {songs.length > 0 && songs?.map((song, i) => (<SongCard song={song} i={i} key={i} />))}
                    </Box>
                    {activeSong && <MusicPlayer />}
                    {/* <RecentlyPlayed songs={songs} /> */}


                </Box>
                {/* <Box display={['none', 'flex']} flexDirection='column' flex={1} gap={'1rem'}>
                    <PlayList songs={songs} />
                    <PlayerWidget />
                </Box> */}
                <Box display={['none', 'flex']} flex={1} flexDirection='column' my={2} ml={"1rem"}>
                    <Title>Recently Played</Title>
                    {[1, 2, 3, 4].map((song, key) => (<Music key={key} />))}
                </Box>


            </Box>

        </Box></>
    )
}

export default DiscoverPage
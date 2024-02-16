import React, { useEffect, useState } from 'react'
import { getSongsByUserId } from '../api/userApi'
import { Box, Heading, NavLinkButton } from '../components/Styles'
import { useSelector } from 'react-redux'
import SongCard from '../components/SongCard'
import PlayerWidget from '../widget/PlayerWidget'
import { Link } from 'react-router-dom'
const MySongs = () => {

    const [songs, setSongs] = useState([])
    const { isModalOpen } = useSelector(state => state.songs)
    const { activeSong } = useSelector((state) => state.player);
    const { user } = useSelector((state) => state.user)
    console.log(isModalOpen)

    useEffect(() => {
        getSongsByUserId(user?._id).then(({ data }) => setSongs(data)).catch((error) => console.log(error))
    }, [])

    return (
        <Box flexDirection={'column'} width='full'>
            <Heading>My Songs</Heading>
            <Box flexWrap='wrap' width='full'>
                {songs.length > 0 && songs.map((song, i) => (<SongCard song={song} i={i} key={i} />))}
            </Box>
            <Link to='/add songs'>Add Your Songs</Link>



        </Box>
    )
}

export default MySongs
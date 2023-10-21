import React, { useEffect, useState } from 'react'
import SongCard from '../components/SongCard'
import { Box, Heading } from '../components/Styles'
import PlayerWidget from '../widget/PlayerWidget'
import { useSelector } from 'react-redux'

const Recents = () => {
    const { activeSong, recents } = useSelector((state) => state.player);
    return (
        <Box flexDirection={'column'} width='full'>
            <Heading>Recents</Heading>
            <Box flexWrap='wrap' width='full'>
                {recents?.length > 0 ? recents.map((song, i) => (<SongCard key={i} song={song} i={i} />)) : <p>no recents</p>}

            </Box>
            {activeSong && <PlayerWidget />}

        </Box>
    )
}

export default Recents
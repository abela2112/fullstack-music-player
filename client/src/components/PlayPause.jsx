import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playPause, setActiveSong } from '../redux/features/player'
import { Box } from './Styles'
const PlayPause = ({ song, i }) => {
    const { isPlaying, activeSong } = useSelector(state => state.player)
    const dispatch = useDispatch()
    const handlePlayClick = () => {
        dispatch(setActiveSong({ song, i }));
        dispatch(playPause(true));
    }
    const handlePauseClick = () => {
        console.log('handlePauseClick');
        dispatch(playPause(false))
    }

    return (
        <Box px={2}>{isPlaying && activeSong?._id === song?._id ? <FaPauseCircle size={35} onClick={handlePauseClick} className="cursor-pointer" /> : <FaPlayCircle size={35} onClick={handlePlayClick} className="cursor-pointer" />}</Box>
    )
}

export default PlayPause
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import SongCard from '../components/SongCard'
import axios from 'axios'
import { setFavoriteSongs } from '../redux/features/user'
import Loader from '../components/Loader'
import { Box } from '../components/Styles'
import { getUserFavoritesSongAPI } from '../api/userApi'

const FavoriteSongs = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const { user, token } = useSelector(state => state.user)
    const favoriteSongs = useSelector(state => state.user?.user?.likedSongs)
    useEffect(() => {
        setIsLoading(true)
        getUserFavoritesSongAPI(user?._id).then(({ data }) => {
            console.log(data);
            dispatch(setFavoriteSongs(data))
            setIsLoading(false)
        })
    }, [])
    if (isLoading) {
        return <Loader />
    }
    return (
        <Box flexDirection={'column'}>
            <h2>Favorite songs</h2>
            <Box flexWrap='wrap'>
                {favoriteSongs?.length > 0 ? favoriteSongs.map((song, i) => (<SongCard key={i} song={song} i={i} />)) : <p>no favorite songs</p>}

            </Box>
        </Box>
    )
}

export default FavoriteSongs
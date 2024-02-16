import React, { useState } from 'react'
import { FaPlus, FaHeart } from 'react-icons/fa'
import { MdDeleteOutline, MdModeEditOutline } from 'react-icons/md'
import PlayPause from './PlayPause'

import { useDispatch, useSelector } from 'react-redux'
import { setFavoriteSongs, setPlaylist } from '../redux/features/user'
import axios from 'axios'
import { Box, Button, FlexNavLink, Img, SongCardBox, Span } from './Styles'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import Modal from './Modal'
import MenuButton from './MenuButton'
import { userFavoritesAPI, userPlaylistsAPI } from '../api/userApi'
import { discoverPhoto } from '../assets'
import { Link } from 'react-router-dom'
//import { setModalOpen } from '../redux/features/songs'


const SongCard = ({ song, i }) => {
    const [id, setId] = useState('')
    const dispatch = useDispatch()
    const { token, user } = useSelector(state => state.user)

    const favoriteSongs = useSelector(state => state.user?.user?.likedSongs)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false)
    const handleOpenModal = (id) => {
        setIsModalOpen(true);
        setId(id)
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleFavorites = async (id) => {
        const { data } = await userFavoritesAPI(id)
        dispatch(setFavoriteSongs(data))
    }
    const handlePlaylist = async (id) => {
        const { data } = await userPlaylistsAPI(id)
        dispatch(setPlaylist(data))
    }


    return (
        <SongCardBox flexDirection='column' width={["300px", "200px"]} m={[1, 3]} borderRadius={10}>
            <Box flexDirection='column' height={["300px", "200px"]} position='relative' >
                <Box position='absolute' inset='0' justifyContent='center' alignItems='center' width='100%' height='100%'>
                    <PlayPause song={song} i={i} />
                </Box>
                <Img src={`http://localhost:5000/${song?.img}`} borderRadius={10} alt='songphoto' objectFit='cover' />

            </Box>
            <Box justifyContent='space-between' mt={3} position='relative'>
                <Box flexDirection='column'>
                    <Link color={'black'} to={`/songDetails/${song?._id}`} py={1} fontWeight={'500'} fontSize={['1rem', '1.3rem']}>

                        {song?.title}</Link>
                    <Link color={'#909090'} to={'/artist'} fontWeight={'300'} py={2} fontSize={['14px', '1rem']}>

                        {song?.artist}</Link>
                </Box>

                <Box alignItems='center' justifyContent='start' position='relative'>
                    {favoriteSongs?.some((item) => item?._id === song?._id) ? <AiFillHeart size={30} color='#EF233C' onClick={() => handleFavorites(song?._id)} /> : <AiOutlineHeart size={30} onClick={() => handleFavorites(song?._id)} />}
                    <BsThreeDots size={30}
                        onClick={() => setIsClicked(!isClicked)} className='icon' />

                </Box>
                {isClicked && <MenuButton user={user} song={song} handleOpenModal={handleOpenModal} />}
            </Box>
            {isModalOpen && <Modal
                isOpen={isModalOpen}
                hasCloseBtn={true}
                onClose={handleCloseModal}
                id={id} />}
        </SongCardBox>
    )
}

export default SongCard
//src={`${import.meta.env.VITE_BASE_URL}/${song?.img}`}
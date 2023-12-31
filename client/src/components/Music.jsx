import React, { useState } from 'react'
import PlayPause from './PlayPause'
import { FaMinus } from 'react-icons/fa'
import { Box, Img, Span } from './Styles'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { setFavoriteSongs } from '../redux/features/user'
import MenuButton from './MenuButton'
import { userFavoritesAPI } from '../api/userApi'


const Music = ({ song, i }) => {
    const dispatch = useDispatch()
    const { token, user } = useSelector(state => state.user)
    const favoriteSongs = useSelector(state => state.user?.user?.likedSongs)
    const [id, setId] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false)
    const handleOpenModal = (id) => {
        setIsModalOpen(true);
        setId(id)
    }
    const handleFavorites = async (id) => {
        const { data } = await userFavoritesAPI(id)
        dispatch(setFavoriteSongs(data))
    }
    return (
        <Box my={2} bg={'#F2F5F5'} p={[0, 2]} justifyContent="space-between" alignItems="center">
            <Box justifyContent="space-evenly" alignItems="center" >
                <PlayPause song={song} i={i} />
                <Img width={'50px'} src={`${import.meta.env.VITE_BASE_URL}/${song?.img}`} alt='songphoto' borderRadius={10} display={['none', 'block']} />
                <Box flexDirection='column' ml={2} justifyContent='start' >
                    <Span fontSize={'1.1rem'} py={1} >{song?.title}</Span>
                    <Span fontWeight={'300'} fontSize='14px'>{song?.artist}</Span>
                </Box>
            </Box>
            <Box justifyContent="space-around" alignItems="center" display={['flex']}>
                {favoriteSongs?.some((item) => item?._id === song._id) ? <AiFillHeart size={30} color='#EF233C' onClick={() => handleFavorites(song?._id)} /> : <AiOutlineHeart size={30} onClick={() => handleFavorites(song?._id)} />}
                <BsThreeDots size={30}
                    onClick={() => setIsClicked(!isClicked)} className='icon' />
                {isClicked && <MenuButton i song={song} user={user} handleOpenModal={handleOpenModal} />}
            </Box>



        </Box>
    )
}




export default Music
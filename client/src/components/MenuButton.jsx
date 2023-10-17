import React from 'react'
import { Box, Button } from './Styles'
import { MdDeleteOutline, MdModeEditOutline } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const MenuButton = ({ user, song, handleOpenModal }) => {
    const navigate = useNavigate()
    return (

        <Box position='absolute' zIndex={10} flexDirection='column' top='75%' right={0} width='130px'
        >
            <Button p={2} mb={1} align-items='center' border='none' justify-content='start'><FaPlus className='icon' size={15} />add playlist</Button>
            {user?._id === song?.userCreated && <>
                <Button p={2} mb={1} align-items='center' border='none' justify-content='start' onClick={() => navigate(`/home/editSongs/${song?._id}`)}><MdModeEditOutline className='icon' size={15} /> Edit</Button>
                <Button p={2} mb={1} align-items='center' border='none' justify-content='start' onClick={() => handleOpenModal(song?._id)}><MdDeleteOutline size={15} className='icon' />Delete</Button></>
            }

        </Box>


    )
}

export default MenuButton
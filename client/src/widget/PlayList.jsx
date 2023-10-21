import React, { useEffect, useState } from 'react'
import Music from '../components/Music'
import axios from 'axios'
import { getPlayLists, setPlaylist } from '../redux/features/user'
import { useDispatch, useSelector } from 'react-redux'
import { AnimationBox, Box, Button, Heading, NavLinkButton } from '../components/Styles'

const PlayList = ({ songs }) => {


    return (
        <AnimationBox width='full'>
            <Box bg='transparent' p={1} width='full'>
                <Box flexDirection='column' bg='white' px={[2, 3]} py={3} width={['full']}>
                    <Box justifyContent='space-between' width={['full', '70%']}  >
                        <Heading fontSize='18px' color='#2B2D42'>New Played</Heading>
                        <Box justifyContent='space-between' display={['none', 'flex']} >
                            <Button px={3} py={1} mx={2} borderRadius={20} bg={'#F2F5F5'} border="1px solid #909090" justifyContent='center' alignItems='center'>Today</Button>
                            <Button px={3} py={1} mx={2} bg={'#F2F5F5'} borderRadius={20} border="1px solid #909090" justifyContent='center' alignItems='center'> week</Button>
                            <Button px={3} py={1} mx={2} bg={'#F2F5F5'} borderRadius={20} border="1px solid #909090" justifyContent='center' alignItems='center'> Month</Button>
                        </Box>
                    </Box>
                    <Box flexDirection={'column'} px={1} width='full'>
                        {songs.length > 0 && songs.length > 4 ? songs.slice(0, 4).map((song, i) => (<Music key={i} song={song} />)
                        ) : (
                            songs.map((song, i) => (<Music key={i} song={song} i={i} />))
                        )}
                        {songs.length > 0 && songs.length > 4 && <NavLinkButton to='/home/songs' width='300px' bg='transparent' >See More</NavLinkButton>
                        }
                    </Box>
                </Box>
            </Box>

        </AnimationBox>
    )
}

export default PlayList
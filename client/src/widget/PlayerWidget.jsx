import React from 'react'
import { AnimationBox, Box, Heading } from '../components/Styles'
import { BsSoundwave } from 'react-icons/bs'
import MusicPlayer from '../components/MusicPlayer'
import { AiFillPlayCircle } from 'react-icons/ai'

const PlayerWidget = () => {
    return (
        <AnimationBox width='full'>
            <Box display={['none', 'none', 'none', 'flex']} width='full' p={[0, 3]} bg='#E8ECEF' justifyContent='center' alignItems='center'>
                <Box flexDirection='column' width='full' py={3} >
                    <Box justifyContent='space-between' alignItems='center' display={['none', 'flex']}>
                        <Heading fontSize='18px' color='#2B2D42'>Player</Heading>
                        <BsSoundwave size={30} />
                    </Box>
                    <MusicPlayer />
                </Box>
            </Box>

        </AnimationBox>
    )
}

export default PlayerWidget
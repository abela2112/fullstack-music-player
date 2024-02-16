import React from 'react'
import { Box, Img, Typography } from './Styles'
import { discoverBackground } from '../assets'

const ArtistsCard = ({ artist }) => {
    return (
        <Box justifyContent='' alignItems='center' mb={2} >
            <Box width='60px' height='60px' mr={2}>
                <Img src={discoverBackground} width={'full'} height={'full'} borderRadius="50%" />
            </Box>
            <Typography>{artist?.name} Artist Name</Typography>

        </Box>
    )
}

export default ArtistsCard
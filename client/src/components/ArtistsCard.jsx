import React from 'react'
import { Box, Img, Typography } from './Styles'

const ArtistsCard = ({ artist }) => {
    return (
        <Box justifyContent='center' alignItems='center' >
            <Box width='200px' height='200px'>
                <Img src={``} width={'full'} height={'full'} />
            </Box>
            <Typography>{artist?.name}</Typography>
        </Box>
    )
}

export default ArtistsCard
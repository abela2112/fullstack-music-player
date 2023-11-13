import React from 'react'
import { Box, Img } from './Styles'
import styled from '@emotion/styled'
const ArtistName = styled.span`
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
`
const ArtistCard = ({ artist }) => {
    return (
        <Box margin='0 1rem' display='flex' flexDirection='column' alignItems='center'>
            <Img width={'100px'} height={'100px'} borderRadius={'50%'} src={artist?.img} />
            <ArtistName>{artist?.name ? artist.name : artist?.title}</ArtistName>

        </Box>)
}

export default ArtistCard
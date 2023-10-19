import React from 'react'
import { Box, FlexNavLink } from '../components/Styles'

const VerifyEmail = () => {
    return (
        <Box width='full' minHeight='screen' justifyContent='center' alignItems='center'>
            <FlexNavLink to={'/https://mail.google.com'} >Verify Email</FlexNavLink>
        </Box>
    )
}

export default VerifyEmail
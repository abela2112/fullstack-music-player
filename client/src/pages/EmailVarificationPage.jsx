import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { verifyEmail } from '../api/userApi'
import { Box, FlexNavLink, Typography } from '../components/Styles'
import Loader from '../components/Loader'

const EmailVarificationPage = () => {
    const { userId, token } = useParams()
    console.log(userId, token)
    const [isVerified, setIsVerified] = useState(false)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        verifyEmail(userId, token).then((data) => {
            console.log(data)
            setIsVerified(true)
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
            setError(true)
            setIsLoading(false)
        }
        )
    }, [])
    if (isLoading) return <Loader />
    return (
        <>
            {isVerified &&
                <Box width='full' minHeight='screen' justifyContent='center' alignItems='center'>
                <Typography>verified successfully</Typography>
                <FlexNavLink to='/'>login</FlexNavLink>
            </Box>}
            {
                error && <p>{error}</p>
            }
        </>
    )
}

export default EmailVarificationPage
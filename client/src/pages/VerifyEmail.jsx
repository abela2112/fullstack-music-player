import React, { useState } from 'react'
import { Box, Button, FlexNavLink, Form, Heading, Input, Label, P } from '../components/Styles'
import { verifyEmail } from '../api/userApi'
import { useNavigate } from 'react-router-dom'

const VerifyEmail = () => {
    const navigate = useNavigate()
    const [isVerified, setIsVerified] = useState(false)
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [verificationCode, setVerificationCode] = useState('')
    const handleVerify = async (e) => {
        e.preventDefal
        verifyEmail(email, verificationCode).then(({ data }) => {
            setIsVerified(true)
            navigate('/')
        }).catch(err => {
            setError(err.response?.data?.msg)
            console.log(err)
        })


    }
    return (
        <Box width='full' minHeight='screen' justifyContent='center' alignItems='center' >
            <Form onSubmit={handleVerify} flexDirection='column'>
                <Heading>Verify your Email</Heading>
                <p>check your email for verification code</p>
                <Box>
                    <Label>Email</Label>
                    <Input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Box>
                <Box>
                    <Label>Verification code</Label>
                    <Input type='text' placeholder='verification code here' value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                </Box>
                <Button>Verify</Button>
            </Form>
            {isVerified && <p>verified</p>}
            {error && <p className='error'>{error}</p>}
        </Box>
    )
}

export default VerifyEmail
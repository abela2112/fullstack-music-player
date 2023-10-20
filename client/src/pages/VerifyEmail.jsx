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
        e.preventDefault();
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
                <Box flexDirection="column" width={['340px', '600px']}>
                    <Label htmlFor="email" py={2}>
                        Email
                    </Label>
                    <Input
                        type="email"
                        placeholder="yourEmail.com"
                        px={3}
                        py={3}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>


                <Box flexDirection="column">
                    <Label htmlFor="title" py={2} >
                        Verification code
                    </Label>
                    <Input
                        type="text"
                        placeholder='verification code here'
                        px={3}
                        py={3}
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                    />
                </Box>
                <Button
                    px={5}
                    type="submit"
                    py={3}
                    width={["73%", "full"]}
                    borderRadius={100}
                    alignItems="center"
                    justifyContent="center"
                    fontSize={["1.2rem", "1.4rem"]}
                    border="none"
                    outline="none"
                    bg="#EF233C"
                    color="white"
                >
                    verify
                </Button>

            </Form>
            {isVerified && <p>verified</p>}
            {error && <p className='error'>{error}</p>}
        </Box>
    )
}

export default VerifyEmail
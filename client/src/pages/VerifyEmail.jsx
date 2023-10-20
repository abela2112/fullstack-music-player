import React, { useState } from 'react'
import { Box, Button, FlexNavLink, Form, Heading, Input, Label, P } from '../components/Styles'
import { verifyEmail } from '../api/userApi'
import { useNavigate } from 'react-router-dom'
import { MdOutlineVerifiedUser } from 'react-icons/md'

const VerifyEmail = () => {
    const navigate = useNavigate()
    const [isVerified, setIsVerified] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [verificationCode, setVerificationCode] = useState('')
    const handleVerify = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        verifyEmail(email, verificationCode).then(({ data }) => {
            setIsVerified(true)
            setIsLoading(false)
        }).catch(err => {
            setError(err.response?.data?.msg)
            setIsLoading(false)
            console.log(err)
        })


    }
    if (isVerified) return (<Box width='full' minHeight='screen' justifyContent='center' alignItems='center' >
        <Box justifyContent='center'>
            <Box flexDirection='column' justifyContent='center' alignItems='center' gap={1}>
                <MdOutlineVerifiedUser size={100} />
                <Heading>Verified</Heading>
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

                    onClick={() => navigate('/')}
                >
                    Login
                </Button>
            </Box>

        </Box>
    </Box>)
    return (
        <Box width='full' minHeight='screen' justifyContent='center' alignItems='center' flexDirection='column' >
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
                <Box mt={3} alignItems="center" justifyContent='center'>
                <Button
                    px={5}
                    type="submit"
                    py={3}
                        width={['80%', "90%"]}
                    borderRadius={100}
                    alignItems="center"
                    justifyContent="center"
                    fontSize={["1.2rem", "1.4rem"]}
                    border="none"
                    outline="none"
                    bg="#EF233C"
                    color="white"
                        disabled={isLoading}
                        className={isLoading ? "loading" : ""}
                >
                    verify
                </Button>

                </Box>
            </Form>

            {error && <p className='error'>{error}</p>}
        </Box>
    )
}

export default VerifyEmail
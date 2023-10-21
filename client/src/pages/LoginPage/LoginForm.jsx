import React, { useEffect, useState } from 'react'
import { Box, Button, Form, Heading, Input, Label, P } from '../../components/Styles'

import { Link, useNavigate } from 'react-router-dom';
import { setError, setUserLogin } from '../../redux/features/user';
import { useDispatch, useSelector } from 'react-redux';


const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { errorMessage, successMessage, isLoading } = useSelector((state) => state.user)
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            dispatch(setUserLogin({ email, password }))
            navigate('/home')
            console.log('login here')

        } catch (error) {
            console.log(error)
            dispatch(setError(error.message))
        }
    }

    useEffect(() => {
        if (errorMessage) {
            setTimeout(() => {
                dispatch(setError(''))
            }, 5000);
        }
    }, [errorMessage])
    return (
        <Form width={['340px', '80%', '70%']}
            height={['full', "auto"]}
            alignItems='center'
            justifyContent='center'
            onSubmit={handleLogin}>
            <Heading textAlign='center' fontFamily='Poppins,open-sans' fontWeight='400' fontSize='40px'> Login to your account</Heading>

            <Box flexDirection="column" >
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
                <Label htmlFor="title" py={2}>
                    password
                </Label>
                <Input
                    type="password"
                    placeholder="password"
                    autoComplete='none'
                    px={3}
                    py={3}
                    borderRadius={5}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>

            <P onClick={() => navigate('/forgot')}>Forgot password</P>

            <Box justifyContent='center' alignItems='center' marginTop={2}>
                <Button
                    px={5}
                    type="submit"
                    py={3}
                    width={["full"]}
                    borderRadius={12}
                    alignItems="center"
                    justifyContent="center"
                    fontSize={["1.2rem", "1.4rem"]}
                    border="none"
                    outline="none"
                    bg="#EF233C"
                    color="white"
                    disabled={isLoading}
                    className={isLoading ? "loading" : ''}
                >
                    Login
                </Button>
            </Box>

            <hr style={{ border: '1px solid #909090' }} />
            <P
                fontSize={"1.1rem"}
                py={"0.5rem"}
                textAlign="center"
                textDecoration='underline'
                style={{ hover: { Animation: 'slideUp 1s ease-in-out' } }}

            >

                Don't have an account <Link style={{ color: '#EF233C' }} to={'/register'}>Register Here</Link>

            </P>
            {
                errorMessage && <p className='error'>{errorMessage}</p>
            }

        </Form>
    )
}

export default LoginForm
import React, { useEffect, useState } from 'react'
import { ActionButton, Box, Button, Form, Heading, Input, Label, P } from '../../components/Styles'

import { Link, useNavigate } from 'react-router-dom';
import { setError, setUserLogin } from '../../redux/features/user';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithGoogle } from '../../firebase';

import { FcGoogle } from "react-icons/fc";
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
    return (<>
        <Form width={['full', '600px']}
            height={['full', "auto"]}
            alignItems='center'
            bg="#fff"
            p={["20px", "50px"]}
            borderRadius={12}
            box-shadow="0px 0px 10px rgba(0,0,0,0.1)"
            justifyContent='center'
            onSubmit={handleLogin}>
            <Heading textAlign='center' fontFamily='Poppins,open-sans' fontWeight='400' fontSize='40px'> Login to your account</Heading>

            <Box flexDirection="column" width="full" >
                <Label htmlFor="email" py={2}>
                    Email
                </Label>
                <Input
                    id='email'
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Box>
            <Box flexDirection="column" width="full">
                <Label htmlFor="password" py={2}>
                    password
                </Label>
                <Input
                    id='password'
                    type="password"
                    placeholder="password"
                    autoComplete='none'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>

            <Box justifyContent="flex-end" width="full">
                <P onClick={() => navigate('/forgot')}>Forgot password</P>
            </Box>


            <ActionButton
                type="submit"
                bg="#1A237E"
                    color="white"
                    disabled={isLoading}
                    className={isLoading ? "loading" : ''}
                >
                    Login
            </ActionButton>


            <hr style={{ border: '1px solid #909090' }} />
            <Button type='button' onClick={signInWithGoogle}

                bg="#E0E0E0"
                color="white"

            ><FcGoogle style={{ marginRight: 5 }} /></Button>
            <P
                fontSize={"1.1rem"}
                py={"0.5rem"}
                textAlign="center"
                textDecoration='underline'
                // style={{ hover: { Animation: 'slideUp 1s ease-in-out' } }}

            >

                Don't have an account <Link style={{ color: '#EF233C' }} to={'/register'}>Register Here</Link>

            </P>
            {
                errorMessage && <p className='error'>{errorMessage}</p>
            }
        </Form>

        <hr />
    </>


    )
}

export default LoginForm
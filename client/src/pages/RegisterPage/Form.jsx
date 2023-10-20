import React, { useEffect, useState } from 'react'
import { Box, Button, Form, Heading, Input, Label, P } from '../../components/Styles'

import { Link, useNavigate } from 'react-router-dom';
import { registerUser, setUserLogin } from '../../redux/features/user';
import { useDispatch, useSelector } from 'react-redux';
import { createUserAPI } from '../../api/userApi';

const FormPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [error, setError] = useState('')

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [picture, setPicture] = useState("");

    const { isLoading } = useSelector((state) => state.user)

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    }, [error])

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.set("name", name);
            formData.set("password", password);
            formData.set("email", email);
            formData.set("picture", picture[0]);
            if (password !== confirmPassword) {
                throw new Error("password doesn't match");
            }
            const data = await createUserAPI(formData)
            console.log(data);
            navigate('/verifyEmail')
        } catch (error) {
            if (error?.response?.data?.msg) { setError(error?.response?.data?.msg) }
            else { setError(error.message) }
        }
    };


    return (
        <Form width={['full', "600px"]}
            height={['full', "auto"]}
            alignItems='center'
            justifyContent='center'
            onSubmit={handleRegister}>
            <Heading textAlign='center' fontFamily='Abel,open-sans'>Create new Account</Heading>
                <Box flexDirection="column">
                    <Label htmlFor="title" py={2} >
                        Full Name
                    </Label>
                    <Input
                        type="text"
                        placeholder="name"
                        px={3}
                    py={[1, 3]}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Box>

            <Box flexDirection="column" width={['340px', 'full', '600px']}>
                <Label htmlFor="email" py={2}>
                    Email
                </Label>
                <Input
                    type="email"
                    placeholder="yourEmail.com"
                    px={3}
                    py={[1, 3]}
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
                    py={[1, 3]}
                    borderRadius={5}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>

                    <Box flexDirection="column" >
                        <Label htmlFor="title" py={2}>
                            confirm password
                        </Label>
                        <Input
                            type="password"
                            placeholder="confirm password"
                            autoComplete="new-password"
                            px={3}
                    py={[1, 3]}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Box>
                    <Box flexDirection="column">
                        <Label htmlFor="profile" py={2}>
                            profile photo
                        </Label>
                        <Input
                            type="file"
                            px={3}
                    py={[1, 2]}
                            onChange={(e) => setPicture(e.target.files)}
                        />
            </Box>

            <Box justifyContent='center' marginTop={2}>
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
                    disabled={isLoading}
                    className={isLoading ? "loading" : ''}

                >
                    Register
                </Button>
            </Box>
            <P
                fontSize={"1.1rem"}
                py={"0.5rem"}
                textAlign="center"
                textDecoration='underline'
                style={{ hover: { Animation: 'slideUp 1s ease-in-out' } }}

            >

                have an account <Link to={'/'}>Login here</Link>

            </P>
            {
                error && <p className='error'>{error}</p>
            }

        </Form>
    )
}

export default FormPage
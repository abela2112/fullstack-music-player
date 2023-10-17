import React, { useState } from 'react'
import { Box, Button, FlexNavLink, Form, Heading, Input, Label, P } from '../../components/Styles'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, setUserLogin } from '../../redux/features/user';
import { useDispatch } from 'react-redux';

const FormPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [pageType, setPageType] = useState("login");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profileImage, setProfileImage] = useState("");



    const handleRegister = async (e) => {

        const formData = new FormData();
        formData.set("name", name);
        formData.set("password", password);
        formData.set("email", email);
        formData.set("profileImage", profileImage[0]);
        if (password !== confirmPassword) {
            throw new Error("password doesn't match");
        }
        // const { data } = await axios.post(
        //     "http://localhost:5000/api/user/signup",
        //     formData,
        //     {
        //         headers: { "Content-Type": "multipart/form-data" },
        //     }
        // );
        console.log(formData)
        dispatch(registerUser(formData))
        setPageType('login')
    };

    const handleLogin = async (e) => {

        try {

            dispatch(setUserLogin({ email, password }))
            navigate('/home')
            console.log('login here')

        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            await handleLogin()
        }
        if (isRegister) {
            await handleRegister()
        }
    }
    return (
        <Form width={['full', "600px"]}
            height={['full', "auto"]}
            alignItems='center'
            justifyContent='center'
            onSubmit={handleSubmit}>
            <Heading textAlign='center' fontFamily='Abel,open-sans'>{isLogin ? "Login" : "Register"}</Heading>
            {isRegister && (
                <Box flexDirection="column">
                    <Label htmlFor="title" py={2} >
                        Full Name
                    </Label>
                    <Input
                        type="text"
                        placeholder="name"
                        px={3}
                        py={3}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Box>
            )}
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
                <Label htmlFor="title" py={2}>
                    password
                </Label>
                <Input
                    type="password"
                    placeholder="password"
                    px={3}
                    py={3}
                    borderRadius={5}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>
            {isRegister && (
                <>

                    <Box flexDirection="column" >
                        <Label htmlFor="title" py={2}>
                            confirm password
                        </Label>
                        <Input
                            type="password"
                            placeholder="confirm password"
                            autoComplete="new-password"
                            px={3}
                            py={3}
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
                            py={2}
                            onChange={(e) => setProfileImage(e.target.files)}
                        />
                    </Box>
                </>
            )}
            {isLogin && <P onClick={() => navigate('/forgot')}>Forgot password</P>}

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


                >
                    {isLogin ? "Login" : "Register"}
                </Button>
            </Box>
            <P
                fontSize={"1.1rem"}
                py={"0.5rem"}
                textAlign="center"
                textDecoration='underline'
                style={{ hover: { Animation: 'slideUp 1s ease-in-out' } }}
                onClick={() => setPageType(isLogin ? "register" : "login")}
            >

                {isLogin ? "Don't have an account Register Here" : "have an account Login here"
                }
            </P>


        </Form>
    )
}

export default FormPage
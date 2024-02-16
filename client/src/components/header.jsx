import React, { useState } from "react";
import SearchBar from "./searchBar";
import { BsBellFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ActionButton, Box, Button, FlexNavLink, Img, OutlineButton, Typography } from "./Styles";
import { AiOutlineArrowRight, AiOutlineBars, AiOutlineBell } from "react-icons/ai";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import styled from "@emotion/styled";
import LoginPage from "../pages/LoginPage";
const Logo = styled.span`
   font-weight :600 ;
   font-size: 34px;
   color: gray;
`

const Header = ({ close, setClose, setIsOpen, isOpen }) => {
    const { user } = useSelector((state) => state.user);
    // const [loginModalOpen, setLoginModalOpen] = useState(false)
    const [registerModalOpen, setRegisterModalOpen] = useState(false)
    const navigate = useNavigate()
    return (<>
        <Box width={['100%', '100%', '90%', `calc(100% - ${close ? "88px" : "250px"})`]}
            position='fixed'
            left={[`${close ? "88px" : '0px'}`, `${close ? "88px" : '0px'}`, `${close ? "88px" : '0px'}`, `${close ? "88px" : "250px"}`]}
            top={'0px'}
            right="0px"
            height={'72px'}
            px={15}
            zIndex={10}
            style={{ backdropFilter: 'blur(4px)' }}
        >
            <Box width="full"
                alignItems='center'
                justifyContent='space-between'
            >
            <Box display='flex'
                alignItems='center'

            >
                    {/* <Box padding='0.5rem' borderRadius='5px' >
                        <AiOutlineArrowLeft onClick={() => navigate(-1)} className="icon" color="black" />

                </Box>
                <Box padding='0.5rem' borderRadius='5px' ml='5px' >
                        <AiOutlineArrowRight onClick={() => navigate(1)} className="icon" color="gray" />

                </Box> */}
                    <SearchBar />


            </Box>
                {user ?
                    <Box>
                        <Link
                    style={{
                                width: "50px",
                                height: "50px",
                                // bg: "black",
                                borderRadius: "50%",
                                marginRight: "10px",
                    }}
                            to={"/profile"}
                        >
                            <Img src={user?.picture} width={"100%"} height={"100%"} borderRadius='50%' />
                        </Link>

                        <Box flexDirection="column">
                            <Typography>{user?.name}</Typography>
                            <select>
                                <option>English</option>
                                <option>French</option>
                                <option>Spanish</option>
                            </select>

                        </Box>
                    </Box>

                    :
                    <Box justifyContent="space-around">
                        <ActionButton
                            bg={'primaryColor'}
                            mr={2}
                            onClick={() => {
                                console.log('login button clicked')
                                setIsOpen(true)
                            }}
                        >Login</ActionButton>
                        <OutlineButton
                            outline="primaryColor" >Register</OutlineButton>
                    </Box>}





            </Box>
        </Box>

    </>
    );
};

export default Header;

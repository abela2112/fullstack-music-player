import React, { useState } from "react";
import SearchBar from "./searchBar";
import { BsBellFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, FlexNavLink, Img } from "./Styles";
import { AiOutlineArrowRight, AiOutlineBars, AiOutlineBell } from "react-icons/ai";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import styled from "@emotion/styled";
const Logo = styled.span`
   font-weight :600 ;
   font-size: 34px;
   color: gray;
`

const Header = () => {
    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate()
    return (
        <Box width={['100%', '100%', '100%', 'calc(100vw - 320px)']} maxWidth='100vw' alignItems='center' position='fixed' bg='#F2F5F5' left={['0px', '0px', '0px', '320px']} top={'0px'} justifyContent='space-between' height={'72px'} zIndex={10} px={10}>
            <Box display='flex'
                alignItems='center'

            >
                <Box padding='0.5rem' borderRadius='5px' >
                    <AiOutlineArrowLeft onClick={() => navigate(-1)} size={30} color="black" />

                </Box>
                <Box padding='0.5rem' borderRadius='5px' ml='5px' >
                    <AiOutlineArrowRight onClick={() => navigate(1)} size={30} color="gray" />

                </Box>
                <SearchBar />

            </Box>
            <Link
                    style={{
                        width: "60px",
                        height: "60px",
                        bg: "black",
                        borderRadius: "5px",
                    }}
                    to={"/home/profile"}
                >
                    <Box p='1px' borderRadius='50%' mr={2}>
                        <Img
                            width={"full"}
                            height={"full"}
                            borderRadius={'50%'}
                            border={'2px dotted red'}
                            p={2}
                            src={`${import.meta.env.VITE_BASE_URL}/${user?.picture}`}
                            alt="profile"
                        />
                    </Box>
                </Link>




        </Box>
    );
};

export default Header;

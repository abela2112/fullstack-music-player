import styled from "@emotion/styled";
import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsSoundwave } from "react-icons/bs";
import { GiCancel } from 'react-icons/gi';
import HorizontalMenu from "../components/HorizontalMenu";
import MusicPlayer from "../components/MusicPlayer";
import { Box, Heading } from "../components/Styles";
import Header from "../components/header";
import Sidebar from "./sidebar";
import { color } from "styled-system";
const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    position:relative;
    ${color}
`


const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [close, setClose] = useState(false)
    return (
        <Box width="full" height="screen" bg="bodyColor">
            <Sidebar close={close} setClose={setClose} />
                <Box
                width="100%"
                    flex={4}
                position="relative"  
                    flexDirection='column'
                min-height={['full', '100vh']}
                overflowY="auto"
                    overflowX='hidden'
                >
                <Header close={close} setClose={setClose} />
                    <HorizontalMenu />

                <Box width={"full"} height='full' mt={'72px'}>



                    </Box>
                    <Box width='full' display={['flex', 'flex', 'flex', 'none']} position='absolute' top="100%" bottom={0} left={0}>
                        {
                            isOpen ? <GiCancel size={30} onClick={() => setIsOpen(!isOpen)} /> : <AiFillPlayCircle size={40} onClick={() => setIsOpen(!isOpen)} />

                        }

                        {
                            isOpen && (
                                <Box width='full' mx={[0, 3]} p={[0, 3]} bg='#E8ECEF' justifyContent='center' alignItems='center'>
                                    <Box flexDirection='column' width='full' py={3} >
                                        <Box justifyContent='space-between' alignItems='center' display={['none', 'flex']}>
                                            <Heading fontSize='18px' color='#2B2D42'>Player</Heading>
                                            <BsSoundwave size={30} />
                                        </Box>
                                        <MusicPlayer />
                                    </Box>
                                </Box>

                            )
                        }
                    </Box>
                </Box>
        </Box>

    );
};

export default HomePage;

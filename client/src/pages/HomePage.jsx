import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DiscoverPage from "./DiscoverPage";
import SongCreatePage from "./SongCreatePage";
import FavoriteSongs from "./FavoriteSongs";
import ProfilePage from "./ProfilePage";
import { useSelector } from "react-redux";
import { Box, FlexNavLink, GridContainer, Heading, NavLinkButton } from "../components/Styles";
import Sidebar from "./sidebar";
import Header from "../components/header";
import MySongs from "./mySongs";
import SongDetailes from "./SongDetailes";
import SongsPage from "./SongsPage";
import EditSongs from "./EditSongs";
import SearchPage from "./SearchPage";
import HorizontalMenu from "../components/HorizontalMenu";
import Recents from "./Recents ";
import styled from "@emotion/styled";
import { AiFillPlayCircle } from "react-icons/ai";
import PlayerWidget from "../widget/PlayerWidget";
import { BsSoundwave } from "react-icons/bs";
import MusicPlayer from "../components/MusicPlayer";
import { GiCancel } from 'react-icons/gi'
const Container = styled.div`
    display: flex;
    height: 100%;
    position:relative;
    background-color: #F2F5F5;


`
const MainBox = styled.div`
flex: 4;
margin-left:320px;
flex-direction: column;
height: calc(100vh -72px);
overflow-y: hidden; 


                    
`

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Container>
                <Sidebar />
                <Box
                    flex={4}
                    marginLeft={['0px', '0px', '0px', '320px']}
                    flexDirection='column'
                    height={['full', 'calc(100vh)']}
                    overflowX='hidden'
                >
                    <Header />
                    <HorizontalMenu />

                    <Box width={"full"} height='full' mt={'72px'}>
                        <Box p={2} width={"full"} position='relative'>
                            <Routes>
                                <Route path="/" element={<Navigate to={'/home/explore'} replace />} />
                                <Route path="/explore" element={<DiscoverPage />} />
                                <Route path='/add songs' element={<SongCreatePage />} />
                                <Route path="/favorite songs" element={<FavoriteSongs />} />
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="/mysongs" element={<MySongs />} />
                                <Route path="/Albums" element={<ProfilePage />} />
                                <Route path="/create playlist" element={<ProfilePage />} />
                                <Route path="/artist" element={<ProfilePage />} />
                                <Route path="/recents" element={<Recents />} />
                                <Route path="/best of 2023" element={<ProfilePage />} />
                                <Route path="/songs" element={<SongsPage />} />
                                <Route path="/search/:searchTerm" element={<SearchPage />} />

                                <Route path="/songDetails/:songId" element={< SongDetailes />} />
                                <Route path="/editSongs/:songId" element={< EditSongs />} />


                            </Routes>

                        </Box>



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
            </Container>
            {/* {activeSong?.title && (
                <MusicBox
                    position="absolute"
                    height={"100px"}
                    left={0}
                    right={0}
                    zIndex={10}
                    bg={"black"}
                    px={["2px", "5px", "10px"]}
                >
                    <MusicPlayer />
                </MusicBox>
            )} */}
        </>
    );
};

export default HomePage;

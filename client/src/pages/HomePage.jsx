import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DiscoverPage from "./DiscoverPage";
import SongCreatePage from "./SongCreatePage";
import FavoriteSongs from "./FavoriteSongs";
import ProfilePage from "./ProfilePage";
import MusicPlayer from "../components/MusicPlayer";
import { useSelector } from "react-redux";
import { Box, FlexNavLink, NavLinkButton } from "../components/Styles";
import Sidebar from "./sidebar";
import Header from "../components/header";
import MySongs from "./mySongs";
import SongDetailes from "./SongDetailes";
import SongsPage from "./SongsPage";
import EditSongs from "./EditSongs";
import SearchPage from "./SearchPage";
import HorizontalMenu from "../components/HorizontalMenu";


const HomePage = () => {
    const { activeSong } = useSelector((state) => state.player);
    return (
        <>
            <Box
                width={"full"}
                flexDirection={"row"}
                Height='full'
                bg={"#E2E2E2"}
                overflow='hidden'
            >
                <Sidebar />
                <Box
                    flexDirection={"column"}
                    width={"full"}
                    height={"calc(100vh-72px)"}

                >
                    <Header />
                    <HorizontalMenu />

                    <Box width={"full"} height='full' mt={1}>

                        <Box p={2} width={"full"} overflowY='auto'>

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
                                <Route path="/recents" element={<ProfilePage />} />
                                <Route path="/best of 2023" element={<ProfilePage />} />
                                <Route path="/songs" element={<SongsPage />} />
                                <Route path="/search/:searchTerm" element={<SearchPage />} />

                                <Route path="/songDetails/:songId" element={< SongDetailes />} />
                                <Route path="/editSongs/:songId" element={< EditSongs />} />


                            </Routes>
                        </Box>
                    </Box>
                </Box>
            </Box>
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

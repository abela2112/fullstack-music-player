import React, { useEffect, useState } from "react";

import { AiOutlineGlobal, AiOutlineFire } from "react-icons/ai";

import { RiHomeHeartLine, RiUserStarLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidPlaylist } from 'react-icons/bi'
import { setUserLogOut } from "../redux/features/user";
import { Box, Button, FlexNavLink, Heading, Img, Span, Typography } from "../components/Styles";
import { useLocation, useNavigate } from "react-router-dom";
import { logo } from "../assets";

const navItems = [
    {
        text: 'MENU',
        icon: null

    },
    {
        text: 'Explore',
        icon: <AiOutlineGlobal size={30} className="icon" />

    },
    {
        text: 'Favorite songs',
        icon: <RiUserStarLine size={30} className="icon" />
    }, {
        text: 'Add Songs',
        icon: <FaPlus size={30} className="icon" />
    },
    {
        text: 'LIBRARY',
        icon: null
    },
    {
        text: 'Recents',
        icon: <AiOutlineGlobal size={30} className="icon" />
    }, {
        text: 'Albums',
        icon: <AiOutlineFire size={30} className="icon" />
    }, {
        text: 'Mysongs',
        icon: < RiHomeHeartLine size={30} className="icon" />
    }, {
        text: 'PLAYLIST',
        icon: null
    }, {
        text: 'Best of 2023',
        icon: < RiHomeHeartLine size={30} className="icon" />

    }
    , {
        text: 'create playlist',
        icon: < RiHomeHeartLine size={30} className="icon" />
    }

]



const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { user, token, playList } = useSelector((state) => state.user);



    return (
        <Box
            display={["none", "none", "none", "flex"]}
            color={"#fff"}
            bg={"#E8ECEF"}
            flexDirection={"column"}
            borderRadius={5}
            p={4}
            minHeight={"screen"}
            justifyContent='flex-start'
            width={"400px"}
            overflow='hidden'
        >
            <Box
                color="white"
                flexDirection={"column"}
                px={2}
                py={2}
                borderRadius={5}

            >
                <Img src={logo} width='full' />
                <Box flexDirection={"column"} >
                    {
                        navItems.map(({ text, icon }) => {
                            if (!icon) return (<Typography key={text} textAlign='start' color="#909090" fontFamily='Nunito' fontSize='1.5rem' fontWeight='400'>{text}</Typography>)
                            else {
                                let lcText = text.toLowerCase()

                                return (
                                    <FlexNavLink className={({ isActive }) => isActive ? 'active' : ''} key={text} to={`/home/${lcText}`}  >
                                        {icon}
                                        <Typography
                                            fontSize="1.2rem">{text}
                                        </Typography>
                                    </FlexNavLink>
                                )
                            }
                        })
                    }

                </Box>
            </Box>

            <Box width='full' justifyContent='center'>
                <Button
                    py={3}
                    borderRadius={10}
                    width={"300px"}
                    justifyContent='center'
                    fontSize='1.5rem'
                    border='none'
                    bg='#EF233C'
                    color="#fff"
                    onClick={() => {
                        dispatch(setUserLogOut());
                        window.localStorage.setItem("token", "");
                        window.localStorage.setItem("user", null);
                        navigate("/")
                    }}
                >
                    Logout
                </Button>

            </Box>
        </Box>
    );
};

export default Sidebar;

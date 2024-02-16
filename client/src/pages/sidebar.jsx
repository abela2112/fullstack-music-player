import React, { useState } from "react";

import { AiOutlineFire, AiOutlineGlobal } from "react-icons/ai";

import styled from "@emotion/styled";
import { BiChevronRight, BiLogOut, BiSun } from 'react-icons/bi';
import { FaPlus } from "react-icons/fa";
import { RiHomeHeartLine, RiUserStarLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { color } from "styled-system";
import { logo } from "../assets";
import { Box, FlexNavLink, Img, List, SideBarContainer, Typography } from "../components/Styles";
import SearchBar from "../components/searchBar";
import { MdDarkMode } from "react-icons/md";
import { setTheme, setUserLogOut } from "../redux/features/user";
const Logo = styled.span`
   font-weight :600 ;
   font-size: 18px;
   ${color}
   /* color: darkblue; */
  `
const ToggleButton = styled.div`
    position: absolute;
    top:50%;
    right: -25px;
    transform: translateY(-50%);
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 22px;
    cursor: pointer;
    ${color}
  `
const navItems = [

    {
        text: 'Explore',
        icon: <AiOutlineGlobal className="icon" />

    },
    {
        text: 'Favorite songs',
        icon: <RiUserStarLine className="icon" />
    }, {
        text: 'Add Songs',
        icon: <FaPlus className="icon" />
    },

    {
        text: 'Albums',
        icon: <AiOutlineFire className="icon" />
    }, {
        text: 'Mysongs',
        icon: < RiHomeHeartLine className="icon" />
    },
    {
        text: 'Best of 2023',
        icon: < RiHomeHeartLine className="icon" />

    }
    , {
        text: 'create playlist',
        icon: < RiHomeHeartLine className="icon" />
    }

]

const ToggleSwich = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
right: 0;
min-width: 60px;
cursor: pointer;
border-radius: 6px;
height: 100%;
${color}
`
const Switch = styled.span`
${color}
position: relative;
width: 44px;
height: 22px;

border-radius: 25px;


&::before{
content: '';
position: absolute;
transition: all 0.3s ease;
top:50%;
left: ${props => props.left};
transform: translateY(-50%);

background-color: ${({ theme }) => theme.colors.sideBarColor};
border-radius: 50%;
width: 15px;
height: 15px;
cursor: pointer;
}
`

const Sidebar = ({ close, setClose }) => {
    const dispatch = useDispatch();
    const [left, setLeft] = useState('5px')


    const { user, theme, token, playList } = useSelector((state) => state.user);



    return (
        <SideBarContainer
            display={["none", "none", "none", "flex"]}
            position='fixed'
            top={0}
            bottom={0}
            color={"textColor"}
            bg={"sideBarColor"}
            flexDirection={"column"}
            borderRadius={5}
            padding="10px 14px"
            height={'full'}
            justifyContent='flex-start'
            close={close}
            zIndex={20}
        >
            <Box
                flexDirection={"column"}
            >
                <Box position="relative">
                    <Img src={logo} width={"40px"} />
                    <Box> <Typography close={close} color="primaryColor">DROP</Typography>
                        <Typography close={close} color="primaryColor">Music </Typography>
                    </Box>
                    <ToggleButton bg="primaryColor"
                        color="sideBarColor"
                        onClick={() => setClose(!close)} >
                        <BiChevronRight />
                    </ToggleButton>
                </Box>
                <Box flexDirection={"column"}
                    justifyContent="space-between"
                    height="calc(100% - 50px)" >
                    <>
                        <SearchBar />
                    {
                        navItems.map(({ text, icon }) => {

                                let lcText = text.toLowerCase()

                                return (

                                    <FlexNavLink key={text} to={`/${lcText}`}  >
                                        {icon}
                                        <Typography close={close}
                                            fontSize="16px">{text}
                                        </Typography>
                                    </FlexNavLink>
                                )

                        })
                    }
                    </>
                    <>

                        {user && <List
                            onClick={() => {
                                dispatch(setUserLogOut());
                                window.localStorage.setItem("token", "");
                                window.localStorage.setItem("user", null);

                            }}
                            className="cursor-pointer"
                        >
                            <BiLogOut className="icon" />
                            <Typography close={close}
                                fontSize="16px">
                                Logout
                            </Typography>
                        </List>}
                        <List bg="primaryLight">
                            <Box
                                width="60px"
                                height="50px"
                                alignItems="center"

                            >
                                <MdDarkMode className="icon absolute" />
                                <BiSun className="icon absolute" style={{ opacity: 0 }} />
                            </Box>
                            <Typography close={close} fontSize="16px">Dark mode</Typography>
                            <ToggleSwich
                                bg={"primaryLight"}
                                onClick={() => {
                                    setLeft(left === "5px" ? "24px" : "5px")
                                    dispatch(setTheme())
                                }} >
                                <Switch left={left} bg="toggleColor"></Switch>
                            </ToggleSwich>
                        </List>
                    </>



                </Box>
            </Box>
            {/* <Box width='full' justifyContent='center'>
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

            </Box>*/}
        </SideBarContainer>
    );
};

export default Sidebar;

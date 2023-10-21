import React, { useState } from "react";
import SearchBar from "./searchBar";
import { BsBellFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Button, FlexNavLink, Img } from "./Styles";
import { AiOutlineBars, AiOutlineBell } from "react-icons/ai";

const Header = () => {
    const { user } = useSelector((state) => state.user);
    return (
        <Box width='full' alignItems='center' justifyContent='space-between' my={2}>
            <SearchBar />
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

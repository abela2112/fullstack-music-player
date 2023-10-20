
import React, { useState } from "react";
import { background } from "../../assets";

import { Box, Img } from "../../components/Styles";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    return (
        <Box position="relative" width="full" height={"screen"}>
            <Img src={background} width={"full"} height={"full"} objectFit="cover" display={['none', 'block']} />
            <Box
                width="full"
                position="absolute"
                inset="0"
                flexDirection={"row"}
                justifyContent="center"
                alignItems="center"
                minHeight={"screen"}
            >
                <Box bg={"#F2F5F5"} width={['full', 'auto']} height={['full', 'auto']} px={5} py={4} borderRadius={10}>
                    <LoginForm />
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;

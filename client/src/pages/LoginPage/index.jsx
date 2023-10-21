
import React, { useState } from "react";
import { background, logo } from "../../assets";


import { Box, GridBox, Img } from "../../components/Styles";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    return (
        <Box position="relative" width="full" height={"screen"}>

            <GridBox >
                <Box bg={"#F8F8F8"} width={['full']} height={['full']} px={[1, 3, 4, 5]} py={[2, 3, 4]} borderRadius={10} justifyContent={['center']} alignItems='center'>

                    <Box width={['70%', '800px']} justifyContent={['center', 'center', 'start']} alignItems='center'>
                        <LoginForm />
                    </Box>
                </Box>
                <Box>
                    <Img src={background} width={"full"} height={"full"} objectFit="cover" display={['none', 'none', 'none', 'block']} />
                </Box>
            </GridBox>
        </Box>
    );
};

export default LoginPage;

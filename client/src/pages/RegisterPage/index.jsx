import React, { useState } from "react";
import { background, backgroundRegister } from "../../assets";
import FormPage from "./Form";
import { Box, GridBox, Img } from "../../components/Styles";

const RegisterPage = () => {
  return (
    <Box position="relative" width="full" height={"screen"} bg="#F8F8F8" p={1}>

      <GridBox >
        <Box bg={"#F8F8F8"} width={['full']} height={['full']} px={[1, 3, 4, 5]} py={[2, 3, 4]} borderRadius={10} justifyContent={['center']} alignItems='center'>

          <Box width={['70%', '800px']} justifyContent={['center', 'center', 'start']} alignItems='center'>
            <FormPage />
          </Box>
        </Box>
        <Box>
          <Img src={backgroundRegister} width={"full"} height={"100vh"} objectFit="cover" display={['none', 'none', 'none', 'block']} />
        </Box>
      </GridBox>
    </Box>

  );
};

export default RegisterPage;

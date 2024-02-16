
import React, { useState } from "react";
import { background, logo } from "../../assets";


import { Box, GridBox, Img } from "../../components/Styles";
import LoginForm from "./LoginForm";
import DialogBox from "../../components/DialogBox";

const LoginPage = ({ isOpen, onClose, setIsOpen }) => {
    return (
        <DialogBox isOpen={isOpen} onClose={onClose} >
            <LoginForm />

        </DialogBox>

    );
};

export default LoginPage;

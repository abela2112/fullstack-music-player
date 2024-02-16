import React, { useState } from 'react'
import { Box } from './components/Styles'
import Sidebar from './pages/sidebar'
import { Outlet } from 'react-router-dom'
import Header from './components/header'

import HorizontalMenu from './components/HorizontalMenu'
import LoginPage from './pages/LoginPage'
const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [close, setClose] = useState(false)
    return (
        <main>
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
                    <Header close={close} setClose={setClose} isOpen={isOpen} setIsOpen={setIsOpen} />
                    <HorizontalMenu />
                    <Box width={"full"} height='full' mt={'72px'}>

                        <Outlet />

                    </Box>

                </Box>
            </Box>

            <LoginPage isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </main>
    )
}

export default Layout
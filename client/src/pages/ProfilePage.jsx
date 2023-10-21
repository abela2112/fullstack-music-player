import React, { useState } from 'react'
import { Box, Button, Img, Input, Label } from '../components/Styles'
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogOut } from '../redux/features/user';

const ProfilePage = () => {
    const { user } = useSelector((state) => state.user);
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch();
    const baseUrl = import.meta.env.VITE_BASE_URL
    return (
        <Box width='full' justifyContent={'start'} >
            <Box flexDirection='column' >
                <Box justifyContent='center' my={2} >

                    <Img width={'200px'} src={`${baseUrl}/${user?.picture}`} borderRadius='50%' />

                </Box>
                <Box flexDirection={["column", "row"]} py={2}>
                    <Label htmlFor="artistName" py={2}>
                        Name:
                    </Label>
                    <Input
                        type="text"
                        placeholder="title"
                        px={[0, 3]}
                        py={[2]}
                        disabled
                        fontSize={["1rem", "1.2rem"]}
                        value={user?.name}
                    //onChange={(e) => setTitle(e.target.value)}
                    />
                </Box>
                <Box flexDirection={["column", "row"]} py={2}>
                    <Label htmlFor="artistName" py={2}>
                        Email:
                    </Label>
                    <Input
                        type="text"
                        placeholder="artist name"
                        px={[0, 3]}
                        py={[2]}
                        disabled
                        fontSize={["1rem", "1.2rem"]}
                        value={user?.email}
                    //onChange={(e) => setArtist(e.target.value)}
                    />
                </Box>
                <Box flexDirection={["column", "row"]} py={2}>
                    <Label htmlFor="artistName" py={2}>
                        email_verified:
                    </Label>
                    <Input
                        type="text"
                        placeholder="Genre"
                        disabled
                        value={user?.email_verified}
                    // onChange={(e) => setGenre(e.target.value)}
                    />
                </Box>
                <Box width='full' justifyContent='center'>
                    <Button
                        py={2}
                        borderRadius={10}
                        width={"300px"}
                        justifyContent='center'
                        fontSize='1.4rem'
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

                <Box>

                </Box>


            </Box>
        </Box>

    )
}

export default ProfilePage
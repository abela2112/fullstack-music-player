import React, { useState } from 'react'
import { Box, Img, Input, Label } from '../components/Styles'
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const { user } = useSelector((state) => state.user);
    const [isEdit, setIsEdit] = useState(false)
    console.log(user)
    return (
        <Box width='full' justifyContent={'start'} >
            <Box flexDirection='column' >
                <Box justifyContent='center' my={2} >

                    <Img width={'200px'} src={`http://localhost:5000/${user?.picture}`} borderRadius='50%' />

                </Box>
                <Box flexDirection={["column", "row"]} py={2}>
                    <Label htmlFor="artistName" py={2}>
                        Name:
                    </Label>
                    <Input
                        type="text"
                        placeholder="title"
                        px={[0, 3]}
                        py={[0, 2]}
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
                        py={[0, 2]}
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
                        px={[0, 3]}
                        py={[0, 2]}
                        disabled
                        fontSize={["1rem", "1.2rem"]}
                        value={user?.email_verified}
                    // onChange={(e) => setGenre(e.target.value)}
                    />
                </Box>

                {/* <Box flexDirection={["column", "row"]} alignItems='center' py={2}>
                    <Label htmlFor="artistName" py={2}>
                        Password:
                    </Label>
                    <Input
                        type="text"
                        placeholder="artist name"
                        px={[0, 3]}
                        py={[0, 2]}
                        fontSize={["1rem", "1.2rem"]}
                        value={user?.email}
                    //onChange={(e) => setArtist(e.target.value)}
                    />
                </Box> */}

                <Box>

                </Box>


            </Box>
        </Box>

    )
}

export default ProfilePage
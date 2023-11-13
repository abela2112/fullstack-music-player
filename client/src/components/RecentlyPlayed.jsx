import React, { useState } from 'react'
import { Box, FlexNavLink, Img, SongCardBox, Title } from './Styles'
import PlayPause from './PlayPause'
import Music from './Music'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const RecentlyPlayed = ({ songs, i }) => {
    //const [page, setPage] = useState(1)
    const [current, setCurrent] = useState(1)
    const itemPerPage = 2
    let pages = Math.ceil(songs?.length / itemPerPage)

    console.log(songs.length)
    let lastItem = current * itemPerPage
    let firstItem = lastItem - itemPerPage
    console.log(">>>>", lastItem)
    console.log(">>>>", firstItem)


    return (
        <Box flexDirection='column'>
            <Box display='flex' justifyContent='space-between'>
                <Title>Recently Played</Title>
                <Box>
                    <Box padding='0.5rem' borderRadius='5px' >
                        <AiOutlineArrowLeft onClick={() => current - 1 > 0 && setCurrent(current - 1)} size={30} color="black" />

                    </Box>
                    <Box padding='0.5rem' borderRadius='5px' ml='5px' >
                        <AiOutlineArrowRight onClick={() => current + 1 <= pages && setCurrent(current + 1)} size={30} color="gray" />
                    </Box>
                </Box>
            </Box>
            <Box display='flex' flexDirection={['column', 'row']}>
                <SongCardBox flexDirection='column' width={["160px", "200px"]} m={[1, 4]} borderRadius={10}>
                    <Box flexDirection='column' height={["160px", "200px"]} position='relative' >
                        <Box position='absolute' inset='0' justifyContent='center' alignItems='center' width='full' height='full'>
                            <PlayPause song={songs[0] && songs[0]} i={0} />
                        </Box>
                        <Img src={`${import.meta.env.VITE_BASE_URL}/${songs[0] && songs[0]?.img}`} alt='songphoto' objectFit='cover' />

                    </Box>
                    <Box justifyContent='space-between' mt={3} position='relative'>
                        {/* <Box flexDirection='column'>
                            <FlexNavLink color={'black'} to={`/home/songDetails/${songs[0]?._id}`} py={2} fontWeight={'500'} fontSize={['1rem', '1.4rem']}>{songs[0]?.title}</FlexNavLink>
                            <FlexNavLink color={'#909090'} to={'/home/artist'} py={2} fontSize={['14px', '1rem']}>{songs[0]?.artist}</FlexNavLink>
                        </Box> */}

                        {/* <Box alignItems='center' justifyContent='start' position='relative'>
                    {favoriteSongs?.some((item) => item?._id === song?._id) ? <AiFillHeart size={30} color='#EF233C' onClick={() => handleFavorites(song?._id)} /> : <AiOutlineHeart size={30} onClick={() => handleFavorites(song?._id)} />}
                    <BsThreeDots size={30}
                        onClick={() => setIsClicked(!isClicked)} className='icon' />

                </Box> */}
                    </Box>
                </SongCardBox>

                <Box
                    display='flex'
                    flexDirection='column'
                    bg='white'
                    flex={2}
                    padding={1}
                    m={[1, 4]}
                >
                    {
                        songs.slice(firstItem, lastItem).map((song, i) => (<Music song={song} key={i} />))
                    }
                </Box>

            </Box></Box>
    )
}

export default RecentlyPlayed
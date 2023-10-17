import React from 'react';
import { Box, Img, Span } from '../Styles';
import { notes } from '../../assets';


const Track = ({ isPlaying, isActive, activeSong }) => (
  <Box display={['flex']} justifyContent='start' alignItems='center' px={2} flexDirection={['row', 'column']} width='full'>
    <Box display={['flex']} justifyContent='center' aligntems='center'>
      <Img src={activeSong?.img ? `http://localhost:5000/${activeSong?.img}` : notes} alt="cover art" width={['50px', '200px']} height={['50px', '200px']} borderRadius={['50%', '10px']} />
    </Box>
    <Box width={'100%'} ml={2} flexDirection='column' justifyContent='center' alignItems={['start', 'center']}>
      <Span fontFamily={'Nunito'} fontWeight='700' fontSize={['1rem', '1.4rem']} color='black' mt={2}>
        {activeSong?.title ? activeSong.title : 'No active Song'}
      </Span>
      <Span color='#909090' fontSize='1rem' py={2}>
        {activeSong?.artist ? activeSong?.artist : 'No active Song'}
      </Span>
    </Box>
  </Box>
);

export default Track;

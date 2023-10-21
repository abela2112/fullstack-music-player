import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayBtnFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { Box } from '../Styles';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';


const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <Box justifyContent={['flex-end', 'center']}>
    <Box alignItems='center' justifyContent='space-around' width={['9rem', '13rem', '20rem']} display={['none', 'flex']}>
      <BsArrowRepeat size={30} color={repeat ? 'red' : '#2B2D42'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
      {currentSongs?.length && <MdSkipPrevious size={30} color="#2B2D42" className="cursor-pointer" onClick={handlePrevSong} />}
      {isPlaying ? (
        <BsFillPauseFill size={45} color="#2B2D42" onClick={handlePlayPause} className="cursor-pointer" />
      ) : (
        <BsFillPlayBtnFill size={45} color="#2B2D42" onClick={handlePlayPause} className="cursor-pointer" />
      )}
      {currentSongs?.length && <MdSkipNext size={30} color="#2B2D42" onClick={handleNextSong} />}
      <BsShuffle size={30} color={shuffle ? 'red' : '#2B2D42'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    </Box>

    <Box display={['flex', 'none']} justifyContent='flex-end' pr={2}>
      {isPlaying ? (
        <FaPauseCircle size={45} color="#EF233C" onClick={handlePlayPause} className="cursor-pointer" />
      ) : (
          <FaPlayCircle size={45} color="#EF233C" onClick={handlePlayPause} className="cursor-pointer" />
      )}
    </Box>
  </Box>
);

export default Controls;

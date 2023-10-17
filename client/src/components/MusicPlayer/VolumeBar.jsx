import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import { Box, Input } from '../Styles';


const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <Box display={['none', 'flex']} justifyContent='flex-end' alignItems='center' px={5}>
    {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} color="#2B2D42" onClick={() => setVolume(0)} />}
    {value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} color="##2B2D42" onClick={() => setVolume(0)} />}
    {value === 0 && <BsFillVolumeMuteFill size={25} color="#2B2D42" onClick={() => setVolume(1)} />}
    <Input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      width={['8rem', '8rem', '10rem']}
      height={'0.25rem'}
      ml={'0.5rem'}
    />
  </Box>
);

export default VolumeBar;

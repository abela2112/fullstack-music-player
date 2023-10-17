import React from 'react';
import { Box, Button, Input, P, Span } from '../Styles';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <Box display={['none', 'flex']} alignItems='center' position={['absolute', 'relative']} left={0} right={0} bottom={'-10px'} top={'100%'} justifyContent='center'>
      <Button type="button" onClick={() => setSeekTime(appTime - 5)}
        display={['hidden', 'hidden', 'block']}
        color='#2B2D42'
        mr={2}
        bg='transparent'
        fontSize='1rem'>
        -
      </Button>
      <Span display={['hidden', 'hidden', 'block']} color='#2B2D42'>{value === 0 ? '0:00' : getTime(value)}</Span>
      <Input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        width={['96px', '200px', '250px']}
        mx={['1rem', '1.5rem']}
        borderRadius={10}
        height={'0.25rem'}
      />
      <Span color='#2B2D42' display={['hidden', 'hidden', 'block']}>{max === 0 ? '0:00' : getTime(max)}</Span>
      <Button type="button" onClick={() => setSeekTime(appTime + 5)} display={['hidden', 'hidden', 'block']} ml={2} color='#2B2D42'>
        +
      </Button>
    </Box>
  );
};

export default Seekbar;

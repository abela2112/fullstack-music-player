import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Box, Button, Form, Input, Search } from './Styles'
import { useNavigate } from 'react-router-dom'



const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/home/search/${searchTerm}`)
  }
  return (
    <Form flexDirection={'row'} width={'auto'} position='relative' alignItems='center' mx={2} onSubmit={handleSubmit}>
      <Button bg='transparent' color='#0c0b0b' outline='none' border='none' position='absolute' top={2}
        left='0' zIndex={10} borderRadius='10px'>
        <AiOutlineSearch size={30} color='#0c0b0b' /></Button>
      <Search
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
        placeholder='Search...' width={'full'} autoComplete='none' fontSize={'1.1rem'} bg={'white'} borderRadius={'80px'} color='gray' padding={'0.75rem 2rem'} borderBottom='1px solid black' />
    </Form>
  )
}

export default SearchBar
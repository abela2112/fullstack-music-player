import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Box, Button, Form, Input, Search } from './Styles'
import { useNavigate } from 'react-router-dom'



const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
  }
  return (
    <Form flexDirection={'row'} width={'auto'} position='relative' alignItems='center' onSubmit={handleSubmit}>
      <Box
        display="flex"
        alignItems="center"
        marginTop="10px"
        borderRadius={'6px'}
        color='#707070'
        border="none"
        height="50px"
        bg="primaryLight"


      >
        <AiOutlineSearch className='icon' />
      <Search
          bg="primaryLight"

          type='search'
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
          placeholder='Search...' width={'full'} autoComplete='none' fontSize={'1.1rem'} border='none' />

      </Box></Form>
  )
}

export default SearchBar
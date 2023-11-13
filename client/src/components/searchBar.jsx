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
      <Box
        display='flex'
        alignItems='center'

        borderRadius={'10px'} color='gray'
        border={"1px solid gray"}
        padding="2px"
        bg="#E8ECEF"

      >
        <AiOutlineSearch size={30} />
      <Search
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
          placeholder='Search...' width={'full'} autoComplete='none' fontSize={'1.1rem'} padding={'0.5rem 2rem 0.75rem 0'} border='none' flex={2} bg="#E8ECEF" />

      </Box></Form>
  )
}

export default SearchBar
import React, { useState } from 'react'
import { Box, Heading } from '../components/Styles'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SongCard from '../components/SongCard'

const SearchPage = () => {
    const { searchTerm } = useParams()
    const [searchFilterValue] = useState(["title", "artist", 'genre'])
    const { songs, isLoading } = useSelector(state => state.songs)
    const search = (items) => {
        return items.filter((item) => {
            return searchFilterValue.some((newValue) => {
                return item[newValue]?.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            })
        })
    }

    return (
        <Box flexDirection='column'>
            <Heading>Search Results</Heading>
            <Box flexWrap='wrap'>
                {songs.length > 0 && search(songs)?.map((song, i) => (<SongCard song={song} i={i} key={i} />))}
            </Box>
        </Box>
    )
}

export default SearchPage

import { Navigate, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios';
import HomePage from './pages/HomePage'
import { Global, ThemeProvider, css } from '@emotion/react';
import { useSelector } from 'react-redux';
import VerifyEmail from './pages/VerifyEmail';
import LoginPage from './pages/LoginPage';
import { darkTheme, lightTheme } from './theme';
import DiscoverPage from './pages/DiscoverPage';
import SongCreatePage from './pages/SongCreatePage';
import FavoriteSongs from './pages/FavoriteSongs';
import ProfilePage from './pages/ProfilePage';
import MySongs from './pages/mySongs';
import Recents from './pages/Recents ';
import SongsPage from './pages/SongsPage';
import SearchPage from './pages/SearchPage';
import SongDetailes from './pages/SongDetailes';
import EditSongs from './pages/EditSongs';
import Layout from './layout';


// axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  const token = useSelector(state => state.user?.token) || window.localStorage.getItem('token')
  const theme = useSelector(state => state.user.theme)
  axios.defaults.baseURL = 'http://localhost:5000'
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //console.log(import.meta.env.VITE_BASE_URL)

  //const [isDarkMode, setIsDarkMode] = useState(false);
  // const [isUserLoggedIn, setIsLoggedInUser] = useState(false || window.localStorage.getItem('token'))
  const isAuth = Boolean(useSelector((state) => state.user.token));

  const themeProvider = theme === "light" ? lightTheme : darkTheme



  return (
    <ThemeProvider theme={themeProvider}>

      <Routes>
        <Route path='/' element={<Layout />} >

          <Route path="/" element={<Navigate to={'/explore'} replace />} />
          <Route path="//explore" element={<DiscoverPage />} />
          <Route path='/add songs' element={<SongCreatePage />} />
          <Route path="/favorite songs" element={<FavoriteSongs />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/mysongs" element={<MySongs />} />
          <Route path="/Albums" element={<ProfilePage />} />
          <Route path="/create playlist" element={<ProfilePage />} />
          <Route path="/artist" element={<ProfilePage />} />
          <Route path="/recents" element={<Recents />} />
          <Route path="/best of 2023" element={<ProfilePage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/search/:searchTerm" element={<SearchPage />} />

          <Route path="/songDetails/:songId" element={< SongDetailes />} />
          <Route path="/editSongs/:songId" element={< EditSongs />} />
        </Route>

      </Routes>
      {/* <Route path='/register' element={<RegisterPage />} />
        <Route path='/home/*' element={isAuth ? <HomePage /> : <Navigate to={"/"} />} />
        <Route path='/verifyEmail' element={<VerifyEmail />} /> */}


    </ThemeProvider>


  )
}

export default App

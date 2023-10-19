
import { Navigate, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios';
import HomePage from './pages/HomePage'
import { Global, css } from '@emotion/react';
import { useSelector } from 'react-redux';
import VerifyEmail from './pages/VerifyEmail';

const GlobalStyles = () => (
  <Global
        styles={css`
      /* Apply global styles */
      body {
        margin: 0;
        padding: 0;
        background-color: #ffffff;
        font-family: 'Noto Sans', sans-serif;
        color: #333;
      }
    `}
  />
);
// axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  const token = useSelector(state => state.user?.token) || window.localStorage.getItem('token')
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  //console.log(import.meta.env.VITE_BASE_URL)

  //const [isDarkMode, setIsDarkMode] = useState(false);
  // const [isUserLoggedIn, setIsLoggedInUser] = useState(false || window.localStorage.getItem('token'))
  const isAuth = Boolean(useSelector((state) => state.user.token));





  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route index element={isAuth ? <Navigate to={'/home'} /> : <RegisterPage />} />
        <Route path='/home/*' element={isAuth ? <HomePage /> : <Navigate to={"/"} />} />
        <Route path='/verifyEmail' element={<VerifyEmail />} />


      </Routes>

    </>


  )
}

export default App

// import React, { useState } from 'react'
// import { Box } from '../App'
// import { Button, Input } from '../components/searchBar'
// import { Label } from './SongCreatePage'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { setUserLogin } from '../redux/features/user'
// import axios from 'axios'

// const LoginPage = () => {
//     const dispatch = useDispatch()
//     const [pageType, setPageType] = useState('login')
//     const navigate = useNavigate()
//     const isLogin = pageType === 'login'
//     const isRegister = pageType === 'register'
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password }
//             )
//             dispatch(setUserLogin(data))
//             window.localStorage.setItem('user', JSON.stringify(data?.data))
//             window.localStorage.setItem('token', data?.token)
//             navigate('/')

//         } catch (error) {
//             console.error(error)
//         }
//     }
//     return (
//         <Box width='full' flexDirection='column' justifyContent='center' alignItems='center' >
//             <Box width='500px' p={5} >
//                 <form onSubmit={handleLogin}>
//                     <h1>Login</h1>
//                     <Box flexDirection='column'>
//                         <Label htmlFor='email' py={2}>Email</Label>
//                         <Input type='email' placeholder='you@gmail.com' px={3} py={2} fontSize='1.2rem'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)} />
//                     </Box>
//                     <Box flexDirection='column'><Label htmlFor='password' py={2}>password</Label>
//                         <Input type='password' px={3} py={2} fontSize='1.2rem'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)} /></Box>

//                     <Button width='full' mt={4} py={2} px={4} bg={'royalBlue'} borderRadius={10}>Login</Button>
//                     <p>Don't have account <Link to='/register'>Register here</Link></p>
//                 </form>
//             </Box>
//         </Box>
//     )
// }

// export default LoginPage

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { background } from '../assets'


// const RegisterPage = () => {
//     const navigate = useNavigate();
//     const [pageType, setPageType] = useState("login");
//     const isLogin = pageType === "login";
//     const isRegister = pageType === "register";
//     const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [profileImage, setProfileImage] = useState("");

//     const handleRegister = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.set("name", name);
//         formData.set("password", password);
//         formData.set("email", email);
//         formData.set("profileImage", profileImage[0]);
//         if (password !== confirmPassword) {
//             throw new Error("password doesn't match");
//         }
//         const { data } = await axios.post(
//             "http://localhost:5000/api/user/signup",
//             formData,
//             {
//                 headers: { "Content-Type": "multipart/form-data" },
//             }
//         );
//         navigate("/login");
//     };
//     return (
//         <Box position='relative' width='full' height={'screen'}>
//             <img src={background} width={'full'}
//                 height={'full'}
//                 objectFit='cover' />
//             <Box
//                 width="full"
//                 position='absolute'
//                 inset='0'
//                 flexDirection={"row"}
//                 justifyContent="center"
//                 alignItems="center"
//                 minHeight={"100vh"}

//             >
//                 <Box bg={"rgba(220, 214, 214, 0.684)"} px={5} py={4} borderRadius={10}>

//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default RegisterPage;



// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { nextSong, prevSong, playPause } from '../../redux/features/player';
// import Controls from './Controls';
// import Player from './Player';
// import Seekbar from './Seekbar';
// import Track from './Track';
// import VolumeBar from './VolumeBar';
// import { Box } from '../Styles';


// const MusicPlayer = () => {
//   const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
//   const [duration, setDuration] = useState(0);
//   const [seekTime, setSeekTime] = useState(0);
//   const [appTime, setAppTime] = useState(0);
//   const [volume, setVolume] = useState(0.3);
//   const [repeat, setRepeat] = useState(false);
//   const [shuffle, setShuffle] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (currentSongs?.length) dispatch(playPause(true));
//   }, [currentIndex]);

//   const handlePlayPause = () => {
//     if (!isActive) return;

//     if (isPlaying) {
//       dispatch(playPause(false));
//     } else {
//       dispatch(playPause(true));
//     }
//   };

//   const handleNextSong = () => {
//     dispatch(playPause(false));

//     if (!shuffle) {
//       dispatch(nextSong((currentIndex + 1) % currentSongs.length));
//     } else {
//       dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
//     }
//   };

//   const handlePrevSong = () => {
//     if (currentIndex === 0) {
//       dispatch(prevSong(currentSongs.length - 1));
//     } else if (shuffle) {
//       dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
//     } else {
//       dispatch(prevSong(currentIndex - 1));
//     }
//   };

//   return (
//     <Box position='relative' width='full' justifyContent='space-between' alignItems='center'>
//       <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
//       <Box flexDirection='column' justifyContent='center' alignItems='center'>
//         <Controls
//           isPlaying={isPlaying}
//           isActive={isActive}
//           repeat={repeat}
//           setRepeat={setRepeat}
//           shuffle={shuffle}
//           setShuffle={setShuffle}
//           currentSongs={currentSongs}
//           handlePlayPause={handlePlayPause}
//           handlePrevSong={handlePrevSong}
//           handleNextSong={handleNextSong}
//         />
//         <Seekbar
//           value={appTime}
//           min="0"
//           max={duration}
//           onInput={(event) => setSeekTime(event.target.value)}
//           setSeekTime={setSeekTime}
//           appTime={appTime}
//         />
//         <Player
//           activeSong={activeSong}
//           volume={volume}
//           isPlaying={isPlaying}
//           seekTime={seekTime}
//           repeat={repeat}
//           currentIndex={currentIndex}
//           onEnded={handleNextSong}
//           onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
//           onLoadedData={(event) => setDuration(event.target.duration)}
//         />
//       </Box>
//       <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
//     </Box>
//   );
// };

// export default MusicPlayer;


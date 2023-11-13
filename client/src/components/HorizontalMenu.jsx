import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, NavLinkButton } from './Styles';
const NavItems = [{ text: 'Explore' }, { text: 'Favorite Songs' }, { text: 'Add songs' }, { text: 'Albums' }, { text: 'Artists' }, { text: 'Recents' }]
const Slider = () => {
    return (
        <Swiper
            watchSlidesProgress={true} slidesPerView={3} className="mySwiper"
        >

            <SwiperSlide className='swiper-slide' ><NavLinkButton to={`/home/explore`} className={({ isActive }) => isActive ? 'active' : ''} >All</NavLinkButton>  </SwiperSlide>
            <SwiperSlide className='swiper-slide' > <NavLinkButton to={`/home/favorite songs`} className={({ isActive }) => isActive ? 'active' : ''} >Favorites</NavLinkButton></SwiperSlide >
            <SwiperSlide className='swiper-slide' > <NavLinkButton to={`/home/recents`} className={({ isActive }) => isActive ? 'active' : ''} >Recent</NavLinkButton></SwiperSlide >
            <SwiperSlide className='swiper-slide' ><NavLinkButton to={`/home/add songs`} className={({ isActive }) => isActive ? 'active' : ''} >Add</NavLinkButton></SwiperSlide >
            <SwiperSlide className='swiper-slide' > <NavLinkButton to={`/home/artists`} className={({ isActive }) => isActive ? 'active' : ''} >Artist</NavLinkButton></SwiperSlide >
            <SwiperSlide className='swiper-slide' > <NavLinkButton to={`/home/albums`} className={({ isActive }) => isActive ? 'active' : ''} >Album</NavLinkButton></SwiperSlide >



        </Swiper>
    )
}

const HorizontalMenu = () => {
    return (


        // <Box mt={[1, 2, 3]} display={["flex", "flex", "flex", "none"]}  >
        //     <Slider />
        // </Box>
        <div></div>
    )
}

export default HorizontalMenu
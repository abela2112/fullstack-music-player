import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, NavLinkButton } from './Styles';
const NavItems = [{ text: 'Explore' }, { text: 'Favorite Songs' }, { text: 'Add songs' }, { text: 'Albums' }, { text: 'Artists' }, { text: 'Recents' }]
const Slider = ({ slides }) => {
    return (
        <Swiper
            watchSlidesProgress={true} slidesPerView={4} className="mySwiper"
        >
            {slides?.map((slide, i) => {
                const lcText = slide?.text.toLowerCase()
                return (
                    <SwiperSlide key={i}>
                        <NavLinkButton to={`/home/${lcText}`} className={({ isActive }) => isActive ? 'active' : ''} >{slide?.text}</NavLinkButton>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

const HorizontalMenu = () => {
    return (


        <Box mt={[0, 1, 2, 5]} display={["flex", "flex", "flex", "none"]}  >
            <Slider slides={NavItems} />
        </Box>

    )
}

export default HorizontalMenu
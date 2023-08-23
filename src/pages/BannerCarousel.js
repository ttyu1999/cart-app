import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import AD_BANNER_IMG from '../assets/ad-banner-img';

const BannerCarousel = () => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
        >
            {AD_BANNER_IMG.map((img) => {
                return (
                    <SwiperSlide key={img.id}>
                        <Link to="/cart-app/product">
                            <img src={img.url} alt={img.name} />
                        </Link>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}
export default BannerCarousel;
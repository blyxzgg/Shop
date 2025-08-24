import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../Main.css";

import slider1 from "../../../assets/images/Deals_photos/slider1.png";
import slider2 from "../../../assets/images/Deals_photos/slider2.png";
import slider3 from "../../../assets/images/Deals_photos/slider3.png";

const DealsCarousel = () => {
    const slides = [
        { id: 1, img: slider1, alt: "Slide 1" },
        { id: 2, img: slider2, alt: "Slide 2" },
        { id: 3, img: slider3, alt: "Slide 3" }
    ];

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            loop={false}
            pagination={{ clickable: true }}
            className="mySwiper"
            initialSlide={1}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <img src={slide.img} alt={slide.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default DealsCarousel;

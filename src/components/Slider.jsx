import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import Banner from './Banner';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
// import Slider1 from './Slider1';
// import Slider2 from './Slider2';
// import Slider3 from './Slider3';
const Slider = () => {
    return (
        <div>
            <Swiper
      modules={[Navigation, Pagination, Scrollbar,Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 1500 }}
      // navigation
      pagination={{ clickable: true }}
      
      
    >
       <SwiperSlide><Banner1></Banner1></SwiperSlide>
      <SwiperSlide><Banner/></SwiperSlide>
     
      <SwiperSlide><Banner2></Banner2></SwiperSlide>
    </Swiper> 
        </div>
    );
};

export default Slider;
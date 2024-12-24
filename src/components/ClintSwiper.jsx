// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import { EffectCoverflow, Pagination,Autoplay } from 'swiper/modules';
// import { useEffect, useState } from 'react';
// import axios from 'axios';



// const ClintSwiper = () => {
//     const [reviews, setReviews]=useState([])

//     useEffect(()=>{
//         axios.get(`${import.meta.env.VITE_Project_Api_Url}/clint-review}`)
//         .then(res=>setReviews(res.data))
//     },[])
//     return (
//         <>
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
          
//           centeredSlides={true}
//           slidesPerView={4}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
         
//           autoplay
//           modules={[EffectCoverflow, Autoplay, Pagination]}
//           className="mySwiper w-[1200px] mr-11 "
//         >
//             {reviews.map(review=>  <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//           </SwiperSlide>)}
        
//           {/* <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//           </SwiperSlide>
//           <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//           </SwiperSlide> */}
//         </Swiper>
//       </>
//     );
// };

// export default ClintSwiper;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ClintSwiper = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_Project_Api_Url}/clint-review`)
      .then(res => setReviews(res.data))
      .catch(error => console.error('Error fetching client reviews:', error));
  }, []);

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{ delay: 1500, reverseDirection:true}}
     
      modules={[EffectCoverflow, Autoplay, Pagination]}
      className="mySwiper lg:h-[300px] lg:w-[1400px] mx-auto"
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="review-card border h-full p-4 bg-gray-200 shadow-md rounded-md text-center">
            <img
              src={review.img}
              alt={review.name}
              className="review-img mx-auto mb-3  rounded-full w-24 h-24 object-cover"
            />
            <h3 className="review-name text-lg text-gray-800 font-semibold">{review.name}</h3>
            <p className="review-opinion text-sm text-gray-800">{review.opinion}</p>
            <div className="review-rating text-yellow-500">
              {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
            </div>
            <p className="review-date text-xs text-gray-500">{review.date}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ClintSwiper;


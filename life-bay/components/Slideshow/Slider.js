import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';
import Slide from './Slide';
const Slider = () => {
  SwiperCore.use([Autoplay]);
  
    return (
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay:2000,
        disableOnInteraction:false
        }}>
        <SwiperSlide >
          <Slide name="Thomas Allen" 
          location="La Ceiba, Honduras" 
          image="comment1.jpg"
          text="Amet deserunt eu irure veniam. Consectetur do mollit veniam culpa dolor voluptate velit deserunt laboris. Esse commodo occaecat cillum nostrud minim id nulla est Lorem dolor ad deserunt."/>
        </SwiperSlide>
        <SwiperSlide >
          <Slide name="Luke Johnson" 
          location="Roatan, Honduras" 
          image="comment2.jpg"
          text="Amet deserunt eu irure veniam. Consectetur do mollit veniam culpa dolor voluptate velit deserunt laboris. Esse commodo occaecat cillum nostrud minim id nulla est Lorem dolor ad deserunt."/>
        </SwiperSlide>
        <SwiperSlide >
          <Slide name="Kelsy Avila" 
          location="Tegucigalpa, Honduras" 
          image="comment3.jpg"
          text="Amet deserunt eu irure veniam. Consectetur do mollit veniam culpa dolor voluptate velit deserunt laboris. Esse commodo occaecat cillum nostrud minim id nulla est Lorem dolor ad deserunt."/>
        </SwiperSlide>
        <SwiperSlide >
          <Slide name="Rommel Sanchez" 
          location="Roatan, Honduras" 
          image="comment4.jpg"
          text="Amet deserunt eu irure veniam. Consectetur do mollit veniam culpa dolor voluptate velit deserunt laboris. Esse commodo occaecat cillum nostrud minim id nulla est Lorem dolor ad deserunt."/>
        </SwiperSlide>
        
      </Swiper>
    );
}

export default Slider;
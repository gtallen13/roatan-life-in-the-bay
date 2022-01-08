import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import stylesConstants from '../styles/Constants.module.css';
import Slide from '../components/Slideshow/Slide'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);
export default function Home() {

  return (
    <div>
      <Head>
        <title>Home | Roatan Life in the Bay</title>
        <meta name="keywords" content="home,roatan,tours,bay islands"></meta>
      </Head> 
      {/* Banner Section */}
      <div className={styles.bannerContainer}>  
        <Image className={styles.bannerImage} layout='fill' src="/banner3.jpg"/>
        <div className={styles.bannerText}>
            <h1 className={stylesConstants.textPrimary}>ROATAN
                <i className={stylesConstants.textSecondary}>Life in the Bay</i>
            </h1>
        </div>
      </div>
      {/* Slideshow */}
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{clickable:true}}
      navigation={true}
        loop={true}
        className='home-swiper'>
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
    </div>
  )
}

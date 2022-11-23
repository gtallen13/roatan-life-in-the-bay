import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import Link from 'next/link';
import Head from 'next/head';
import Image from "next/legacy/image";
import SwiperCore, {
    Parallax,Pagination,Navigation
  } from 'swiper';
SwiperCore.use([Parallax,Pagination,Navigation]);
const Covid = () => {
    return (
        <div>
            <Head> 
                <title>COVID-19 Precautions | Roatan Life in the Bay</title>
                <meta name="keywords" content="covid,info,tour,island,roatan,tours,bay islands"></meta>
            </Head> 
            <div className="text-section covid ">
                <div className="parallax-overlay"></div>
                <Swiper    
                speed={600} parallax={true} 
                pagination={{"clickable": true}} 
                navigation={true} 
                className="covid-swiper">
                <div slot="container-start" className="parallax-bg" 
                data-swiper-parallax="-23%"></div>
                <SwiperSlide>
                        <div className="titles" data-swiper-parallax="-300">Trying Times</div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                The past year has been a trying time for people around the world, and our island home was no exception but we are happy to remind you all that the flights into our international airport are slowly but surely returning to a more normal schedule. 
                                And for those of you who prefer to travel by ship, we also patiently, for the sake of everyone's health and safety, await the news of when cruises will frequent our ports again!
                            </p>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="titles" data-swiper-parallax="-300">Special Requirements</div>
                            <div className="text" data-swiper-parallax="-100">
                                <p>Please note there are special requirements during this time including obtaining a negative COVID test result and filling out <b>pre-check</b> paperwork online. Also, don't forget the U.S. has recently decided that you will need a negative test result to return home as well. Your airline should make sure you have everything you need for your trip here, and we will happily point you to local clinics as you prepare for your trip home.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="titles" data-swiper-parallax="-300">See you soon</div>
                            <div className="text" data-swiper-parallax="-100">
                                <p>All this being said, please know that once you decide to come visit us again, we will be ready to host you with that island hospitality you have been missing out on. Rest assured that we will be taking the proper biosecurity precautions and measures for your well-being as well as those we work closely with and our loved ones. 
                                We hope to see you very soon and help you forget these Pandemic Blues you have been feeling.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="titles" data-swiper-parallax="-300">Contact Us</div>
                            <div className="text" data-swiper-parallax="-100">
                                <p>
                                    As always, if you have any inquires about your upcoming trip, us, or our services, please <Link href="/More/Contact"><a>contact us.</a></Link> We'd love to help you plan unforgettable Life in the Bay memories!
                                </p>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Covid;
import Head from 'next/head';
import  Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/Tours.module.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';
const tourIsland = () => {
    const westImages = ['/west1.jpg','/west2.jpg','/west3.jpg']
    SwiperCore.use([Autoplay]);

    //db functions
    async function fetchToursRequest(){
        const response = await fetch("/api/tours");
        const data = await response.json();
        console.log(data);
        return[]
    }
    fetchToursRequest();
    return (
        <div className="page-background">
            <Head>
                <title>Tour the Island | Roatan Life in the Bay</title>
                <meta name="keywords" content="tour,island,roatan,tours,bay islands"></meta>
            </Head> 
            <h1 className="tour-title">Tour the Island</h1>
            <div className={styles.slideWrapper}>
                <div className={styles.slideCards}>
                    <div className={styles.idk}>
                        <Swiper spaceBetween={50}
                            slidesPerView={1}
                            autoplay={{
                            delay:2000,
                            disableOnInteraction:false
                        }}>
                            {westImages.map((x)=>(
                                    <SwiperSlide>
                                        <Image key={x} width={300} height={300} src={x}/>
                                    </SwiperSlide>
                                )
                            )}
                        </Swiper>
                    </div>
                    <Link href="./Island/westSide"><h4>West Side Tours</h4></Link>
                    <p>Laboris Lorem mollit ea qui dolore aliqua officia id tempor. Eiusmod Lorem in adipisicing esse...<Link href=""><a>Read More</a></Link></p>
                </div>
                <div className={styles.slideCards}>
                    <Swiper spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                        delay:2000,
                        disableOnInteraction:false
                    }}>
                        {westImages.map((x)=>(
                                <SwiperSlide>
                                    <Image key={x} width={300} height={300} src={x}/>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                    <Link href=""><h4>East Side Tours</h4></Link>
                    <p>Laboris Lorem mollit ea qui dolore aliqua officia id tempor. Eiusmod Lorem in adipisicing esse... <Link href=""><a>Read More</a></Link></p>
                </div>
                <div className={styles.slideCards}>
                    <Swiper spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                        delay:2000,
                        disableOnInteraction:false
                    }}>
                        {westImages.map((x)=>(
                                <SwiperSlide>
                                    <Image key={x} width={300} height={300} src={x}/>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                    <h4>Full Island Tours</h4>
                    <p>Laboris Lorem mollit ea qui dolore aliqua officia id tempor. Eiusmod Lorem in adipisicing esse...<Link href=""><a>Read More</a></Link></p>
                </div>
            </div>
        </div>
    );
}

export default tourIsland;
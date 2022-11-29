import Head from 'next/head';
import Image from "next/legacy/image";
import Link from 'next/link';
import styles from '../../../styles/Tours.module.css'
import {descriptionLimiter} from "../../../utils/textMods"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';
import { connectToDatabase } from '../../../utils/mongodb';
SwiperCore.use([Autoplay]);
const tourIsland = ({tours}) => {
    return (
        <div className="page-background">
            <Head>
                <title>Tour the Island | Roatan Life in the Bay</title>
                <meta name="keywords" content="tour,island,roatan,tours,bay islands"></meta>
            </Head> 
            <h1 className="titles">Tour the Island</h1>
            <div className={styles.slideWrapper}>
                {tours.map((tour,key)=>(
                    // random key generated to avoid `key error` in console
                    // Math.random().toString(36).substring(2,9)
                    //removed random key due to potential re-render issue
                    
                    <div className={styles.slideCards} key={key}>
                        <div >
                            <Swiper spaceBetween={50}
                                slidesPerView={1}
                                autoplay={{
                                delay:5000,
                                disableOnInteraction:false
                            }}>
                                {tour.images.map((item,key)=>(
                                        <SwiperSlide key={key}>
                                            <Image key={key} width={400} height={300} src={item} className={styles.slideImg} />
                                        </SwiperSlide>
                                    )
                                )}
                            </Swiper>
                        </div>
                        <Link href={`/Tours/Island/${tour.id}`} legacyBehavior><h4>{tour.name}</h4></Link>
                        <p>{descriptionLimiter(tour.description,150)}...
                            <Link href={`/Tours/Island/${tour.id}`}>
                                Read More
                            </Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps(context){
    const {db} = await connectToDatabase();
    
    const data = await db
    .collection("tours")
    .find()
    .toArray();
    
    const tours = data.map(tour=>{        
        const id = JSON.parse(JSON.stringify(tour._id));
        return{
            id: id,
            name: tour.name,
            description: tour.description,
            images:tour.images
        }
    })
    return{ 
        props:{tours}
    }
}

export default tourIsland;
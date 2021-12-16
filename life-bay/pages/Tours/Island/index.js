import Head from 'next/head';
import  Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/Tours.module.css'
import {descriptionLimiter} from "../../../utils/textMods"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';
import { connectToDatabase } from '../../../utils/mongodb';
const tourIsland = ({tours}) => {
    const westImages = ['/west1.jpg','/west2.jpg','/west3.jpg']
    SwiperCore.use([Autoplay]);
    
    return (
        <div className="page-background">
            <Head>
                <title>Tour the Island | Roatan Life in the Bay</title>
                <meta name="keywords" content="tour,island,roatan,tours,bay islands"></meta>
            </Head> 
            <h1 className="titles">Tour the Island</h1>
            <div className={styles.slideWrapper}>
                {tours.map((tour)=>(
                    <div className={styles.slideCards}>
                        <div>
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
                        <Link href={`/Tours/Island/${tour.id}`}><h4>{tour.name}</h4></Link>
                        <p>{descriptionLimiter(tour.description,150)}
                            <Link href={`/Tours/Island/${tour.id}`}>
                                <a>...Read More</a>
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
            price: tour.price,
            bring_items: tour.bring_items
        }
    })
    return{ 
        props:{tours}
    }
}

export default tourIsland;
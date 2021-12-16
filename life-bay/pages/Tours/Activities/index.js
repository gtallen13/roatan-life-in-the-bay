import Head from 'next/head';
import  Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/Tours.module.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay} from 'swiper';
import { connectToDatabase } from '../../../utils/mongodb';
const waterActivities = ({activities}) => {
    const westImages = ['/west1.jpg','/west2.jpg','/west3.jpg']
    SwiperCore.use([Autoplay]);
    //helps shorten description from DB
    const descriptionLimiter = (string='',limit=0)=>{
        return string.substring(0,limit);
    }

    
    return (
        <div className="page-background">
            <Head>
                <title>Tour the Island | Roatan Life in the Bay</title>
                <meta name="keywords" content="tour,island,roatan,tours,bay islands"></meta>
            </Head> 
            <h1 className="titles">Water Activities</h1>
            <div className={styles.slideWrapper}>
                {activities.map((activity)=>(
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
                        <Link href={`/Tours/Activities/${activity.id}`}><h4>{activity.name}</h4></Link>
                        <p>{descriptionLimiter(activity.description,150)}
                            <Link href={`/Tours/Activities/${activity.id}`}>
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
    .collection("activities")
    .find()
    .toArray();
    
    const activities = data.map(activity=>{        
        const id = JSON.parse(JSON.stringify(activity._id));
        return{
            id: id,
            name: activity.name,
            description: activity.description,
            prices: activity.prices,
            bring_items: activity.bring_items
        }
    })
    return{ 
        props:{activities}
    }
}

export default waterActivities;
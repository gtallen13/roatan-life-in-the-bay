import { ObjectId } from "bson";
import { connectToDatabase } from "../../../utils/mongodb";

import Link from 'next/link';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay,EffectFade,Pagination} from 'swiper';
import SlideImage from '../../../components/Slideshow/SlideImage'
export async function getStaticPaths(){
    return{
        paths:[],
        fallback:true
    }
}

export async function getStaticProps({params}){
    const {db} = await connectToDatabase();    
    
    const data = await db
    .collection("tours")
    .findOne({
        _id: ObjectId(params.id)  
    },{
        projection:{
            name:1,
            description:1,
            price:1,
            bring_items:1,
        }
    })
    return{
        props:{
            tour:JSON.parse(JSON.stringify(data))
        },
        revalidate:1,
    };
}



const Details = ({tour}) => {
    SwiperCore.use([Autoplay,Pagination,EffectFade]);
    const images = ['/banner1.jpg','/banner2.jpg','/banner3.jpg'];
    return (
        <div className="page-background">
            <div>
                <Swiper 
                className="banner-container"
                slidesPerView={1}
                spaceBetween={50}
                autoplay={{
                    disableOnInteraction:false,
                    delay:1000
                    }}
                pagination={{dynamicBullets:true,}}
                effect="fade"
                navigation={true}
                loop={true}>
                    {images.map((x)=>(
                        <SwiperSlide key={x}>
                            <SlideImage image={x} text={tour.name}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="center">
                <section className="text-section routesID">
                        <span className="price">Price: ${tour.price}/person</span>
                        <p>{tour.description}</p>
                        <ul>
                            {tour.bring_items.map(item=>(
                                <li>{item}</li>
                            ))}
                        </ul>
                        <div className="book-now-wrapper center">
                            <Link href=""><a>Book Now</a></Link>
                        </div>
                </section>

            </div>
        </div>
    );
}


export default Details;
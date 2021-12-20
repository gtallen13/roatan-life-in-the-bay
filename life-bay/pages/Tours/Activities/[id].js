import { ObjectId } from "bson";
import { connectToDatabase } from "../../../utils/mongodb";
import {breakLine} from "../../../utils/textMods"
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
    .collection("activities")
    .findOne({
        _id: ObjectId(params.id)  
    },{
        projection:{
            name:1,
            description:1,
            prices:1,
            bring_items:1,
        }
    })
    return{
        props:{
            activity:JSON.parse(JSON.stringify(data))
        },
        revalidate:1,
    };
}



const Details = ({activity}) => {
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
                            <SlideImage image={x} text={activity.name}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="center">
                <section className="text-section routesID">
                        <p>{breakLine(activity.description)}</p>
                        <p>Prices:</p>
                        <ul>
                            {activity.prices.map(price=>(
                                <li>{price}</li>
                            ))}
                        </ul>
                        <p>What to bring:</p>
                        <ul>
                            {activity.bring_items.map(item=>(
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
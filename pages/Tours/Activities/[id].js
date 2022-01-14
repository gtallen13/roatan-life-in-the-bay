import { ObjectId } from "bson";
import { connectToDatabase } from "../../../utils/mongodb";
import {breakLine} from "../../../utils/textMods"
import Link from 'next/link';
import Head from 'next/head';
import {Swiper, SwiperSlide} from 'swiper/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import SwiperCore, {Navigation,Pagination} from 'swiper';
SwiperCore.use([Pagination,Navigation]);
import SlideImage from '../../../components/Slideshow/SlideImage'
const Details = ({activity}) => {
    return (
        <div className="page-background">
            <Head>
                <title>Tour the Island | Roatan Life in the Bay</title>
                <meta name="keywords" content="tour,island,roatan,tours,bay islands"></meta>
            </Head> 
            <div>
                <h1 className="title-parallax">{activity.name}</h1>
                <Swiper 
                className="banner-container"
                slidesPerView={1}
                spaceBetween={50}
                pagination={{clickable:true,}}
                navigation={true}
                loop={true}
                className="route-slider">
                    {activity.images.map((item,key)=>(
                        <SwiperSlide key={key}>
                            <SlideImage image={item} alt={`${activity.name} banner image`}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="center">
                <section className="text-section activity">
                    <div className="route-container">
                        {(activity.route.length)===2  ?
                            // <p>{activity.route.length}</p>
                            (<a href={`https://www.google.com/maps/dir/?api=1&origin=${activity.route[0]}&destination=${activity.route[1]}`} target="_blank">
                                <FontAwesomeIcon icon={faMapMarkedAlt} size="6x" className="map-icon"/>
                            </a>):
                            (<a href={`https://www.google.com/maps/search/?api=1&query=${activity.route[0]}`} target="_blank">
                                <FontAwesomeIcon icon={faMapMarkedAlt} size="6x" className="map-icon"/>
                            </a>)
                        }
                        <p className="route-text">Checkout the route !</p>

                    </div>
                    <div>
                        <p>{breakLine(activity.description)}</p>
                        <p>Prices:</p>
                        <ul className="items-list">
                            {activity.prices.map((price,key)=>(
                                <li key={key}>{price}</li>
                            ))}
                        </ul>
                        <p>What to bring:</p>
                        <ul className="items-list">
                            {activity.bring_items.map((item,key)=>(
                                <li key={key}>{item}</li>
                            ))}
                        </ul>
                        <div className="book-now-wrapper center">
                            <Link href=""><a className="btnBook">Book Now</a></Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
export async function getStaticPaths(){
    const {db} = await connectToDatabase();    
    
    const data = await db
    .collection("activities")
    .find()
    .toArray();
    
    const paths = data.map(activity=>{
        return {params: {id:activity._id.toString()}}
    })
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const {db} = await connectToDatabase();    
    
    const data = await db
    .collection("activities")
    .findOne({
        _id: ObjectId(params.id)  
    })
    return{
        props:{
            activity:JSON.parse(JSON.stringify(data))
        }
    };
}

export default Details;
import { ObjectId } from "bson";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons'
import { connectToDatabase } from "../../../utils/mongodb";
import Head from 'next/head';
import Link from 'next/link';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);
import SlideImage from '../../../components/Slideshow/SlideImage'

const Details = ({tour}) => {
    const originPoint = tour.route[0];
    const destinationPoint = tour.route[1];
    console.log(tour);
    return (
        <div className="page-background">
            <Head>
                <title>Tour the Island | Roatan Life in the Bay</title>
                <meta name="keywords" content="tour,island,roatan,tours,bay islands"></meta>
            </Head> 
            <div>
                <h1 className="title-parallax">{tour.name}</h1>
                <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true
                }}
                navigation={true}
                className="route-slider">
                    {tour.images.map((item,i)=>(
                        <SwiperSlide key={i}>
                            <SlideImage image={item} alt={`${tour.name} banner image`}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="center">
                <section className="text-section tours">
                    <div className="route-container">
                        <a href={`https://www.google.com/maps/dir/?api=1&origin=${originPoint}&destination=${destinationPoint}&travelmode=driving`} target="_blank">
                            <FontAwesomeIcon icon={faMapMarkedAlt} size="6x" className="map-icon"/>
                        </a>
                        <p className="route-text">Checkout the route !</p>
                    </div>
                    <div>
                        <p>{tour.description}</p>
                        <p>What to bring:</p>
                        <ul className="items-list">
                            {tour.bring_items.map((item,key)=>(
                                <li key={key}>{item}</li>
                                ))}
                        </ul>
                        <div className="book-now-wrapper">
                            <span className="price">Price: ${tour.price}/person</span>
                            <Link href=""><a className="btnBook">Book Now</a></Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

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
            route:1,
            images:1
        }
    })
    return{
        props:{
            tour:JSON.parse(JSON.stringify(data))
        },
        revalidate:1,
    };
}



export default Details;
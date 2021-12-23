import { ObjectId } from "bson";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapSigns} from '@fortawesome/free-solid-svg-icons'
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
    const images = ['/banner1.jpg','/banner2.jpg','/banner3.jpg'];
    const originPoint = tour.route[0];
    const destinationPoint = tour.route[1];
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
                navigation={true}>
                    {images.map((x)=>(
                        <SwiperSlide key={x}>
                            <SlideImage image={x}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="center">
                <section className="text-section tours">
                    <div className="route-container">
                        <p>Checkout the route !</p>
                        <a href={`https://www.google.com/maps/dir/?api=1&origin=${originPoint}&destination=${destinationPoint}&travelmode=driving`} target="_blank">
                            <FontAwesomeIcon icon={faMapSigns} size="6x" className="map-icon"/>
                        </a>
                    </div>
                    <div>
                        <p>{tour.description}</p>
                        <ul>
                            {tour.bring_items.map(item=>(
                                <li>{item}</li>
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
            route:1
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
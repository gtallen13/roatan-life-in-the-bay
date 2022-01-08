import { ObjectId } from "bson";
import { connectToDatabase } from "../../../utils/mongodb";
import {breakLine} from "../../../utils/textMods"
import Link from 'next/link';
import {Swiper, SwiperSlide} from 'swiper/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import SwiperCore, {Navigation,Pagination} from 'swiper';
SwiperCore.use([Pagination,Navigation]);
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
            route:1,
            images:1
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
    return (
        <div className="page-background">
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
                            <SlideImage image={item}/>
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
                                <FontAwesomeIcon icon={faMapSigns} size="6x" className="map-icon"/>
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


export default Details;
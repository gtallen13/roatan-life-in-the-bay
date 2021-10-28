import Image from 'next/image';
import Link from 'next/link';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SwiperCore, {Autoplay,EffectFade,Pagination} from 'swiper';
import image from 'next/image';
import SlideImage from '../../../components/Slideshow/SlideImage'
SwiperCore.use([Autoplay,Pagination,EffectFade]);
const westSide = () => {
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
                            <SlideImage image={x} text="West Side Tour"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <section className="text-section">
                    <p>
                        Aute qui qui ex tempor commodo sit elit adipisicing nostrud consectetur voluptate in do veniam. Ea elit exercitation elit ipsum ad nisi dolore. Esse ipsum enim cillum aute elit nostrud sint commodo dolor nostrud laborum sunt. Cupidatat labore ex est duis ad. Eiusmod deserunt ad velit mollit et ex velit deserunt.
                    </p>
                    <p>
                        Id ullamco esse ullamco nostrud esse eiusmod irure enim. Commodo proident deserunt minim tempor excepteur officia. Ut in Lorem laboris labore eiusmod.
                    </p>
                    <ul>
                        <li>Additional Spendin Money</li>
                        <li>Sunscreen</li>
                        <li>Sunglasses</li>
                        <li>Bathing Suit</li>
                        <li>Towel</li>
                    </ul>
                    <Link href=""><a>Book Now</a></Link>
            </section>
        </div>
    );
}

export default westSide;
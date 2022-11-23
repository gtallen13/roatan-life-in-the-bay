import Image from "next/legacy/image";
const SlideImage = ({image,alt}) => {
    return (
        <div className="slide-container">
            <Image layout='fill' 
            src={`${image}`} 
            placeholder='blur' 
            blurDataURL={`${image}`} 
            onError={()=>setSrc('error.svg')}
            alt={alt}/>
            <div className="slide-info bottom-center">
            </div>
        </div>
    );
}

export default SlideImage;
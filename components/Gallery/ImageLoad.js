import Image from "next/legacy/image";
import styles from '../../styles/Tours.module.css';
import React,{useState} from 'react';
const ImageLoad = ({src,alt}) => {
    const [imageError,setImageError] = useState(false);
    return (
        <Image 
        className={styles.galleryImage}
        src={imageError?'/error.svg':src} 
        alt={alt} 
        onError={()=>setImageError(true)}
        placeholder='blur'
        blurDataURL={src}
        width={200}
        height={200}/>
    );
}

export default ImageLoad;
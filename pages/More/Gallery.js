import { connectToDatabase } from "../../utils/mongodb";
import styles from '../../styles/Gallery.module.css';
import Image from "next/image";
import React,{useState} from 'react';
const Gallery = ({images}) => {
    return (
        <div className="text-section gallery">
            <h1 className="titles">Life in the Bay</h1>
            <div className={styles.galleryContainer}>
                {images.map((image,key)=>(
                    <div className={styles.galleryItem} key={key}>
                        <Image className={styles.galleryImg} 
                        src={image.imgURL} 
                        layout="fill"
                        alt={`gallery image ${key}`} 
                        placeholder='blur'
                        blurDataURL={image.imgURL}/>
                    </div>
                ))}
            </div>
        </div>
    );
}


export async function getStaticProps(){
    const {db} = await connectToDatabase();
    const data = await db
    .collection("gallery")
    .find()
    .toArray()

    const images = data.map(image=>{
        return{
            imgURL: image.imgURL
        }
    })
    return {
        props:{
            images
        }
    }
}
export default Gallery;
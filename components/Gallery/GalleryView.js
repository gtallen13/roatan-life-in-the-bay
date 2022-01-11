import Image from 'next/image';
import styles from '../../styles/Tours.module.css';
import Link from 'next/link';
import ImageLoad from './ImageLoad';
const GalleryView = ({title, pageName,images}) => {
    
    return (
        <div className={styles.galleryContainer}>
            <Link href={`${pageName}`}><h2 className={styles.galleryTitle}>{title}</h2></Link>
            <div className={styles.galleryRow}>
                <ImageLoad src={images[0]} alt="Gallery Image"/>
                <ImageLoad src={images[1]} alt="Gallery Image"/>
                <ImageLoad src={images[2]} alt="Gallery Image"/>
            </div>
            <div className={styles.galleryRow}>
                <ImageLoad src={images[3]} alt="Gallery Image"/>
                <ImageLoad src={images[4]} alt="Gallery Image"/>
                <ImageLoad src={images[5]} alt="Gallery Image"/>
            </div>
        </div>
    );
}

export default GalleryView;
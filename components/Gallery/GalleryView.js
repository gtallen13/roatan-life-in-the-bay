import Image from 'next/image';
import styles from '../../styles/Tours.module.css';
import Link from 'next/link';
const GalleryView = ({title, pageName,images}) => {
    
    return (
        <div className={styles.galleryContainer}>
            <Link href={`${pageName}`}><h2 className={styles.galleryTitle}>{title}</h2></Link>
            <div className={styles.galleryRow}>
                <Image className={styles.galleryImage} src={images[0]} width={200} height={200}/>
                <Image className={styles.galleryImage} src={images[1]} width={200} height={200}/>
                <Image className={styles.galleryImage} src={images[2]} width={200} height={200}/>
            </div>
            <div className={styles.galleryRow}>
                <Image className={styles.galleryImage} src={images[3]} width={200} height={200}/>
                <Image className={styles.galleryImage} src={images[4]} width={200} height={200}/>
                <Image className={styles.galleryImage} src={images[5]} width={200} height={200}/>

            </div>
        </div>
    );
}

export default GalleryView;
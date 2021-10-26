import Image from 'next/image';
import styles from '../../styles/Tours.module.css';
import Link from 'next/link';
const GalleryView = ({title}) => {
    return (
        <div className={styles.galleryContainer}>
            <Link href=""><h2 className={styles.galleryTitle}>{title}</h2></Link>
            <div>
                <Image className={styles.galleryImage} src="/image1.jpg" width={200} height={200}/>
                <Image className={styles.galleryImage} src="/image2.jpg" width={200} height={200}/>
                <Image className={styles.galleryImage} src="/image3.jpg" width={200} height={200}/>
            </div>
            <div>
                <Image className={styles.galleryImage} src="/image3.jpg" width={200} height={200}/>
                <Image className={styles.galleryImage} src="/image2.jpg" width={200} height={200}/>
                <Image className={styles.galleryImage} src="/image1.jpg" width={200} height={200}/>

            </div>
        </div>
    );
}

export default GalleryView;
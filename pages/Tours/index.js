import Head from 'next/head';
import styles from '../../styles/Tours.module.css';
import GalleryView from '../../components/Gallery/GalleryView';
const Tours = () => {
    const tourImages = ['/tour-image1.jpg','/tour-image2.jpg','/tour-image3.jpg',
    '/tour-image4.jpg','/tour-image5.jpg','/tour-image6.jpg'];
    const activityImages = ['/activity-image1.jpg','/activity-image2.jpg','/activity-image3.jpg',
    '/activity-image4.jpg','/activity-image5.jpg','/activity-image6.jpg'];
    return (
        <div>
            <Head>
                <title>Home | Roatan Life in the Bay</title>
                <meta name="keywords" content="tours,roatan,tours,bay islands"></meta>
            </Head>
            <div className={styles.galleryWrapper}>
                <GalleryView title="Tour the Island" pageName="/Tours/Island/" images={tourImages}/>
                <GalleryView title="Water Activities" pageName="/Tours/Activities/" images={activityImages}/>
            </div>
        </div>
    );
}

export default Tours;
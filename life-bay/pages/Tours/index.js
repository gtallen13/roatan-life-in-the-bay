import Head from 'next/head';
import styles from '../../styles/Tours.module.css';
import GalleryView from '../../components/Gallery/GalleryView';
const Tours = () => {
    return (
        <div>
            <Head>
                <title>Home | Roatan Life in the Bay</title>
                <meta name="keywords" content="tours,roatan,tours,bay islands"></meta>
            </Head>
            <div className={styles.galleryWrapper}>
                <GalleryView title="Tour the Island" pageName="/Tours/Island/"/>
                <GalleryView title="Water Activities" pageName="/Tours/Activities/"/>
            </div>
        </div>
    );
}

export default Tours;
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import stylesText from '../styles/Constants.module.css';
import Slider from '../components/Slider'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Roatan Life in the Bay</title>
        <meta name="keywords" content="home,roatan,tours,bay islands"></meta>
      </Head>
      {/* Banner Section */}
      <div className={styles.bannerContainer}>
        <Image className={styles.bannerImage} layout='fill' src="/banner3.jpg"/>
        <div className={styles.bannerText}>
            <h1 className={stylesText.textPrimary}>ROATAN
                <i className={stylesText.textSecondary}>Life in the Bay</i>
            </h1>
        </div>
      </div>

      {/* Home Section */}
      <div className="home-section">
        <h2 className={stylesText.textSecondary}> What our guests have to say about us...</h2>
      </div>
      <Slider/>
    </div>
  )
}

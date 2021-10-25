import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import stylesText from '../styles/Constants.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.bannerContainer}>
        <Image className={styles.bannerImage} layout='fill' src="/banner3.jpg"/>
        <div className={styles.bannerText}>
            <h1 className={stylesText.textPrimary}>ROATAN
                <i className={stylesText.textSecondary}>Life in the Bay</i>
            </h1>
        </div>
    </div>
    </div>
  )
}

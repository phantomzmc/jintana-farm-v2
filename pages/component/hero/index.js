import Head from 'next/head'
import styles from '../../../styles/Hero.module.css'

function Hero(params) {
    return (
        <div>
            <Head>
            <meta charSet="utf-8" />
                <title>สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง</title>
                <meta name="description" content="สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง" />
                <meta name="keywords" content="สวนส้มจินตนา,ส้มสายน้ำผึ้ง,อำเภอฝาง,เชียงใหม่,orange" />
            </Head>
            <section className={styles.hero}>
                <div className={styles.heroContainer} data-aos="zoom-in" data-aos-delay="100">
                    <h1>Jintana Orange Farm</h1>
                    <h2>ส้มสายน้ำผึ้ง อำเภอฝาง จังหวัดเชียงใหม่ รสชาติหวานเก็บสดทุกวัน</h2>
                    <a href="#about" className={styles.btnGetStarted}>เยี่ยมชมสวน</a>
                </div>
            </section>
        </div>

    )

}

export default Hero
import Head from 'next/head'
import Image from 'next/image'


import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import AOS from "aos";
import "aos/dist/aos.css";
// import Isotope from 'isotope-layout';
// import * as Swiper from 'swiper';
// import * as Glightbox from 'glightbox';
import { select, on } from "../commons/index";
import stylesHome from '../../../styles/Home.module.css'
import styles from '../../../styles/Product.module.css'


function Product() {
    /**
   * Easy selector helper function
   */
    /**
   * Porfolio isotope and filter
   */
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
        AOS.refresh();
        return () => {
            console.log("return data")
        }
    }, []);
    // window.addEventListener('load', () => {
    //     let portfolioContainer = select('.portfolio-container');
    //     if (portfolioContainer) {
    //         let aos = new AOS()
    //         let portfolioIsotope = new Isotope(portfolioContainer, {
    //             itemSelector: '.portfolio-item',
    //             layoutMode: 'fitRows'
    //         });

    //         let portfolioFilters = select('#portfolio-flters li', true);

    //         on('click', '#portfolio-flters li', function (e) {
    //             e.preventDefault();
    //             portfolioFilters.forEach(function (el) {
    //                 el.classNameList.remove('filter-active');
    //             });
    //             this.classNameList.add('filter-active');

    //             portfolioIsotope.arrange({
    //                 filter: this.getAttribute('data-filter')
    //             });
    //             portfolioIsotope.on('arrangeComplete', function () {
    //                 aos.refresh();
    //             });
    //         }, true);
    //     }

    // });

    /**
     * Portfolio details slider
     */
    // swiper = new Swiper('.portfolio-details-slider', {
    //     speed: 400,
    //     loop: true,
    //     autoplay: {
    //         delay: 5000,
    //         disableOnInteraction: false
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true
    //     }
    // });




    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง</title>
                <meta name="description" content="สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง" />
                <meta name="keywords" content="สวนส้มจินตนา,ส้มสายน้ำผึ้ง,อำเภอฝาง,เชียงใหม่,orange" />
            </Head>

            <section id="portfolio" className={styles.portfolio}>
                <div className="container" data-aos="fade-up">
                    <div className={stylesHome.sectionHeader}>
                        <h3 className={stylesHome.sectionTitle}>สินค้า</h3>
                        <p className={stylesHome.sectionDescription}>รายการสินค้า</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters" className={styles.portfolioFlters}>
                                <li data-filter="*" className={styles.filterActive}>ทั้งหมด</li>
                                {/* <li data-filter=".filter-4">เบอร์ 4</li> */}
                                <li data-filter=".filter-5">เบอร์ 5</li>
                                <li data-filter=".filter-6">เบอร์ 6</li>
                                <li data-filter=".filter-all">คละเบอร์</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className={styles.portfolioContainer} data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-4 col-md-6 filter-5">
                                <div className={styles.portfolioItem}>
                                    <Image src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no5_4.jpg" width={1200} height={566} alt="Example" priority />

                                    {/* <img src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no5_4.jpg" class="img-fluid" alt="" /> */}
                                    <div className={styles.portfolioInfo}>
                                        <h4>ส้มสายน้ำผึ้ง เบอร์ 5 40 ลูก</h4>
                                        <p>ราคา : 400 บาท</p>
                                        <a href="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no5_4.jpg" data-gallery="portfolioGallery"
                                            className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 filter-5">
                                <div className={styles.portfolioItem}>
                                    <Image src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no5_5.jpg" width={1200} height={566} alt="Example" priority />
                                    <div className={styles.portfolioInfo}>
                                        <h4>ส้มสายน้ำผึ้ง เบอร์ 5 84 ลูก</h4>
                                        <p>ราคา : 750 บาท</p>
                                        <a href="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no5_5.jpg" data-gallery="portfolioGallery"
                                            className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 filter-6">
                                <div className={styles.portfolioItem}>
                                    <Image src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no6_2.JPG" width={1200} height={566} alt="Example" priority />

                                    {/* <img src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no6_2.JPG" className="img-fluid" alt="" /> */}
                                    <div className={styles.portfolioInfo}>
                                        <h4>ส้มสายน้ำผึ้ง เบอร์ 6 30 ลูก</h4>
                                        <p>ราคา : 450 บาท</p>
                                        <a href="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no6_2.JPG" data-gallery="portfolioGallery"
                                            className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 filter-6">
                                <div className={styles.portfolioItem}>
                                    <Image src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no6_3.JPG" width={1200} height={566} alt="Example" priority />

                                    {/* <img src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no6_3.JPG" className="img-fluid" alt="" /> */}
                                    <div className={styles.portfolioInfo}>
                                        <h4>ส้มสายน้ำผึ้ง เบอร์ 6 72 ลูก</h4>
                                        <p>ราคา : 850 บาท</p>
                                        <a href="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no6_3.JPG" data-gallery="portfolioGallery"
                                            className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </div>
    )
}

export default Product
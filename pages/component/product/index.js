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
import '../../../styles/Product.module.css'


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
        loadPortfolio();
        return () => {
            console.log("return data")
        }
    }, []);

    const loadPortfolio = () => {
        let portfolioContainer = select('.portfolioContainer');
        if (portfolioContainer) {
            let aos = new AOS()
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classNameList.remove('filterActive');
                });
                this.classNameList.add('filterActive');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function () {
                    aos.refresh();
                });
            }, true);
        }
    }

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
    // let swiper = new Swiper('.portfolio-details-slider', {
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
                <title>????????????????????????????????????-??????????????????????????????????????? ????????????????????????</title>
                <meta name="description" content="????????????????????????????????????-??????????????????????????????????????? ????????????????????????" />
                <meta name="keywords" content="????????????????????????????????????,???????????????????????????????????????,????????????????????????,???????????????????????????,orange" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Kanit" rel="stylesheet" />
                <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
                <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="../../vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="../../vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
                <link href="../../vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                <link href="../../vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
                <link href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" rel="stylesheet" />
            </Head>

            <section id="portfolio" className={styles.portfolio}>
                <div className="container" data-aos="fade-up">
                    <div className={stylesHome.sectionHeader}>
                        <h3 className={stylesHome.sectionTitle}>??????????????????</h3>
                        <p className={stylesHome.sectionDescription}>????????????????????????????????????</p>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-delay={100}>
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters" className={styles.portfolioFlters}>
                                <li data-filter="*" className={styles.filterActive}>?????????????????????</li>
                                <li data-filter=".filter-5">??????????????? 5</li>
                                <li data-filter=".filter-6">??????????????? 6</li>
                                <li data-filter=".filter-all">????????????????????????</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.portfolioContainer}>

                        <div className="row" data-aos="fade-up" data-aos-delay={200}>
                            <div className="col-lg-4 col-md-6 filter-5">
                                <div className={styles.portfolioItem}>
                                    <img src="https://jintana-orange-farm.s3.ap-southeast-1.amazonaws.com/products/0001.JPG" className="img-fluid" alt />
                                    <div className={styles.portfolioInfo}>
                                        <h4>??????????????????????????????????????? ??????????????? 5 40 ?????????</h4>
                                        <p>???????????? : 449 ?????????</p>
                                        <a href="https://jintana-orange-farm.s3.ap-southeast-1.amazonaws.com/products/0001.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus" /></a>
                                        <a href="portfolio-details.html" className={styles.detailsLink} title="More Details"><i className="bx bx-link" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 filter-5">
                                <div className={styles.portfolioItem}>
                                    <img src="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no5_5.jpg" className="img-fluid" alt />
                                    <div className={styles.portfolioInfo}>
                                        <h4>??????????????????????????????????????? ??????????????? 5 84 ?????????</h4>
                                        <p>???????????? : 790 ?????????</p>
                                        <a href="https://jintana-orange-farm.s3-ap-southeast-1.amazonaws.com/no5_5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus" /></a>
                                        <a href="portfolio-details.html" className={styles.detailsLink} title="More Details"><i className="bx bx-link" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 filter-6">
                                <div className={styles.portfolioItem}>
                                    <img src="https://jintana-orange-farm.s3.ap-southeast-1.amazonaws.com/products/0002.JPG" className="img-fluid" alt />
                                    <div className={styles.portfolioInfo}>
                                        <h4>??????????????????????????????????????? ??????????????? 6 30 ?????????</h4>
                                        <p>???????????? : 499 ?????????</p>
                                        <a href="https://jintana-orange-farm.s3.ap-southeast-1.amazonaws.com/products/0002.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
                                        <a href="portfolio-details.html" className={styles.detailsLink} title="More Details"><i className="bx bx-link" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 filter-6">
                                <div className={styles.portfolioItem}>
                                    <img src="https://jintana-orange-farm.s3.ap-southeast-1.amazonaws.com/products/0005.JPG" className="img-fluid" alt />
                                    <div className={styles.portfolioInfo}>
                                        <h4>??????????????????????????????????????? ??????????????? 6 72 ?????????</h4>
                                        <p>???????????? : 899 ?????????</p>
                                        <a href="https://jintana-orange-farm.s3.ap-southeast-1.amazonaws.com/products/0005.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus" /></a>
                                        <a href="portfolio-details.html" className={styles.detailsLink} title="More Details"><i className="bx bx-link" /></a>
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
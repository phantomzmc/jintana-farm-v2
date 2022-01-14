import Head from 'next/head'
import Image from 'next/image'


import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from '../../../styles/Header.module.css';

function Header() {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง</title>
                <meta name="description" content="สวนส้มจินตนา-ส้มสายน้ำผึ้ง อำเภอฝาง" />
                <meta name="keywords" content="สวนส้มจินตนา,ส้มสายน้ำผึ้ง,อำเภอฝาง,เชียงใหม่,orange" />
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
                <link href="../../../styles/Header.module.css" rel="stylesheet" />
            </Head>

            <header id={styles.header} className="fixed-top d-flex align-items-center header-transparent">
                <div className="container d-flex justify-content-between align-items-center">

                    <div id={styles.logo}>
                        <h1>JINTANA ORANAGE</h1>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">หน้าแรก</a></li>
                            <li><a className="nav-link scrollto" href="#about">เกี่ยวกับ</a></li>
                            {/* <li><a className="nav-link scrollto" href="#services">Services</a></li> */}
                            <li><a className="nav-link scrollto " href="#portfolio">สินค้า</a></li>
                            {/* <li><a className="nav-link scrollto" href="#team">Team</a></li> */}
                            {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li> */}
                            <li><a className="nav-link scrollto" href="#maps">แผนที่</a></li>
                            <li><a className="nav-link scrollto" href="#contact">ติดต่อสอบถาม</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
        </div>


    )
}

export default Header
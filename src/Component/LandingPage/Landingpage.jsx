import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Landingpage.module.css';
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";

function LandingPage() {



    return (
        <>
            <Navbar expand="lg" className={`${styles.navbarContainer} fixed-top`} style={{ marginTop: '20px', marginLeft: '30px', width: '95%' }} >
                <Container>
                    <Navbar.Brand href="#home" className={styles.navbarBrand}>
                        <img src="/src/assets/bmw logo.png"
                            alt="BMW Logo"
                            className={styles.bmwLogo} />
                        <div className={styles.logoSeparator}></div>
                        Sheer Driving Pleasure
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={styles.navbarLinks}>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Circular World</Nav.Link>
                            <Nav.Link href="#link">Digital Journey</Nav.Link>
                            <Nav.Link href="#link">Electric Future</Nav.Link>
                            <Nav.Link href="#link">Freude</Nav.Link>
                            <Nav.Link href="#link">Models</Nav.Link>
                            <Nav.Link href="#search" className={styles.searchButton}>
                                <FaSearch />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Carousel interval={1300} controls={false} indicators={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/blue car.webp"
                        alt="First slide"
                        style={{ height: '480px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption className={styles.text1}>
                        <h3>BMW iDrive</h3>
                        <h1>An Evolution of Control and Intelligent Connectivity</h1>
                        <button className={styles.butt1}>Read More</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/pink car.webp"
                        alt="Second slide"
                        style={{ height: '480px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption className={styles.text1}>
                        <h3>BMW iDrive</h3>
                        <h1>An Evolution of Control and Intelligent Connectivity</h1>
                        <button className={styles.butt1}>Read More</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/src/assets/fellow car.webp"
                        alt="Third slide"
                        style={{ height: '480px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption className={styles.text1}>
                        <h3>BMW iDrive</h3>
                        <h1>An Evolution of Control and Intelligent Connectivity</h1>
                        <button className={styles.butt1}>Read More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <div className="row" style={{ height: '660px' }}>
                    <div className="col-6">
                        <img src="/src/assets/car2.jpg" alt="" />
                        <p className={styles.p1}>Smart Assistance</p>
                        <h1 className={styles.head1}>The BMW Driving Companionship</h1>
                        <button className={styles.butt2}>Read More</button>
                    </div>
                    <div className="col-6">
                        <img src="/src/assets/car.webp" alt="" />
                        <p className={styles.p2}>Over-the-Air Updates</p>
                        <h1 className={styles.head2}>The Joy of the Ever-Evolving</h1>
                        <button className={styles.butt3}>Read More</button>
                    </div>
                </div>
            </div>

            <div style={{ height: '400px' }}>
                <div className="row">
                    <div className="col-5">
                        <p style={{ fontSize: '24px', marginTop: '100px', marginLeft: '130px', width: '300px', fontWeight: '500' }}>Learn everything about BMW here</p>
                        <div>
                            <p style={{ fontSize: '24px', marginTop: '0px', marginLeft: '120px', width: '300px', fontWeight: '400', cursor: 'pointer' }}><IoIosArrowForward /> BMW NEWS</p>
                        </div>
                    </div>
                    <div className="col-7">
                        <Carousel className="small-slider" interval={1500} controls={true} indicators={true} style={{ width: '550px' }}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/src/assets/carr1.webp"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/src/assets/carr2.webp"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/src/assets/carr3.webp"
                                    alt="Third slide"

                                />
                            </Carousel.Item>
                        </Carousel>

                    </div>
                </div>
            </div>

            <div style={{ height: '380px' }}>
                <div className="row">
                    <div className="col-7">
                        <video width="100%" height="80%" autoPlay loop muted style={{ marginLeft: '70px' }}>
                            <source src="/src/assets/VIDEO.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-5">
                        <p style={{ fontSize: '30px', marginTop: '120px', marginLeft: '80px', fontWeight: '400' }}>Become a BMW expert</p>
                        <div>
                            <p style={{ fontSize: '24px', marginTop: '0px', marginLeft: '80px', width: '300px', fontWeight: '500', cursor: 'pointer' }}><IoIosArrowForward /> BMW EXPLAINED</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '2250px' }}>
                <h1 style={{ textAlign: 'center', fontSize: '50px' }}>ALL BMW MODELS</h1>
                <div>
                    <div className="row" style={{ marginTop: '50px' }}>
                        <div className="col-8" >
                            <img src="/src/assets/bmw1.webp" alt="" />
                        </div>
                        <div className="col-4" style={{ marginLeft: '-20px' }}>
                            <img src="/src/assets/bmw2.webp" alt="" />
                            <img src="/src/assets/bmw3.webp" alt="" style={{ width: '100%', marginTop: '10px', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <img src="/src/assets/bmw4.webp" alt="" style={{ width: '100%', marginTop: '10px' }} />
                        </div>
                        <div className="col-4">
                            <img src="/src/assets/bmw6.webp" alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-10px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-4">
                            <img src="/src/assets/bmw5.webp" alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-20px', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-4">
                            <img src="/src/assets/bmw9.webp" alt="" style={{ width: '100%', marginTop: '10px' }} />
                            <img src="/src/assets/bmw8.jpg" alt="" style={{ width: '100%', marginTop: '10px' }} />
                        </div>
                        <div className="col-8">
                            <img src="/src/assets/bmw7.webp" alt="" style={{ width: '99%', marginTop: '10px', marginLeft: '-10px' }} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="/src/assets/bmw10.webp" alt="" style={{ width: '100%', marginTop: '10px' }} />
                    </div>
                    <div className="col-4">
                        <img src="/src/assets/bmw11.webp" alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-10px', objectFit: 'cover' }} />
                    </div>
                    <div className="col-4">
                        <img src="/src/assets/bmw12.jpg" alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-20px', objectFit: 'cover' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="/src/assets/bmw15.webp" alt="" style={{ width: '100%', marginTop: '10px' }} />
                        <img src="/src/assets/bmw14.webp" alt="" style={{ width: '100%', marginTop: '10px' }} />
                    </div>
                    <div className="col-8">
                        <img src="/src/assets/bmw13.webp" alt="" style={{ width: '99%', marginTop: '10px', marginLeft: '-10px' }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="/src/assets/bmw18.jpg" alt="" style={{ width: '100%', marginTop: '10px' }} />
                    </div>
                    <div className="col-4">
                        <img src="/src/assets/bmw17.jpg" alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-10px', objectFit: 'cover' }} />
                    </div>
                    <div className="col-4">
                        <img src="/src/assets/bmw16.webp" alt="" style={{ width: '100%', marginTop: '10px', marginLeft: '-20px', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerLinks}>
                    <div className="row">
                        <div className="col-4">
                            <h4 className={styles.quickLinksHeader}>Quick Links</h4>
                            <hr className={styles.hr1}/>
                            <ul className={styles.linksList}>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">BMW in your country</a></li>
                                <li><a href="#">BMW Group Careers</a></li>
                                <li><a href="#">EU Detergents Regulation</a></li>
                                <li><a href="#">REACH Regulation</a></li>
                                <li><a href="#">Compatibility Check</a></li>
                                <li><a href="#">Accessories Update</a></li>
                                <li><a href="#">Connected Test Vehicle</a></li>
                                <li><a href="#">Service Page Charging Products</a></li>
                                <li><a href="#">Cooperation Test Car</a></li>
                                <li><a href="#">EU Battery Regulation</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h4 className={styles.quickLinksHeader}>More BMW Websites</h4>
                            <hr className={styles.hr1}/>
                            <ul className={styles.linksList}>
                                <li><a href="#">BMW M</a></li>
                                <li><a href="#">BMW M Motorsport</a></li>
                                <li><a href="#">BMW Golfsport</a></li>
                                <li><a href="#">BMW M Driving Experience</a></li>
                                <li><a href="#">BMW Welt</a></li>
                                <li><a href="#">BMW Group Classic</a></li>
                                <li><a href="#">BMW Corporate/Direct Sales</a></li>
                                <li><a href="#">BMW Group</a></li>
                                <li><a href="#">BMW Group Culture</a></li>
                                <li><a href="#">BMW ConnectedDrive Upgrades</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4 className={styles.quickLinksHeader}>BMW.com</h4>
                            <hr className={styles.hr2}/>
                            <ul className={styles.linksList}>
                                <li><a href="#">About BMW.com</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Cookies</a></li>
                                <li><a href="#">Imprint</a></li>
                                <li><a href="#">Legal Notice / Data protection</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h4 className={styles.quickLinksHeader}>Visit us on</h4>
                            <hr className={styles.hr2}/>
                            <ul className={styles.linksList}>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">X</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.footerCopy}>
                    <p>© BMW AG 2025</p>
                </div>
            </div>
        </>
    );
}


export default LandingPage;
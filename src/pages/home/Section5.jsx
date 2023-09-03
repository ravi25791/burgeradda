import React from 'react'
import { Row, Container, Col, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StoreIos from '../../assets/shop/appstore.png';
import AndroidIos from '../../assets/shop/googleplay.png';
import Eshop from '../../assets/shop/e-shop.png';
import Brand1 from '../../assets/brands/brand-11.png';
import Brand2 from '../../assets/brands/brand-12.png';
import Brand3 from '../../assets/brands/brand-13.png';
import Brand4 from '../../assets/brands/brand-14.png';
import Brand5 from '../../assets/brands/brand-15.png';
import Brand6 from '../../assets/brands/brand-16.png';
import Brand7 from '../../assets/brands/brand-17.png';
import Brand8 from '../../assets/brands/brand-16.png';

const Section5 = () => {
    return (
        <>
            <section className="shop_section">
                <Container>
                    <Row className='align-align-items-center'>
                        <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                            <h4>Download mobile App and</h4>
                            <h2>save up to 20%</h2>
                            <p> Aliquam a augue suscipit, luctus neque purus ipsum and neque
                                dolor primis libero tempus, blandit varius</p>

                            <Link to='/'>
                                <img src={StoreIos} alt="appstore" className='img-fluid me-3 store' />
                            </Link>

                            <Link to='/'>
                                <img src={AndroidIos} alt="googleplay" className='img-fluid me-3 store'  />
                            </Link>

                        </Col>

                        <Col lg={6}>
                            <img src={Eshop} className='img-fluid' alt="e-shop" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="brand_section">
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className='d-flex align-content-center justify-content-between'>
                                        
                                        <div className='brand_img'>
                                            <img src={Brand1} className='img-fluid' alt="brand1" />
                                        </div>

                                        <div className='brand_img'>
                                            <img src={Brand2} className='img-fluid' alt="brand2" />
                                        </div>

                                        <div className='brand_img'>
                                            <img src={Brand3} className='img-fluid' alt="brand3" />
                                        </div>

                                        <div className='brand_img'>
                                            <img src={Brand4} className='img-fluid' alt="brand4" />
                                        </div>

                                        <div className='brand_img'>
                                            <img src={Brand5} className='img-fluid' alt="brand5" />
                                        </div>

                                        <div className='brand_img'>
                                            <img src={Brand6} className='img-fluid' alt="brand6" />
                                        </div>

                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className='d-flex align-content-center justify-content-between'>
                                        
                                        <div className='brand_img'>
                                            <img src={Brand3} className='img-fluid' alt="brand3" />
                                        </div>

                                        <div className='brand_img'>
                                            <img src={Brand4} className='img-fluid' alt="brand4" />
                                        </div>

                                        <div className='brand_img'>
                                            <img src={Brand5} className='img-fluid' alt="brand5" />
                                        </div>

                                        <div className='brand_img'>
                                            <img src={Brand6} className='img-fluid' alt="brand6" />
                                        </div>

                                        <div className='brand_img'>
                                            <img src={Brand7} className='img-fluid' alt="brand7" />
                                        </div>

                                        <div className='brand_img'>
                                            <img src={Brand8} className='img-fluid' alt="brand8" />
                                        </div>

                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section5

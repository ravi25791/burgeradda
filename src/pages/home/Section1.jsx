import React from 'react';
import { Row, Container, col, Col } from 'react-bootstrap';
import Burger from '../../assets/hero/hero-2.png';
import { Link } from 'react-router-dom';

const Section1 = () => {
    return (
        <section className='hero_section'>
            <Container>
                <Row>
                    <Col lg={7} className='mb-5 bm-lg-0'>
                        <div className='position-relative'>
                            <img src={Burger} className='img-fluid' alt="hero" />
                            <div className='price-badge'>
                                <div className='badge_text'>
                                    <h4 className='h4_xs'>Only</h4>
                                    <h3 className='h3_lg'>$6.99</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="hero_text text-center">
                            <h1 className='text-white'>New Burger</h1>
                            <h2 className='text-white'>With Onion</h2>
                            <p className='text-white pt-2 pb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Link className="btn order_now">Order Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section1

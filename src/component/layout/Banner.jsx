import React from 'react';
import { Row, Container, col, Col } from 'react-bootstrap';
import Burger from '../../assets/hero/hero-2.png';
import { Link } from 'react-router-dom';

const Banner = (props) => {
    return (
        <section className='hero_section'>
            <Container>
                <Row>
                    <div className="hero_text text-center">
                        <h1 className='text-white'>{props.title}</h1>
                        <h2 className='text-white'>{props.subTitle}</h2>
                        <p className='text-white pt-2 pb-4'>{props.titletext}</p>
                        <Link className="btn order_now">Order Now</Link>
                    </div>

                </Row>
            </Container>
        </section>
    )
}

export default Banner


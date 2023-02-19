import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import AboutImage from "../../images/hero-image5.png";
import "./AboutMe.css"

const AboutMe = () => {
    return (
        <section className='about-me-area'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={5}>
                        <div className='about-image'>
                            <img src={AboutImage} alt=''/>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className='about-text'>
                            
                            <h3>Bapi Biswas</h3>
                            <h2>Website developer and user interface designer</h2>
                            <p>Over the past year, as a developer and web designer, I have worked with a variety of businesses and start-ups to help them reach their full potential and attract new clients.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
};

export default AboutMe;
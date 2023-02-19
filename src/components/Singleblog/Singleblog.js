import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import "./Singleblog.css"

const Singleblog = ({heading, text}) => {
    return (
            <Col lg={4}>
                <div className='single-blog'>
                <h2>{heading}</h2>
                <p>{text}</p>
                </div>
            </Col>
    );
};

export default Singleblog;
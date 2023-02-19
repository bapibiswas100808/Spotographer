import React from "react";
import Col from "react-bootstrap/esm/Col";
import "./SingleImage.css";

const SingleImage = ({ item }) => {
  return (
    <Col lg={3}>
      <div className="single-image">
        <img src={item.img} alt="" />
      </div>
    </Col>
  );
};

export default SingleImage;

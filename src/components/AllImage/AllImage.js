import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";
import SingleImage from "../SingleImage/SingleImage";
import Container from "react-bootstrap/esm/Container";

const AllImage = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("galleries.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="all-images">
      <Container>
        <Row>
          {images.map((item) => (
            <SingleImage key={item.id} item={item}></SingleImage>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllImage;

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Service.css";
const Service = ({ item }) => {
  return (
    <Col lg={4}>
      <div className="single-service">
        <img className="d-block w-100 mb-2" src={item.img} alt="" />
        <h3>{item.name}</h3>
        <h5>Price: {item.price}</h5>
        <p>{item.description}</p>
        <Button variant="outline-secondary">Book Now</Button>
      </div>
    </Col>
  );
};

export default Service;

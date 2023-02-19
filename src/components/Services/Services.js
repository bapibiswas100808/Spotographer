import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import "./Services.css";
import Service from "../Service/Service";

import SectionHeading from "../SectionHeading/SectionHeading";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setservices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  return (
    <section className="service-area">
      <Container>
        <SectionHeading heading="My Services" />
        <Row>
          {services.map((item) => (
            <Service key={item.id} item={item}></Service>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Services;

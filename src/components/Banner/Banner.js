import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Banner.css";
import { useEffect, useState } from "react";

const Banner = () => {
  const[slider, setSlider]= useState([]);
  useEffect(()=>{
    fetch("hero.json")
    .then(res=>res.json())
    .then(data=>setSlider(data))
  },[]);
  return (
    <section className="banner-area">
          <Carousel>{
            slider.map((item=>      
            <Carousel.Item key={item.id}>
              <img className="d-block w-100" src={item.image} alt="First slide" />
              <Carousel.Caption>
                <h3>{item.subheading}</h3>
                <h2>{item.heading}</h2>
                <p>{item.text}</p>
                <Button variant="outline-secondary">More About Me</Button>
              </Carousel.Caption>
            </Carousel.Item>))
            }
    </Carousel>
    </section>
  );
};
export default Banner;

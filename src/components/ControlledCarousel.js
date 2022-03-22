
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

import "../App.css";

import Arara from "../images/parrot-g6e7441b3c_640.jpg"
import Aldeia from "../images/aldeia.jpg"
import Papagaio from "../images/macaw-gaf289b378_640.jpg"
import { Link } from "react-router-dom";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel style={{width: "60%"}} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-tamanho"
          src={Arara}
          alt="First slide"
        />
        <Carousel.Caption>
        <button className="button-sabermais"><Link to={"/sabermais"}>Saber Mais</Link></button>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 img-tamanho"
          src={Aldeia}
          alt="Second slide"
        />

        <Carousel.Caption>
        <button className="button-sabermais"><Link to={"/sabermais"}>Saber Mais</Link></button>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-tamanho"
          src={Papagaio}
          alt="Third slide"
        />

        <Carousel.Caption>
        <button className="button-sabermais"><Link to={"/sabermais"}>Saber Mais</Link></button>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;

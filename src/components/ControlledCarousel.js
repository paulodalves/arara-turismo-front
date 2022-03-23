
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
    <Carousel className="tamanho-carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-tamanho"
          src={Arara}
          alt="First slide"
        />
        <Carousel.Caption>
        <button className="button-sabermais"><Link to={"/sabermais"}>Saber mais</Link></button>
          <p>Aventure-se na natureza.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-tamanho"
          src={Aldeia}
          alt="Second slide"
        />

        <Carousel.Caption>
        <button className="button-sabermais"><Link to={"/sabermais"}>Saber mais</Link></button>
          <p>Conheça animais de diversas espécies.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-tamanho"
          src={Papagaio}
          alt="Third slide"
        />

        <Carousel.Caption>
        <button className="button-sabermais"><Link to={"/sabermais"}>Saber mais</Link></button>
          <p>
            Conheça a cultura dos povos indígenas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;

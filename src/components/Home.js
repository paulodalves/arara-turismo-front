import React from "react";
import { Container } from "react-bootstrap";
import ControlledCarousel from "./ControlledCarousel";

const Home = () => {
  return (
    <div>
      <Container className="container-padd centraliza-conteudo" fluid="md">
        <h1 style={{paddingBottom: "25px"}}>Arara Turismo</h1>
        <ControlledCarousel />
      </Container>
    </div>
  );
};

export default Home;
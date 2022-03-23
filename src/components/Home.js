import React from "react";
import { Container } from "react-bootstrap";
import ControlledCarousel from "./ControlledCarousel";
import Rodape from "./Rodape";

const Home = () => {
  return (
    <div>
      <Container className="container-padd centraliza-conteudo" fluid="md">
        <h1 style={{paddingBottom: "25px"}}>Arara Turismo</h1>
        <ControlledCarousel />
      </Container>
      <Rodape />
    </div>
  );
};

export default Home;
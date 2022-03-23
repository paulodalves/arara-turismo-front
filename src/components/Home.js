import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ControlledCarousel from "./ControlledCarousel";
import Rodape from "./Rodape";

const Home = () => {

  useEffect(() => {
    document.title = "Home | Arara Turismo"
  },[])

  return (
    <div>
      <Container className="container-padd centraliza-conteudo" fluid="sm">
        <h1 style={{paddingBottom: "25px"}}>Arara Turismo</h1>
        <ControlledCarousel />
      </Container>
      <Rodape />
    </div>
  );
};

export default Home;
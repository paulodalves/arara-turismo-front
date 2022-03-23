import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import DestinoDataService from "../services/destino.service";
import "../App.css";

import I from "leaflet";
import { Col, Container, Row } from "react-bootstrap";
import Rodape from "./Rodape";

const center = [-13.834601576065731, -49.31093021847496];

const markerIcon = I.icon({
  iconUrl: require("../images/marker2.png"),
  iconSize: [35, 45],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const Mapa = () => {

  useEffect(() => {
    document.title = "Locais | Arara Turismo"
  },[])

    useEffect(() => {
        retrieveDestinos();
      }, []);
    
      const [destinos, setDestinos] = useState([]);
    
      const retrieveDestinos = () => {
        DestinoDataService.getAll()
          .then((response) => {
            setDestinos(response.data);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      };

  return (
    <div>
      <Container  className="container-padd" fluid="md">
      <Row className="mapa-texto">
      <Col className="titulo-mapa">
          <h1>Nossos Locais</h1>
          <p>Escolha um dos pontos e visite uma aldeia!</p>
      </Col>
      <Col>
      <MapContainer className="mobile-responsive mapa-tamanho ipad-responsive" 
        center={center}
        zoom={4}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=xBRFgljdAAjNFKqBCFLw"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        {destinos.map( (destino, idx) => 
        <Marker 
          position={[destino.latitude, destino.longitude]} 
          icon={markerIcon}
          key={idx}
        >
          <Popup>
          <p><strong>Nome:</strong> {destino.nome}</p>
          <p><strong>Cidade:</strong> {destino.cidade}</p>
          <Link to={"/detalhes/" + destino.id + "/comentarios"}>Detalhes</Link>
          </Popup>
        </Marker>
        )}

      </MapContainer>
      </Col>
      </Row>
      </Container>
      <Rodape />
    </div>
  );
}

export default Mapa;

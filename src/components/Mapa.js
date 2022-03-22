import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import DestinoDataService from "../services/destino.service";
//import "./App.css";
//import cidades from "./cidades.json";

import I from "leaflet";

const center = [-13.834601576065731, -49.31093021847496];

const markerIcon = I.icon({
  iconUrl: require("../images/marker2.png"),
  iconSize: [35, 45],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const Mapa = () => {

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
      <MapContainer
        center={center}
        zoom={4}
        style={{ width: "500px", height: "500px" }}
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
          <Link to={"/detalhes/" + destino.id + "/comentarios"}>{destino.cidade}</Link>
          </Popup>
        </Marker>
        )}

      </MapContainer>
    </div>
  );
}

export default Mapa;
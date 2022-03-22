import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DestinoDataService from "../services/destino.service";

const Detalhes = () => {
  let { id } = useParams();

  useEffect(() => {
    getDestino(id);
  }, [id]);

  const initialDestinoState = {
    id: null,
    cidade: "",
    estado: "",
    bairro: "",
    rua: "",
    numero: "",
    latitude: null,
    longitude: null,
    descricao: "",
  };

  const [currentDestino, setCurrentDestino] = useState(initialDestinoState);

  const getDestino = (id) => {
    DestinoDataService.getById(id)
      .then((response) => {
        setCurrentDestino(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <div className="col-md-6">
        <div>
          <h4>Local de Visita</h4>
          <label>
            <strong>Estado:</strong>
          </label>{" "}
          {currentDestino.estado}
        </div>
        <div>
          <label>
            <strong>Cidade:</strong>
          </label>{" "}
          {currentDestino.cidade}
        </div>
        <div>
          <label>
            <strong>Bairro:</strong>
          </label>{" "}
          {currentDestino.bairro}
        </div>
        <div>
          <label>
            <strong>Rua:</strong>
          </label>{" "}
          {currentDestino.rua}
        </div>
        <div>
          <label>
            <strong>Descrição:</strong>
          </label>{" "}
          {currentDestino.descricao}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Detalhes;

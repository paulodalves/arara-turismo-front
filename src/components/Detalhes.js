import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DestinoDataService from "../services/destino.service";
import ComentarioDataService from "../services/comentario.service";

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

  // comentários
/*
  const [comments, setComments] = useState([]);

  const retrieveComments = () => {
    CommentDataService.getAll(id)
      .then((response) => {
        setComments(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  */

  const initialComentarioState = {
    id: null,
    conteudo: "",
    destino_id: id,
  };

  const [comentario, setComentario] = useState(initialComentarioState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setComentario({ ...comentario, [name]: value });
  };

  // salva comentario
  const salvarComentario = () => {
    var data = {
      conteudo: comentario.conteudo,
      destino_id: comentario.id,
    };

   ComentarioDataService.create(id, data)
      .then((response) => {
        setComentario({
          id: response.data.id,
          conteudo: response.data.conteudo,
          destino_id: response.id,
        });
        setSubmitted(true);
        console.log(response.data);
        console.log(response.id);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const novoComentario = () => {
    setComentario(initialComentarioState);
    setSubmitted(false);
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
      <div>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={novoComentario}>
            Add
          </button>
        </div>
      ) : (
      <div>
        <div className="submit-form">
          <div className="form-group">
            <label htmlFor="content">Comentário</label>
            <input
              type="text"
              className="form-control"
              id="conteudo"
              required
              value={comentario.conteudo}
              onChange={handleInputChange}
              name="conteudo"
            />
          </div>
          <button onClick={salvarComentario} className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
      )}
      </div>


    </div>
  );
};

export default Detalhes;

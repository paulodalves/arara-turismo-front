import axios from "axios";

const API_URL = "http://localhost:3000/api/destino";

const getAll = id => {
    return axios.get(API_URL + "/detalhes/" + id + "/comentarios");
  };
  
  const create = (id, data) => {
    return axios.post(API_URL + "/detalhes/" + id + "/comentarios", data);
  };
  
  const DestinoService = {
    getAll,
    create
  };

  export default DestinoService;
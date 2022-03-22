import axios from "axios";

const API_URL = "http://localhost:3000/api/mapa";

const getAll = () => {
    return axios.get(API_URL + "/destinos");
};

const getById = id => {
  return axios.get(API_URL + "/destinos/" + id);
};

const UserService = {
  getAll,
  getById
}

export default UserService;
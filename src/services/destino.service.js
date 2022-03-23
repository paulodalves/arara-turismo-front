import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/api/mapa";

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
import axios from "axios";

const instance = axios.create({
  baseURL: "http://18.191.179.212:3001",
});

export default instance;

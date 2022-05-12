import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.12.151.154:3001",
});

export default instance;

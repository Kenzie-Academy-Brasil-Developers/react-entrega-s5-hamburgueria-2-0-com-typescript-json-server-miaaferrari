import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueria-api-maria.herokuapp.com",
});

export default api;
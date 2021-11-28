import axios from "axios";

const api = axios.create({ baseURL: "https://projeto-scripts.herokuapp.com" });

export default api;

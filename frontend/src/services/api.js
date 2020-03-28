import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3333' /* aqui é definido a porta padrão a qual toda requisição usando axios atenderá */
});

export default api;
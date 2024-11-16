import axios from "axios";

const API_URL = "https://665730a89f970b3b36c84dc4.mockapi.io";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

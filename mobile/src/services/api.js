import axios from "axios";

const api = axios.create({
  baseURL: "https://4nlnode.mybluemix.net"
});

export default api;

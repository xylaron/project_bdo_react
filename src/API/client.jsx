import axios from "axios";

export const bdoMarketAPI = axios.create({
  baseURL: "https://api.arsha.io/v2/tw/",
});

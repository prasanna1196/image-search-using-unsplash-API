import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID E4fWTmZGF_QEgb9-VeTd2p9P8xhz6jd1L5_PRQ1F9ho",
  },
});

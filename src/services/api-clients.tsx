import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ad5ef5194f9c4a178a32fa2249893bb7",
  },
});

import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  search: (query) => {
    return axios.get(BASEURL + query);
  },
  saveBook: (data) => {
    return axios.post("/api/books", data)
  },
  unsaveBook: (id) => {
    console.log(id)
    return axios.delete("/api/books/" + id)
  },
  library: () => {
    return axios.get("/api/books")
  }
};

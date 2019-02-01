import axios from "axios";

export default {
getUsers: function() {
    return axios.get("/api/users");
  },
getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
saveUser: function(bookData) {
    return axios.post("/api/users", userData);
  },

getitems: function() {
    return axios.get("/api/items");
  },
getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
saveItem: function(bookData) {
    return axios.post("/api/items", userData);
  },
};

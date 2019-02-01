import axios from "axios";

export default {
  getSubs: function() {
    return axios.get("./schema");
  },
  getSub: function(id) {
    return axios.get("./schema" + id);
  },
  deleteSubs: function(id) {
    return axios.delete("./schema" + id);
  },
  saveSubs: function(subsData) {
    return axios.post("./schema", subsData);
  }
}
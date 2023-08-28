import ApiEndpoint from '../config/api-endpoint';
import Axios from '../axios';

const Transactions = {
  async getAll () {
    return await Axios.get(ApiEndpoint.GET_ALL_STORIES);
  },

  async getById (id) {
    return await Axios.get(ApiEndpoint.GET_BY_ID_TRANSACTION(id));
  },

  async store (data) {
    return await Axios.post(ApiEndpoint.STORE_TRANSACTION, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};

export default Transactions;

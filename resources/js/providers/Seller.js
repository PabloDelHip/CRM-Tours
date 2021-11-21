import axios from 'axios'
export default class Seller {
    /**
     * Function to get purchase order
     * @return Promise
     */
    getSeller() {
        return axios.get(`/api/v1/purchase_order/user/sales`);
    }

    getSellerPayment(id, query) {
      return axios.get(`/api/v1/seller/${id}${query}`);
    }

    savePayment(form) {
      return axios.post(`/api/v1/seller/`, form);
    }

    deletePayment(id) {
      return axios.delete(`/api/v1/seller/${id}`);
    }
}


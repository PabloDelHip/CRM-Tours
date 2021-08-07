import axios from 'axios'
export default class PurchaseOrder {
    /**
     * Function to get purchase order
     * @return Promise
     */
    getById(id_purchase) {
        return axios.get(`/api/v1/purchase_order/find/${id_purchase}`);
    }

    getList() {
        return axios.get(`/api/v1/purchase_order/find`);
    }

    create(formData) {
        return axios.post(`/api/v1/purchase_order/create`, formData);
    }

    update(formData, id) {
        return axios.put(`/api/v1/purchase_order/update/${id}`, formData);
    }
}


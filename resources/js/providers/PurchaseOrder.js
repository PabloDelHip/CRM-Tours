import axios from 'axios'
export default class PurchaseOrder {
    /**
     * Function to get purchase order
     * @return Promise
     */
    getList() {
        return axios.get(`/api/v1/purchase_order/find`);
    }
}
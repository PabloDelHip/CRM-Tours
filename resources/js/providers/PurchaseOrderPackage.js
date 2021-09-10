import axios from 'axios'
export default class PurchaseOrderPackage {
    /**
     * Function to get purchase order
     * @return Promise
     */
    find(id) {
        return axios.get(`/api/v1/purcharse_order_package/${id}`);
    }
}


import axios from 'axios'
export default class Vendor {
    
    getVendorList () {
        return axios.get(`/api/v1/vendors/list`)

    }

    getVendor (id) {
        return axios.get(`/api/v1/vendors/get/${id}`)

    }

    deleteVendor (id_vendor) {
        return axios.delete(`/api/v1/vendors/delete/${id_vendor}`)

    }
}
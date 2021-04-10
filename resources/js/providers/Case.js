import axios from 'axios'
export default class Case {
    
    /**
     * Function to SaveCase
     * @return Promise
     */
     createCase (formData) {
        return axios.post(`/api/v1/cases/create`, formData)
    }

    /**
     * Function to getCasesVendors
     * @return Promise
     */
    getListCaseVendor ($id_vendor) {
        return axios.get(`/api/v1/cases/get/vendor/${$id_vendor}`)
    }

}
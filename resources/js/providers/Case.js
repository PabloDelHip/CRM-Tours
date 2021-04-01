import axios from 'axios'
export default class Case {
    
    /**
     * Function to SaveCase
     * @return Promise
     */
     createCase (formData) {
        return axios.post(`/api/v1/cases/create`, formData)
    }

}
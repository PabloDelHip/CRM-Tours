import axios from 'axios'
export default class User {

    /**
     * Function to Get current user
     * @return Promise
     */
    getCurrentUser() {
        return axios.get(`/api/v1/users/current`)
    }

    post(formData) {
        return axios.post(`/api/v1/users`, formData);
    }
}
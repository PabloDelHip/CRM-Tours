import axios from 'axios'
export default class User {

    /**
     * Function to Get current user
     * @return Promise
     */
    getCurrentUser() {
        return axios.get(`/api/v1/users/current`)
    }

    getUser(id) {
        return axios.get(`/api/v1/users/get/${id}`)
    }

    updateUser(id, formData) {
        return axios.put(`/api/v1/users/put/${id}`, formData);
    }

    getUsers() {
        return axios.get(`/api/v1/users/get`)
    }

    getAllUsers(id) {
        return axios.get(`/api/v1/users/obtener/${id}`)
    }

    deleteUsers(id) {
        return axios.get(`/api/v1/users/delete/${id}`)
    }

    showUsers() {
            return axios.get(`/api/v1/users/show`)
        }
        /**
         * Function to Restore Password
         * @return Promise
         */
    restorePassword($email) {
        return axios.post(`/api/v1/users/restore-password`, $email)
    }

    /**
     * Function to Get Token Password
     * @return Promise
     */
    validateTokenPassword($token) {
        return axios.get(`/api/v1/users/get-token-password/${$token}`)
    }

    /**
     * Function to Update Password
     * @return Promise
     */
    updatePassword(token, formData) {
        return axios.put(`/api/v1/users/update-password/${token}`, formData)
    }

    post(formData) {
        return axios.post(`/api/v1/users/create`, formData);
    }
}
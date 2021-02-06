export default class User {

    /**
     * Function to Get current user
     * @return Promise
     */
    getCurrentUser () {
        return axios.get(`api/v1/users/current`)
    }
    getUsers () {
        return axios.get(`api/v1/users/get`)
    }
    deleteUsers (id) {
        return axios.get(`api/v1/users/delete/${id}`)
    }
    showUsers () {
        return axios.get(`api/v1/users/show`)
    } 
}
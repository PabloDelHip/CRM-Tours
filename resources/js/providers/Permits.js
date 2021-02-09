import axios from 'axios'
export default class Permits {

    /**
     * Function to Get current user
     * @return Promise
     */

    permitsUsers(id) {
        return axios.get(`/api/v1/users/permits/${id}`)
    }

}
import axios from 'axios'
export default class Profile {
    /**
     * Function to get profile of user
     * @return Promise
     */
    getProfile(id) {
        return axios.get(`/api/v1/profile/${id}`)
    }

    createProfile(formData) {
        return axios.post(`/api/v1/profile/create`, formData)
    }
}
import axios from 'axios'
export default class Contact {
    /**
     * Function to get profile of user
     * @return Promise
     */
    getContact(id) {
        return axios.get(`/api/v1/contact/${id}`)
    }

    createContact(formData) {
        return axios.post(`/api/v1/contact/create`, formData)
    }
}
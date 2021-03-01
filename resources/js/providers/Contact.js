import axios from 'axios'
export default class Contact {
    /**
     * Function to get Contact of user
     * @return Promise
     */
    getContact(id) {
        return axios.get(`/api/v1/contact/${id}`)
    }

    createContact(formData) {
        return axios.post(`/api/v1/contact/create`, formData)
    }

    updateContact(id, formData) {
        return axios.put(`/api/v1/contact/update/${id}`, formData);
    }
}
import axios from 'axios'
export default class Tour {

    getTours() {
        console.log('Buscanbdo')
        return axios.get(`/api/v1/tours/get`)
    }

    getTour(id) {
        return axios.get(`/api/v1/tours/get/${id}`)
    }

    createTour(formData) {
        return axios.post(`/api/v1/tours/create`, formData);
    }

    updateTour(id, formData) {
        return axios.put(`/api/v1/tours/put/${id}`, formData);
    }
}
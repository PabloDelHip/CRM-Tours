import axios from "axios";
export default class SeoTour {
    getByTourId(id) {
        return axios.get(`/api/v1/tours/seotours/getbytourid/${id}`);
    }

    createSeoTour(formData) {
        return axios.post(`/api/v1/tours/seotours/create`, formData);
    }

    updateSeoTour(id, formData) {
        return axios.put(`/api/v1/tours/seotours/put/${id}`, formData);
    }
}
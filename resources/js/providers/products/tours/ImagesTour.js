import axios from "axios";
export default class ImagesTour {
    getByTourId(id) {
        return axios.get(`/api/v1/tours/images/getbytourid/${id}`);
    }

    viewImage(slug) {
        return axios.get(`/api/v1/tours/images/${slug}`);
    }

    createImagesTour(formData) {
        return axios.post(`/api/v1/tours/images/create`, formData);
    }

    updateImagesTour(id, formData) {
        return axios.put(`/api/v1/tours/images/put/${id}`, formData);
    }
}
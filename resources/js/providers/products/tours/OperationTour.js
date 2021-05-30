import axios from "axios";
export default class OperationTour {
    getByTourId(id) {
        return axios.get(`/api/v1/tours/operationtour/getbytourid/${id}`);
    }

    createOperationTour(formData) {
        return axios.post(`/api/v1/tours/operationtour/create`, formData);
    }

    updateOperationTour(id, formData) {
        return axios.put(`/api/v1/tours/operationtour/put/${id}`, formData);
    }
}
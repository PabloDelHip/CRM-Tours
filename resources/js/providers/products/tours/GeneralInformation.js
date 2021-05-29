import axios from "axios";
export default class GeneralInformation {
    getByTourId(id) {
        return axios.get(`/api/v1/tours/generalinformation/getbytourid/${id}`);
    }

    createGeneralInformation(formData) {
        return axios.post(`/api/v1/tours/generalinformation/create`, formData);
    }

    updateGeneralInformation(id, formData) {
        return axios.put(`/api/v1/tours/generalinformation/put/${id}`, formData);
    }
}
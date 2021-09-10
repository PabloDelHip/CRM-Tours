import axios from 'axios'
export default class Packages {
  create(formData) {
    return axios.post(`/api/v1/package`, formData);
  }

  update(id,formData) {
    return axios.put(`/api/v1/package/${id}`, formData);
  }

  findAll() {
    return axios.get(`/api/v1/package`);
  }

  find(id) {
    return axios.get(`/api/v1/package/${id}`)
  }

  addTour(formData) {
    return axios.post(`/api/v1/package/add-tour`, formData);
  }

  findPackageTour(idPackage) {    
    return axios.get(`/api/v1/package/${idPackage}/tours`);
  }

  deleteTour(idTour, idPackage) { 
    return axios.delete(`/api/v1/package/tour/${idTour}/${idPackage}`);
  }

  findPackageTour(id) {
    return axios.get(`/api/v1/package/${id}/tours`);
  }
}
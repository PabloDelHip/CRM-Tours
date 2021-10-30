import axios from 'axios'
export default class Finanzas {

    getTypeChange () {
        return axios.get(`/api/v1/finanzas/type-change/get`);
    }

    putTypeChange(formData) {
      return axios.put(`/api/v1/finanzas/type-change/put`, formData);
    }

}
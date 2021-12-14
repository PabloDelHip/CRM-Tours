import axios from "axios";
export default class Categorie {
    getListCategories() {
        return axios.get(`/api/v1/categorie/private/get`);
    }

    updateCategorieStatus(id_categorie,formData) {
        return axios.put(`/api/v1/categorie/private/${id_categorie}/tour`, formData);
    }

    updateCategorieAll(id_categorie,formData) {
        return axios.put(`/api/v1/categorie/private/${id_categorie}/tour/all`, formData);
    }

    getCategorie(id_categorie) {
        return axios.get(`/api/v1/categorie/private/${id_categorie}`);
    }

    saveCategorie(formData) {
        return axios.post(`/api/v1/categorie/private/save`, formData)
    }
}
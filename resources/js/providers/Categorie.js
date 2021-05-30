import axios from "axios";
export default class Categorie {
    getListCategories() {
        return axios.get(`/api/v1/categorie/private/get`);
    }

    updateCategorieStatus(id_categorie,formData) {
        return axios.put(`/api/v1/categorie/private/${id_categorie}/tour`, formData);
    }
}
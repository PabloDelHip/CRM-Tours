<template>
  <div>
    <ValidationObserver ref="observer">
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="name">Nombre</label>
            <ValidationProvider rules="required" name="nombre" v-slot="{ errors }">
              <input
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Nombre del Tour"
              />
              <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label for="web">Sitio web</label>
            <div class="input-group mb-12">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-link"></i></span>
              </div>
              <input
                type="text"
                class="form-control"
                v-model="url"
                placeholder="https://www.google.com/"
              />
            </div>
          </div>
        </div>
        <!--<div class="form-group col-5 info-box" style="text-align: center">
          <input
            type="file"
            class="custom-file-input"
            @change="onFileChange"
            accept="image/*"
            style="display: none"
            ref="imageFile"
          />
          <div class="position-relative">
            <img
              :src="imagePreview"
              class="img-fluid"
              alt="User Avatar"
              @click="$refs.imageFile.click()"
              :style="'cursor: pointer'"
              style="width= 155px;height= auto;max-height: 155px;max-width: 155px;"
            />
          </div>
        </div> -->
      </div>
      <div class="form-group">
        <label for="name">Precio adulto</label>
        <ValidationProvider
          rules="required|numeric"
          name="Precio adulto"
          v-slot="{ errors }"
        >
          <input
            type="text"
            class="form-control"
            v-model="adult_price"
            placeholder="$0.00"
          />
          <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
            errors[0]
          }}</span>
        </ValidationProvider>
      </div>
      <div class="form-group">
        <div class="form-group">
          <label for="name">Precio niño</label>
          <ValidationProvider
            rules="required|numeric"
            name="Precio niño"
            v-slot="{ errors }"
          >
            <input
              type="text"
              class="form-control"
              v-model="child_price"
              placeholder="$0.00"
            />
            <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
              errors[0]
            }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group" v-show="id != null">
        <label>Estatus Paquete</label>
        <select class="form-control" v-model.number="status">
          <option value="0">Inactivo</option>
          <option value="1">Activo</option>
        </select>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import Vendor from "../../../providers/Vendor";
import Tour from "../../../providers/products/tours/Tour";
import Packages from "../../../providers/Packages";
import CategorieTours from "../../../providers/Categorie";

import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const VendorResource = new Vendor();
const TourResource = new Tour();
const CategorieToursResource = new CategorieTours();
const PackagesResource = new Packages();

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    id: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      name: null,
      url: null,
      status: 0,
      adult_price: 0,
      child_price: 0,
      picture: null,
      imagePreview: "https://www.brang.mx/admin/img/productos/47/default.png",

      tour: null,
      newPaquete: false,
    };
  },
  async created() {
    this.newPaquete = this.id == null || this.id == undefined;
    if (!this.newPaquete) {
      await this.getTour();
    }
    await this.getVendors();
    await this.getCategories();
  },
  watch: {
    id: function (val) {
      this.newPaquete = this.id == null || this.id == undefined;
    },
  },
  methods: {
    async editPackage(id) {
     try {
       let formData = this.getPackage();
      await PackagesResource.update(id, formData);
      this.$swal.fire({
            icon: 'success',
            title: 'Bien',
            toast: true,
            position: 'top',
            timer: 3000,
            showConfirmButton: false,
            timerProgressBar: true,
            text: 'Paquete Editado de forma correcta',
        })
     } catch (error) {
      alert('Error al editar información'); 
     }
    },
    async getdataPaquete(id) {
      const { data: {data} } = await PackagesResource.find(id);
      this.name = data.name;
      this.url = data.url;
      this.adult_price = data.adult_price;
      this.child_price = data.child_price;
    },
    async getCategories() {
      const {
        data: { data },
      } = await CategorieToursResource.getListCategories();
      this.categories = data;
      console.log(this.categories);
    },
    viewImage(slug) {
      const image = slug.split("/");
      return `/api/v1/tours/images/${image[5]}`;
    },
    async onFileChange(event) {
      this.picture = event.target.files[0];
      console.log(this.picture)
      let reader = new FileReader();
      await reader.addEventListener(
        "load",
        function () {
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(event.target.files[0]);
    },
    getPackage() {
      return {
        name: this.name,
        url: this.url,
        status: this.status,
        adult_price: this.adult_price,
        child_price: this.child_price,
        url_image: this.imagePreview,
      };
    },
    async getTour() {
      var response = (await TourResource.getTour(this.id)).data;
      if (!response.success) {
        return false;
      }
      this.tour = response.data;

      this.name = this.tour.name;
      this.assitedPurchace = parseInt(this.tour.assisted_purchase);
      this.url = this.tour.url;
      this.statusTour = parseInt(this.tour.status);
      this.vendorId = parseInt(this.tour.vendor_id);
      this.categoriaId = parseInt(this.tour.categoria);
      if (this.tour.url_image) {
        this.imagePreview = this.tour.url_image;
      }

      this.$emit("get-name", this.name);
    },
    async getVendors() {
      var response = (await VendorResource.getVendorList()).data;
      if (response.success) {
        this.vendors = response.data;
      }
    },
    async isValidForm() {
      return await this.$refs.observer.validate();
    },
    async savePaquete() {
      let formData = this.getPackage();
      var response = (await PackagesResource.create(formData)).data;
      return response;

      /* var response = null;

      let formData = this.getTourForm();
      if (this.newTour) {
        response = await this.saveNewTour(formData);
      } else {
        response = await this.saveEditTour(formData);
      }
      return response; */
    },
    async saveNewTour(formData) {
      var response = (await TourResource.createTour(formData)).data;
      return response;
    },
    async saveEditTour(formData) {
      var response = (await TourResource.updateTour(this.id, formData)).data;
      return response;
    },
  },
};
</script>

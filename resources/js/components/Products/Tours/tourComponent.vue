<template>
  <div>
    <ValidationObserver v-slot="{ invalid, validate }" ref="observer">
      <div class="form-group">
        <label for="name">Nombre</label>
        <ValidationProvider rules="required" name="nombre" v-slot="{ errors }">
          <input
            type="text"
            class="form-control"
            v-model="name"
            placeholder="Nombre del Tour"
          />
          <span
            :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
            >{{ errors[0] }}</span
          >
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
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="assitedPurchace"
          v-model.number="assitedPurchace"
        />
        <label class="custom-control-label" for="assitedPurchace">
          Compra asistida
        </label>
      </div>
      <div class="form-group">
        <label>Agencia</label>
        <ValidationProvider rules="required" name="agencia" v-slot="{ errors }">
          <select class="form-control" v-model.number="vendorId">
            <option
              v-for="vendor in vendors"
              :value="vendor.id"
              :key="vendor.id"
            >
              {{ vendor.name }}
            </option>
          </select>
          <span
            :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
      </div>
      <div class="form-group" v-show="id != null">
        <label>Estatus del tour</label>
        <select class="form-control" v-model.number="statusTour">
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

import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const VendorResource = new Vendor();
const TourResource = new Tour();

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
      assitedPurchace: false,
      url: null,
      statusTour: 1,
      vendorId: null,

      tour: null,
      newTour: false,
      vendors: [],
    };
  },
  async created() {
    this.newTour = this.id == null || this.id == undefined;
    if (!this.newTour) {
      await this.getTour();
    }
    await this.getVendors();
  },
  watch: {
    id: function(val) {
      this.newTour = this.id == null || this.id == undefined;
    },
  },
  methods: {
    getTourForm() {
      return {
        name: this.name,
        assisted_purchase: this.assitedPurchace,
        url: this.url,
        status: +this.statusTour,
        vendor_id: +this.vendorId,
      };
    },
    async getTour() {
      var response = (await TourResource.getTour(this.id)).data;
      if (!response.success) {
        return false;
      }
      this.tour = response.data;

      this.name = this.tour.name;
      this.assitedPurchace = this.tour.assisted_purchase;
      this.url = this.tour.url;
      this.statusTour = this.tour.status;
      this.vendorId = this.tour.vendor_id;

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
    async saveTour() {
      var response = null;

      let formData = this.getTourForm();

      if (this.newTour) {
        response = await this.saveNewTour(formData);
      } else {
        response = await this.saveEditTour(formData);
      }
      return response;
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

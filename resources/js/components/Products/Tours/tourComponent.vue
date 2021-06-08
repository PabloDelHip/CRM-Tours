<template>
  <div>
    <ValidationObserver ref="observer">
      <div class="row">
        <div class="col-7">
          <div class="form-group">
            <label for="name">Nombre</label>
            <ValidationProvider
              rules="required"
              name="nombre"
              v-slot="{ errors }"
            >
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
                <span class="input-group-text"
                  ><i class="fas fa-link"></i
                ></span>
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
        <div class="form-group col-5 info-box" style="text-align:center">
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
              v-bind:src="imagePreview"
              class="img-fluid"
              alt="User Avatar"
              @click="$refs.imageFile.click()"
              :style="'cursor: pointer'"
              style="width= 155px;height= auto;max-height: 155px;max-width: 155px;"
            />
          </div>
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

      // Tour
      picture: null,
      imagePreview: "/img/default-image.png",

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
    onFileChange(event) {
      this.picture = event.target.files[0];

      if (
        !this.picture ||
        !/\.(jpe?g|png|gif)$/i.test(this.picture.name) ||
        this.picture.size / 1024 / 1024 > 2
      ) {
        this.picture = null;
        return;
      }
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.picture);
    },
    getTourForm() {
      return {
        name: this.name,
        assisted_purchase: this.assitedPurchace,
        url: this.url,
        status: +this.statusTour,
        vendor_id: +this.vendorId,
        url_image:
          this.picture == null ||
          (this.tour == null || this.tour.url_image == this.imagePreview)
            ? null
            : this.imagePreview,
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

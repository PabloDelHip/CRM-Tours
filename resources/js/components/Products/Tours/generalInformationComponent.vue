<template>
  <div>
    <ValidationObserver v-slot="{ invalid, validate }" ref="observer">
      <div class="form-group">
        <label>Descripción</label>
        <textarea
          id="informacion_general"
          rows="5"
          class="form-control"
          placeholder="Enter ..."
          v-model="description"
        ></textarea>
      </div>
      <div class="form-group">
        <label>Recomendaciones</label>
        <textarea
          id="recomendaciones"
          rows="5"
          class="form-control"
          placeholder="Enter ..."
          v-model="recommendation"
        ></textarea>
      </div>
      <div class="form-group">
        <label>Incluido</label>
        <textarea
          id="incluido"
          rows="5"
          class="form-control"
          placeholder="Enter ..."
          v-model="includes"
        ></textarea>
      </div>
      <div class="form-group">
        <label>Itinerario</label>
        <textarea
          id="itinerario"
          rows="5"
          class="form-control"
          placeholder="Enter ..."
          v-model="itinerary"
        ></textarea>
      </div>
      <div class="form-group">
        <label>Información adicional</label>
        <textarea
          id="informacion_adicional"
          rows="5"
          class="form-control"
          placeholder="Enter ..."
          v-model="additionalInformation"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="name">Duración</label>
        <ValidationProvider
          rules="required"
          name="duración"
          v-slot="{ errors }"
        >
          <input
            type="text"
            class="form-control"
            v-model="duration"
            placeholder="Duración..."
          />
          <span
            :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
            >{{ errors[0] }}</span
          >
        </ValidationProvider>
      </div>
      <div class="form-group">
        <label for="name">Calificación</label>
        <input
          type="number"
          min="0"
          class="form-control no-arrow"
          v-model.number="qualification"
          placeholder="Calificación..."
        />
      </div>
    </ValidationObserver>
  </div>
</template>
<script>
import GeneralInformation from "../../../providers/products/tours/GeneralInformation";

import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const GeneralInformationResource = new GeneralInformation();

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    idTour: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      description: null,
      recommendation: null,
      includes: null,
      itinerary: null,
      additionalInformation: null,
      duration: null,
      qualification: 0,

      id: null,
      newGeneralInformation: false,
      generalInformation: null,
    };
  },
  async mounted() {
    $("#informacion_general").summernote();
    $("#recomendaciones").summernote();
    $("#incluido").summernote();
    $("#itinerario").summernote();
    $("#informacion_adicional").summernote();

    
    await this.getGeneralInformation();
    $("#informacion_general").summernote("code", this.description);
    $("#recomendaciones").summernote("code", this.recommendation);
    $("#incluido").summernote("code", this.includes);
    $("#itinerario").summernote("code", this.itinerary);
    $("#informacion_adicional").summernote("code", this.additionalInformation);
  },
  watch: {
    id: function(val) {
      this.newGeneralInformation = this.id == null;
    },
  },
  methods: {
    getGeneralInformationForm() {
      return {
        description: $("#informacion_general").summernote("code"),
        recommendation: $("#recomendaciones").summernote("code"),
        includes: $("#incluido").summernote("code"),
        itinerary: $("#itinerario").summernote("code"),
        additional_information: $("#informacion_adicional").summernote("code"),
        duration: this.duration,
        qualification: +this.qualification,
        tour_id: +this.idTour,
      };
    },
    async getGeneralInformation() {
      var response = (await GeneralInformationResource.getByTourId(this.idTour))
        .data;
      if (!response.success) {
        return false;
      }
      if (response.data == null) {
        this.newGeneralInformation = true;
        return;
      }
      this.generalInformation = response.data;

      this.id = this.generalInformation.id;
      this.description = this.generalInformation.description;
      this.recommendation = this.generalInformation.recommendation;
      this.includes = this.generalInformation.includes;
      this.itinerary = this.generalInformation.itinerary;
      this.additionalInformation = this.generalInformation.additional_information;
      this.duration = this.generalInformation.duration;
      this.qualification = this.generalInformation.qualification;
    },
    async isValidForm() {
      return await this.$refs.observer.validate();
    },
    async saveGeneralInformation() {
      var response = null;

      let formData = this.getGeneralInformationForm();

      if (this.newGeneralInformation) {
        response = await this.saveNewGeneralInformation(formData);
      } else {
        response = await this.saveEditGeneralInformation(formData);
      }
      if (response.success) {
        this.id = response.data.id;
      }
      return response;
    },
    async saveNewGeneralInformation(formData) {
      var response = (
        await GeneralInformationResource.createGeneralInformation(formData)
      ).data;
      return response;
    },
    async saveEditGeneralInformation(formData) {
      var response = (
        await GeneralInformationResource.updateGeneralInformation(
          this.id,
          formData
        )
      ).data;
      return response;
    },
  },
};
</script>

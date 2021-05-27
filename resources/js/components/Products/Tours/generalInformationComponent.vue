<template>
  <div>
    <div class="form-group">
      <label>Descripción</label>
      <textarea
        rows="5"
        class="form-control"
        placeholder="Enter ..."
        v-model="description"
      ></textarea>
    </div>
    <div class="form-group">
      <label>Recomendaciones</label>
      <textarea
        rows="5"
        class="form-control"
        placeholder="Enter ..."
        v-model="recommendation"
      ></textarea>
    </div>
    <div class="form-group">
      <label>Incluido</label>
      <textarea
        rows="5"
        class="form-control"
        placeholder="Enter ..."
        v-model="includes"
      ></textarea>
    </div>
    <div class="form-group">
      <label>Itinerario</label>
      <textarea
        rows="5"
        class="form-control"
        placeholder="Enter ..."
        v-model="itinerary"
      ></textarea>
    </div>
    <div class="form-group">
      <label>Información adicional</label>
      <textarea
        rows="5"
        class="form-control"
        placeholder="Enter ..."
        v-model="additionalInformation"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="name">Duración</label>
      <input
        type="text"
        class="form-control"
        v-model="duration"
        placeholder="Duración..."
      />
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
  </div>
</template>
<script>
import GeneralInformation from "../../../providers/products/tours/GeneralInformation"

const GeneralInformationResource = new GeneralInformation();

export default {
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
  async mounted(){
    await this.getGeneralInformation();
  },
  methods:{
    getGeneralInformationForm(){
      return {
        description: this.description,
        recommendation: this.recommendation,
        includes: this.includes,
        itinerary: this.itinerary,
        additional_information: this.additionalInformation,
        duration: this.duration,
        qualification: +this.qualification,
        tour_id: +this.idTour,
      }
    },
    async getGeneralInformation() {
      var response = (await GeneralInformationResource.getByTourId(this.idTour)).data;
      if (!response.success) {
        return false;
      }
      if (response.data == null){
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
    async saveGeneralInformation() {
      var response = null;

      let formData = this.getGeneralInformationForm();
      
      if (this.newGeneralInformation) {
        response = await this.saveNewGeneralInformation(formData);
      } else {
        response = await this.saveEditGeneralInformation(formData);
      }
      if (response.success){
        this.id = response.data.id;
      }
      return response;
    },
    async saveNewGeneralInformation(formData) {
      var response = (await GeneralInformationResource.createGeneralInformation(formData)).data;
      return response;
    },
    async saveEditGeneralInformation(formData) {
      var response = (await GeneralInformationResource.updateGeneralInformation(this.id, formData)).data;
      return response;
    },
  },
}
</script>
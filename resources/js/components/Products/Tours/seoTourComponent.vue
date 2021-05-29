<template>
  <div>
    <div class="form-group">
      <label for="name">Palabras clave</label>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Keywords"
          v-model="keywordTemporal"
        />
        <div class="input-group-append">
          <input type="button" class="btn btn-success" @click="()=>{if (keywordTemporal.length < 1) return;keywords.push(keywordTemporal);keywordTemporal = '';}" value="+">
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button type="button" class="btn btn-default btn-sm" style="margin: 10px 10px 0px 10px;"
          v-for="(keyword, index) in keywords" :key="index + 'keyword'"
          @click="keywords.splice(index, 1)">
            {{ keyword }}
          </button>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label>Meta descripción</label>
      <textarea
        rows="5"
        class="form-control"
        placeholder="Enter ..."
        v-model="metaDescription"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="name">Título</label>
      <input
        type="text"
        class="form-control"
        v-model="title"
        placeholder="Título..."
      />
    </div>
    <div class="form-group">
      <label>Descripción</label>
      <textarea
        rows="5"
        class="form-control"
        placeholder="Enter ..."
        v-model="description"
      ></textarea>
    </div>
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="seeHome"
        v-model.number="seeHome"
      />
      <label class="custom-control-label" for="seeHome">
        See home
      </label>
    </div>
  </div>
</template>
<script>
import SeoTour from "../../../providers/products/tours/SeoTours"

const SeoTourResource = new SeoTour();

export default {
  props: {
    idTour: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      keywords: [],
      metaDescription: null,
      title: null,
      description: null,
      seeHome: false,

      keywordTemporal: "",

      id: null,
      newSeoTour: false,
      seoTour: null,
    };
  },
  async mounted(){
    await this.getSeoTour();
  },
  watch: {
    id: function(val) {
      this.newSeoTour = this.id == null;
    },
  },
  methods:{
    getSeoTourForm(){
      return {
        keywords: this.keywords.join("|"),
        meta_description: this.metaDescription,
        title: this.title,
        description: this.description,
        see_home: +this.seeHome,
        tour_id: +this.idTour,
      }
    },
    async getSeoTour() {
      var response = (await SeoTourResource.getByTourId(this.idTour)).data;
      if (!response.success) {
        return false;
      }
      if (response.data == null){
        this.newSeoTour = true;
        return;
      }
      this.seoTour = response.data;

      this.id = this.seoTour.id;
      this.keywords = this.seoTour.keywords == null ? [] : this.seoTour.keywords.split("|");;
      this.metaDescription = this.seoTour.meta_description;
      this.title = this.seoTour.title;
      this.description = this.seoTour.description;
      this.seeHome = this.seoTour.see_home;
    },
    async saveSeoTour() {
      var response = null;

      let formData = this.getSeoTourForm();
      
      if (this.newSeoTour) {
        response = await this.saveNewSeoTour(formData);
      } else {
        response = await this.saveEditSeoTour(formData);
      }
      if (response.success){
        this.id = response.data.id;
      }
      return response;
    },
    async saveNewSeoTour(formData) {
      var response = (await SeoTourResource.createSeoTour(formData)).data;
      return response;
    },
    async saveEditSeoTour(formData) {
      var response = (await SeoTourResource.updateSeoTour(this.id, formData)).data;
      return response;
    },
  },
};
</script>

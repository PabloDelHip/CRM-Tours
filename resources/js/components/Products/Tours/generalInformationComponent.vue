<template>
  <div>
    <div class="form-group">
      <label>Descripcrión</label>
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
export default {
  props: {
    idTour: {
      type: Number,
      required: false,
    },
    // idTour:{
    //   type: Number,
    //   required: true,
    // }
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
    };
  },
}
</script>
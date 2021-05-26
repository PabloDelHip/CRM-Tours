<template>
  <div>
    <div class="form-group">
      <label for="name">Palabras clave</label>
      <input
        type="text"
        class="form-control"
        v-model="keywords"
        placeholder="Keywords"
      />
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
      keywords: null,
      metaDescription: null,
      title: null,
      description: null,
      seeHome: false,
    };
  },
};
</script>

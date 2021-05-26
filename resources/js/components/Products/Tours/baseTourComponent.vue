<template>
  <div>
    <div class="form-group">
      <label for="name">Nombre</label>
      <input
        type="text"
        class="form-control"
        v-model="name"
        placeholder="Nombre del Tour"
      />
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
      <label>Estatus del tour</label>
      <select class="form-control" v-model.number="statusTour">
        <option value="0">Inactivo</option>
        <option value="1">Activo</option>
      </select>
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
    // idVendor:{
    //   type: Number,
    //   required: true,
    // }
  },
  data() {
    return {
      name: null,
      assitedPurchace: false,
      url: null,
      statusTour: null,
    };
  },
  watch: {
    idTour: function(val) {
      this.newTour = this.idTour == null;
    },
  },
  methods: {},
};
</script>

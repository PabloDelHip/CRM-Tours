<template>
  <div>
    <modal
      name="tour-modal-form"
      :style="{ padding: '100px 0px 30px' }"
      :width="'60%'"
      :height="'auto'"
      :scrollable="true"
    >
      <div class="modal-body" style="padding: 0px;">
        <div class="card card-primary" style="margin: 0px;">
          <div class="card-header">
            <h3 class="card-title">Agregar nuevo tour</h3>
          </div>
          <div class="card-body">
            <tour-component ref="tourComponent"></tour-component>
            <button type="button" @click="saveContent" class="btn btn-primary">
              Crear tour
            </button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import tourComponent from "./tourComponent.vue";
export default {
  components: { tourComponent },
  props: {
    openModal: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    openModal() {
      this.openModalForm();
    },
  },
  methods: {
    openModalForm() {
      this.$modal.show("tour-modal-form");
    },
    async saveContent() {
      if (!(await this.$refs.tourComponent.isValidForm())) {
        this.showWarning("Hay campos faltantes en el formulario.");
        return;
      }

      try {
        const saveTourResponse = await this.$refs.tourComponent.saveTour();
        if (!saveTourResponse.success) {
          throw saveTourResponse.err;
        }
      } catch (ex) {
        console.error(ex);
        this.showError("Error al guardar información del tour.");
        return;
      }
      this.$router.push({
        name: "editTour",
        params: { id: +tourResponse.data.id },
      });
    },
    showWarning(message) {
      this.showMessage(message, "warning");
    },
    showError(message) {
      this.showMessage(message, "error");
    },
    showSuccess(message) {
      this.showMessage(message, "success");
    },
    showMessage(message, type) {
      this.$swal.fire({
        icon: type,
        title: "Oops...",
        toast: true,
        position: "top",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        text: message,
      });
    },
  },
};
</script>

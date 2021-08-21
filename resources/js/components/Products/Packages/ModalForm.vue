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
            <h3 class="card-title">Agregar nuevo paquete</h3>
          </div>
          <div class="card-body">
            <form-create-component ref="paqueteComponent"></form-create-component>
            <button type="button" @click="saveContent" class="btn btn-primary">
              Crear Paquete
            </button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import FormCreateComponent from "./FormCreateComponent";
export default {
  components: { FormCreateComponent },
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
      if (!(await this.$refs.paqueteComponent.isValidForm())) {
        this.showWarning("Hay campos faltantes en el formulario.");
        return;
      }

      let paqueteResponse = null;
      try {
        paqueteResponse = await this.$refs.paqueteComponent.savePaquete();
      } catch (ex) {
        console.error(ex);
        this.showError("Error al guardar información del tour.");
        return;
      }
      
      this.$router.push({
        name: "EditPackageView",
        params: { id: paqueteResponse.data.id },
      });
    },
    showWarning(message) {
      this.showMessage("Atención!", message, "warning");
    },
    showError(message) {
      this.showMessage("Oops...", message, "error");
    },
    showSuccess(message) {
      this.showMessage("Bien!!", message, "success");
    },
    showMessage(title, message, type) {
      this.$swal.fire({
        icon: type,
        title: title,
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

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
            <base-tour-component ref="baseTourComponent"></base-tour-component>
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
import baseTourComponent from "./tourComponent.vue";
export default {
  components: { baseTourComponent },
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
      var tourResponse = await this.$refs.baseTourComponent.saveTour();
      if (!tourResponse.success) {
        return;
      }
      this.$router.push({
        name: "editTour",
        params: { id: +tourResponse.data.id },
      });
    },
  },
};
</script>

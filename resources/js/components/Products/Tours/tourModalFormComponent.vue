<template>
  <div>
    <modal
      name="tour-modal-form"
      :style="{ padding: '100px 0px 30px' }"
      :width="'60%'"
      :height="'auto'"
      :scrollable="true"
    >
      <div class="modal-body">
        <base-tour-component
          ref="baseTourComponent"
        ></base-tour-component>
        <router-link :to="{ name: 'createTour' }">
                  Home
                </router-link>
        <!-- <button type="button" @click="saveContent()" class="btn btn-primary">
          Crear tour
        </button> -->
      </div>
    </modal>
  </div>
</template>

<script>
import baseTourComponent from '../../../components/Products/Tours/baseTourComponent.vue';
export default {
  components: { baseTourComponent },
  props:{
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
      this.$modal.show('tour-modal-form')
    },
  }
}
</script>
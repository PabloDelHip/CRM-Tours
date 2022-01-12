<template>
  <!-- Main content -->
  <div class="col-12">
    <edit-component :id="idCategoria"></edit-component>
  </div>
</template>

<script>

import EditComponent from '../../../components/Categories/Tours/EditComponent';
export default {
  props: {
    id: {
      type: String,
      required: false,
      default:"10"
    },
  },
  components: {
    EditComponent,
  },
  computed: {
    idCategoria() {
      return this.$route.params.id;
    }
  }
};
</script>

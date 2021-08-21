<template>
  <!-- Main content -->
  <div class="col-12">
    <edit-component :idPaquete="id"></edit-component>
  </div>
</template>

<script>
import EditComponent from '../../../components/Products/Packages/EditComponent';
export default {
  props: ['id'],
  components: {
    EditComponent,
  },
};
</script>
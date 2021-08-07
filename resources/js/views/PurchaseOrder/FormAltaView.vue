<template>
  <!-- Main content -->
  <div class="col-12">
    <form-alta-component :id_purchase_order="id_purchase_order"></form-alta-component>
  </div>
</template>

<script>
import FormAltaComponent from '../../components/PurchaseOrder/FormAltaComponent';
export default {
  props: {
    id_purchase_order: {
      default: ''
    },
  },
  components: {
    FormAltaComponent,
  },
};
</script>
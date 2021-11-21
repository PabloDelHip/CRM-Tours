<template>
  <div>
    <table-component
      :id="id"
    >
    </table-component>
  </div>
</template>

<script>
import tableComponent from "../../components/vendedores/infoSeller";

export default {
  components: {
    tableComponent,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
}
</script>
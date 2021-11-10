<template>
  <div class="row">
    <div class="form-group col-3">
      <label>{{ label }}</label>
      <select
        class="form-control"
      >
        <option
          v-for="(item, i) in list"
          :key= i
        >
          {{ item.value }}
        </option>
      </select>
    </div>
    <div class="form-group col-3">
      <label>Mes</label>
      <select class="form-control">
        <option>option 1</option>
        <option>option 2</option>
        <option>option 3</option>
        <option>option 4</option>
        <option>option 5</option>
      </select>
    </div>
    <div class="form-group col-3">
      <label>Año</label>
      <select class="form-control">
        <option>option 1</option>
        <option>option 2</option>
        <option>option 3</option>
        <option>option 4</option>
        <option>option 5</option>
      </select>
    </div>
    <div class="w-100"></div>
    <div class="col-3 mb-3">
      <button type="submit" class="btn btn-primary">Buscar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label:{
      type: String
    },
    list: {
      type: Array
    }
  }
}
</script>
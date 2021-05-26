<template>
  <div>
    <div class="form-group">
      <label for="name">Ticket</label>
      <input
        type="text"
        class="form-control"
        v-model="ticketText"
        placeholder="Enter..."
      />
    </div>
    <div class="row">
      <div class="form-group col-md-3">
        <label for="name">Precio de adulto</label>
        <input
          type="number"
          min="0"
          class="form-control no-arrow"
          v-model.number="adultPrice"
          placeholder="Enter..."
        />
      </div>
      <div class="form-group col-md-3">
        <label for="name">Precio de niño</label>
        <input
          type="number"
          min="0"
          class="form-control no-arrow"
          v-model.number="childPrice"
          placeholder="Enter..."
        />
      </div>
      <div class="form-group col-md-3">
        <label for="name">Descuento</label>
        <input
          type="number"
          min="0"
          class="form-control no-arrow"
          v-model.number="discountRate"
          placeholder="Enter..."
        />
      </div>
      <div class="form-group col-md-3">
        <label for="name">Días previos a reservar</label>
        <input
          type="number"
          min="0"
          class="form-control no-arrow"
          v-model.number="daysAdvanceToReserve"
          placeholder="Enter..."
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="monday"
            v-model.number="monday"
          />
          <label class="custom-control-label" for="monday">
            Lunes
          </label>
        </div>
      </div>
      <div class="col">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="tuesday"
            v-model.number="tuesday"
          />
          <label class="custom-control-label" for="tuesday">
            Martes
          </label>
        </div>
      </div>
      <div class="col">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="wednesday"
            v-model.number="wednesday"
          />
          <label class="custom-control-label" for="wednesday">
            Miércoles
          </label>
        </div>
      </div>
      <div class="col">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="thursday"
            v-model.number="thursday"
          />
          <label class="custom-control-label" for="thursday">
            Jueves
          </label>
        </div>
      </div>
      <div class="col">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="friday"
            v-model.number="friday"
          />
          <label class="custom-control-label" for="friday">
            Viernes
          </label>
        </div>
      </div>
      <div class="col">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="saturday"
            v-model.number="saturday"
          />
          <label class="custom-control-label" for="saturday">
            Sábado
          </label>
        </div>
      </div>
      <div class="col">
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="sunday"
            v-model.number="sunday"
          />
          <label class="custom-control-label" for="sunday">
            Domingo
          </label>
        </div>
      </div>
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
    // idTour:{
    //   type: Number,
    //   required: true,
    // }
  },
  data() {
    return {
      adultPrice: 0,
      childPrice: 0,
      discountRate: 0,
      ticketText: null,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
      daysAdvanceToReserve: 0,
    };
  },
}
</script>
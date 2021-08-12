<template>
  <div>
    <ValidationObserver v-slot="{ invalid, validate }" ref="observer">
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
              v-model="monday"
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
              v-model="tuesday"
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
              v-model="wednesday"
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
              v-model="thursday"
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
              v-model="friday"
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
              v-model="saturday"
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
              v-model="sunday"
            />
            <label class="custom-control-label" for="sunday">
              Domingo
            </label>
          </div>
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>
<script>
import OperationTour from "../../../providers/products/tours/OperationTour";

import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const OperationTourResource = new OperationTour();

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    idTour: {
      type: Number,
      required: true,
    },
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

      id: null,
      newOperationTour: false,
      operationTour: null,
    };
  },
  async mounted() {
    await this.getOperationTour();
  },
  methods: {
    getOperationTourForm() {
      return {
        adult_price: this.adultPrice,
        child_price: this.childPrice,
        discount_rate: this.discountRate,
        ticket_text: this.ticketText,
        mon: this.monday,
        tue: this.tuesday,
        wed: this.wednesday,
        thu: this.thursday,
        fri: this.friday,
        sat: this.saturday,
        sun: this.sunday,
        days_advance_to_reserve: +this.daysAdvanceToReserve,
        tour_id: +this.idTour,
      };
    },
    async getOperationTour() {
      var response = (await OperationTourResource.getByTourId(this.idTour))
        .data;
      if (!response.success) {
        return false;
      }
      if (response.data == null) {
        this.newOperationTour = true;
        return;
      }
      this.operationTour = response.data;

      this.id = this.operationTour.id;
      this.adultPrice = this.operationTour.adult_price;
      this.childPrice = this.operationTour.child_price;
      this.discountRate = this.operationTour.discount_rate;
      this.ticketText = this.operationTour.ticket_text;
      this.monday = parseInt(this.operationTour.mon);
      this.tuesday = parseInt(this.operationTour.tue)
      this.wednesday = parseInt(this.operationTour.wed);
      this.thursday = parseInt(this.operationTour.thu);
      this.friday = parseInt(this.operationTour.fri);
      this.saturday = parseInt(this.operationTour.sat);
      this.sunday = parseInt(this.operationTour.sun);
      this.daysAdvanceToReserve = this.operationTour.days_advance_to_reserve;
    },
    async isValidForm() {
      return await this.$refs.observer.validate();
    },
    async saveOperationTour() {
      var response = null;

      let formData = this.getOperationTourForm();

      if (this.newOperationTour) {
        response = await this.saveNewOperationTour(formData);
      } else {
        response = await this.saveEditOperationTour(formData);
      }
      if (response.success) {
        this.id = response.data.id;
      }
      return response;
    },
    async saveNewOperationTour(formData) {
      var response = (await OperationTourResource.createOperationTour(formData))
        .data;
      return response;
    },
    async saveEditOperationTour(formData) {
      var response = (
        await OperationTourResource.updateOperationTour(this.id, formData)
      ).data;
      return response;
    },
  },
};
</script>

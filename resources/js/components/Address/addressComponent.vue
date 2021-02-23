<template>
  <div class="card card-success">
    <div class="card-header">
      <h3 class="card-title" v-if="newAddress">Agregar nueva dirección</h3>
      <h3 class="card-title" v-if="!newAddress">Editar dirección</h3>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="form-group col-12">
          <label for="street">Calle</label>
          <input
            type="text"
            name="street"
            class="form-control"
            v-model="street"
            placeholder=""
          />
        </div>
        <div class="form-group col-6">
          <label for="street1">Calle 1</label>
          <input
            type="text"
            name="street1"
            class="form-control"
            v-model="street1"
            placeholder=""
          />
        </div>
        <div class="form-group col-6">
          <label for="street2">Calle 2</label>
          <input
            type="text"
            name="street2"
            class="form-control"
            v-model="street2"
            placeholder=""
          />
        </div>
        <div class="form-group col-4">
          <label for="references">Referencias</label>
          <input
            type="text"
            name="references"
            class="form-control"
            v-model="references"
            placeholder=""
          />
        </div>
        <div class="form-group col-4">
          <label for="suburb">Suburbio/Fraccionamiento/Region</label>
          <input
            type="text"
            name="suburb"
            class="form-control"
            v-model="suburb"
            placeholder=""
          />
        </div>
        <div class="form-group col-4">
          <label for="postalCode">Código postal</label>
          <input
            type="text"
            name="postalCode"
            class="form-control"
            v-model.number="postalCode"
            placeholder=""
          />
        </div>
        <div class="form-group col-4">
          <label for="country">País</label>
          <multiselect
            @input="getStates()"
            v-model="form.country"
            label="country"
            track-by="id"
            :options="countries"
            :searchable="true"
            :show-labels="false"
            placeholder="Seleccionar un pais"
          >
          </multiselect>
        </div>
        <div class="form-group col-4">
          <label for="state">Estado</label>
          <multiselect
            @input="getCitys()"
            v-model="form.state"
            label="name"
            track-by="id"
            :options="states"
            :searchable="true"
            :show-labels="false"
            placeholder="Seleccionar un estado"
          >
          </multiselect>
        </div>
        <div class="form-group col-4">
          <label for="city">Ciudad</label>
          <multiselect
            v-model="form.city"
            label="city"
            track-by="id"
            :options="citys"
            :searchable="true"
            :show-labels="false"
            placeholder="Seleccionar una ciudad"
          >
          </multiselect>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nation from "../../providers/Nation";
const nationResource = new Nation();

export default {
  data() {
    return {
      newAddress: false,
      postalCode: null,
      street: null,
      street1: null,
      street2: null,
      references: null,
      suburb: null,
      countries: [],
      states: [],
      citys: [],
      form: {
        country: null,
        state: null,
        city: null,
      },
    };
  },
  created() {
    this.newAddress = true;
  },
  methods: {
    async getCountries() {
      try {
        this.countries = await nationResource.getCountries();
        this.countries = this.countries.data.data;
      } catch (error) {
        console.log("error paises", error);
      }
    },
    async getStates() {
      try {
        this.form.state = null;
        this.form.city = null;
        this.states = await nationResource.getState(this.form.country.id);
        this.states = this.states.data.data;
      } catch (error) {
        console.log("error estados", error);
      }
    },
    async getCitys() {
      try {
        console.log(this.form.state);
        this.form.city = null;
        this.citys = await nationResource.getCity(this.form.state.id);
        this.citys = this.citys.data.data;
        console.log(this.citys);
      } catch (error) {
        console.log("error ciudades", error);
      }
    },
  },
  mounted() {
    this.getCountries();
    console.log("paises", this.countries);
  },
};
</script>

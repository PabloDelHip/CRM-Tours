<template>
  <div class="card card-success">
    <div class="card-header">
      <h3 class="card-title" v-if="newAddress">Agregar nueva dirección</h3>
      <h3 class="card-title" v-if="!newAddress">Editar dirección</h3>
    </div>
    <div class="card-body">
      <ValidationObserver ref="observer">
        <div class="row">
          <div class="form-group col-12">
            <label for="street">Calle</label>
            <ValidationProvider
              rules="required"
              name="calle"
              v-slot="{ errors }"
            >
              <input
                type="text"
                name="street"
                class="form-control"
                v-model="street"
                :disabled="readOnly"
              />
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group col-6">
            <label for="street1">Calle 1</label>
            <ValidationProvider
              rules="required"
              name="calle 1"
              v-slot="{ errors }"
            >
              <input
                type="text"
                name="street1"
                class="form-control"
                v-model="street1"
                :disabled="readOnly"
              />
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group col-6">
            <label for="street2">Calle 2</label>
            <ValidationProvider
              rules="required"
              name="calle 2"
              v-slot="{ errors }"
            >
              <input
                type="text"
                name="street2"
                class="form-control"
                v-model="street2"
                :disabled="readOnly"
              />
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group col-4">
            <label for="references">Referencias</label>
            <ValidationProvider
              rules="required"
              name="referencias"
              v-slot="{ errors }"
            >
              <input
                type="text"
                name="references"
                class="form-control"
                v-model="references"
                :disabled="readOnly"
              />
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group col-4">
            <label for="suburb">Suburbio/Fraccionamiento/Región</label>
            <ValidationProvider
              rules="required"
              name="suburbio/fraccionamiento/región"
              v-slot="{ errors }"
            >
              <input
                type="text"
                name="suburb"
                class="form-control"
                v-model="suburb"
                :disabled="readOnly"
              />
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group col-4">
            <label for="postalCode">Código postal</label>
            <ValidationProvider
              rules="required"
              name="código postal"
              v-slot="{ errors }"
            >
              <input
                type="number"
                name="postalCode"
                class="form-control no-arrow"
                min="0"
                v-model.number="postalCode"
                :disabled="readOnly"
              />
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group col-6">
            <label for="interiorNumber">Número Interior</label>
            <ValidationProvider
              rules="required"
              name="número interior"
              v-slot="{ errors }"
            >
              <input
                type="number"
                name="interiorNumber"
                class="form-control no-arrow"
                min="0"
                v-model.number="interiorNumber"
                :disabled="readOnly"
              />
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group col-6">
            <label for="exteriorNumber">Número Exterior</label>
            <ValidationProvider
              rules="required"
              name="número exterior"
              v-slot="{ errors }"
            >
              <input
                type="number"
                name="exteriorNumber"
                class="form-control no-arrow"
                min="0"
                v-model.number="exteriorNumber"
                :disabled="readOnly"
              />
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group col-4">
            <label for="country">País</label>
            <ValidationProvider
              rules="required"
              name="país"
              v-slot="{ errors }"
            >
              <multiselect
                @input="getStates()"
                v-model="form.country"
                label="country"
                track-by="id"
                :options="countries"
                :searchable="true"
                :show-labels="false"
                placeholder="Seleccionar un pais"
                :disabled="readOnly"
              >
              </multiselect>
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group col-4">
            <label for="state">Estado</label>
            <ValidationProvider
              rules="required"
              name="estado"
              v-slot="{ errors }"
            >
              <multiselect
                @input="getCitys()"
                v-model="form.state"
                label="name"
                track-by="id"
                :options="states"
                :searchable="true"
                :show-labels="false"
                placeholder="Seleccionar un estado"
                :disabled="readOnly"
              >
              </multiselect>
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group col-4">
            <label for="city">Ciudad</label>
            <ValidationProvider
              rules="required"
              name="ciudad"
              v-slot="{ errors }"
            >
              <multiselect
                v-model="form.city"
                label="city"
                track-by="id"
                :options="cities"
                :searchable="true"
                :show-labels="false"
                placeholder="Seleccionar una ciudad"
                :disabled="readOnly"
              >
              </multiselect>
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import Nation from "../../providers/Nation";
import Address from "../../providers/Address";

import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const nationResource = new Nation();
const AddressResource = new Address();

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    id: {
      type: Number,
      required: false,
    },
    readOnly: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      newAddress: true,

      address: null,

      countries: [],
      states: [],
      cities: [],

      postalCode: null,
      street: null,
      street1: null,
      street2: null,
      references: null,
      suburb: null,
      interiorNumber: null,
      exteriorNumber: null,
      form: {
        country: null,
        state: null,
        city: null,
      },
    };
  },
  created() {},
  watch: {
    id: function(val) {
      this.newAddress = this.id == null;
      this.getAddress();
    },
  },
  methods: {
    async getAddress() {
      var response = (await AddressResource.getAddress(this.id)).data;
      if (!response.success) {
        this.errors.push("Error al obtener dirección.");
        return;
      }
      this.address = response.data;
      if (this.address == "" || this.address == null) {
        this.errors.push("Dirección no existe.");
        return;
      }

      this.street = this.address.street;
      this.street1 = this.address.street_one;
      this.street2 = this.address.street_two;
      this.references = this.address.references;
      this.suburb = this.address.suburb;
      this.postalCode = this.address.postal_code;
      this.interiorNumber = this.address.interior_num;
      this.exteriorNumber = this.address.exterior_num;

      this.form.country = this.countries.filter(
        (c) => c.id == this.address.country_id
      )[0];
      await this.getStates();
      this.form.state = this.states.filter(
        (s) => s.id == this.address.state_id
      )[0];
      await this.getCitys();
      this.form.city = this.cities.filter(
        (c) => c.id == this.address.city_id
      )[0];
    },
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
        this.form.city = null;
        this.cities = await nationResource.getCity(this.form.state.id);
        this.cities = this.cities.data.data;
      } catch (error) {
        console.log("error ciudades", error);
      }
    },
    getAddressForm() {
      return {
        street: this.street,
        street_one: this.street1,
        street_two: this.street2,
        references: this.references,
        suburb: this.suburb,
        postal_code: +this.postalCode,
        interior_num: +this.interiorNumber,
        exterior_num: +this.exteriorNumber,
        country_id: this.form.country.id,
        state_id: this.form.state.id,
        city_id: this.form.city.id,
      };
    },
    async saveAddress() {
      var response = null;

      let formData = this.getAddressForm();
      if (this.newAddress) {
        response = await this.saveNewAddress(formData);
      } else {
        response = await this.saveEditAddress(formData);
      }
      return response;
    },
    async saveNewAddress(formData) {
      var response = (await AddressResource.createAddress(formData)).data;
      return response;
    },
    async saveEditAddress(formData) {
      var response = (await AddressResource.updateAddress(this.id, formData))
        .data;
      return response;
    },
    async isValidAddressForm() {
      return await this.$refs.observer.validate();
    },
  },
  mounted() {
    this.getCountries();
  },
};
</script>

<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>
              Oportunidad de venta
            </h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/' }">
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link
                  v-if="this.id == undefined"
                  :to="{ name: 'PurchaseOrderFormAltaView' }"
                >
                  Oportunidad de venta
                </router-link>
              </li>
              <li class="breadcrumb-item active">
                Formulario
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">
                  Datos de usuario
                </h3>
              </div>
              <div class="card-body">
                  <ValidationObserver v-slot="{ invalid, validate }" ref="observer">
          <div class="modal-body row">
            <div class="form-group col-9">
              <label>Buscar usuario por email</label>
                <input type="text" v-model="email_customer" @keyup.enter="getCustomerByEmail" class="form-control rounded-0" placeholder="Jhon">
            </div>
            <div class="fa-2x pt-4" v-if="searchUser">
                <i class="fas fa-spinner fa-spin"></i>
            </div>
            <div class="w-100 mt-3 mb-3 border-line"></div>
            <div class="form-group col-6">
              <label>* Nombre</label>
              <ValidationProvider rules="required" name="nombre" v-slot="{ errors }">
                <input type="text" v-model="formCustomer.name" class="form-control rounded-0" placeholder="Jhon">
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
              <div class="form-group col-6">
                <label>* Apellidos</label>
                <input type="text" v-model="formCustomer.last_name" class="form-control rounded-0" placeholder="Doe Smiths">
              </div>
              
              <div class="form-group col-6">
                <label>* Email</label>
                <ValidationProvider rules="required|email" name="email" v-slot="{ errors }">
                  <input type="text" v-model="formCustomer.email" class="form-control rounded-0" placeholder="email@example.com">
                  <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              
              <div class="form-group col-6">
                <label>Teléfono de contacto</label>
                <ValidationProvider rules="numeric" name="telefono" v-slot="{ errors }">
                  <input type="text" v-model="formCustomer.phone" class="form-control rounded-0" placeholder="(998) 123 4567">
                  <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group col-6">
                <label>Fecha de nacimiento</label>
                <datetime v-model="formCustomer.birth_date" value-zone="local" zone="local"></datetime>
              </div>
              <div class="form-group col-6">
                <label>Genero</label>
                <ValidationProvider rules="oneOf:1,2,3" name="genero" v-slot="{ errors }">
                  <select v-model="formCustomer.sex" class="custom-select rounded-0">
                    <option >Seleccionar genero</option>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                    <option value="3">Otro</option>
                  </select>
                  <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group col-4">
                <label>Pais</label>
                <multiselect
                  @input="getStates()"
                  v-model="country"
                  label="country"
                  track-by="id"
                  :options="countries"
                  :searchable="true"
                  :show-labels="false"
                  placeholder="Seleccionar un pais">
                </multiselect>
              </div>
              <div class="form-group col-4">
                <label>Estado</label>
                <multiselect
                  @input="getCitys()"
                  v-model="state"
                  label="name"
                  track-by="id"
                  :options="states"
                  :searchable="true"
                  :show-labels="false"
                  placeholder="Seleccionar un estado">
                </multiselect>
              </div>
              <div class="form-group col-4">
                <label>Ciudad</label>
                <multiselect
                  v-model="city"
                  label="city"
                  track-by="id"
                  :options="citys"
                  :searchable="true"
                  :show-labels="false"
                  placeholder="Seleccionar una ciudad">
                </multiselect>
              </div>
              <div class="col-sm-8">
                <!-- textarea -->
                <div class="form-group">
                  <label>Comentarios adicionales</label>
                  <textarea v-model="formCustomer.additional_information" class="form-control rounded-0" rows="5" placeholder="Enter ..."></textarea>
                </div>
              </div>
              <div class="col-sm-12 border-line mt-3">
                <label>Estatus de la reserva</label>
                <select class="form-control" v-model="status">
                  <option value="En proceso">En proceso</option>
                  <option value="Cotizacion">Cotización</option>
                  <option value="Negociaciones">Negociaciones</option>
                  <option value="Cerrado">Cerrado</option>
                </select>
              </div>
          </div>
          <!--<div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            <button v-if="texto_boton == 'Guardar contacto'" :disabled="invalid" @click="validate().then(saveContact)" type="button" class="btn btn-primary">{{ texto_boton }}</button>
            <button v-else :disabled="invalid" @click="validate().then(updateContact(formCustomer.id))" type="button" class="btn btn-primary">{{ texto_boton }}</button>
          </div>-->
        </ValidationObserver>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <!-- AQUI ESTOY PROBANDFO-->
            <customer-book-tour-component @onAddActivities="AddActivities">
            </customer-book-tour-component>
          </div>
        </div>
      <div class="col-md-12">
        <button type="button" @click="saveReservations()" class="btn btn-primary">
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Nation from '../../providers/Nation';
import Customer from '../../providers/Customer';
import PurchaseOrder from '../../providers/PurchaseOrder';
import customerBookTourComponent from "./alta/customerBookTour";
import { Datetime } from 'vue-datetime';
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const nationResource = new Nation();
const customerResource = new Customer();
const PurchaseOrderResource = new PurchaseOrder();

export default {
  props: {
    id: {
      // Revisar como convertirlo en número
      required: false,
    },
  },
  components: {
    customerBookTourComponent,
    ValidationObserver,
    ValidationProvider,
    datetime: Datetime
  },
  data() {
    return {
      addressId: null,
      activities: [],
      vendorCode: null,
      name: null,
      businessName: null,
      description: null,
      web: null,
      email: null,
      phone: null,
      statusVendor: 1,
      email_customer: '',
      newVendor: false,
      vendor: null,
      NameVendorEdit: null,
      country: null,
      state: null,
      city: null,
      status: '',
      countries: [],
        states: [],
        citys: [],
        formCustomer: {
            id: 0,
            name: null,
            last_name: null,
            email: null,
            phone: null,
            birth_date: null,
            sex: 0,
            additional_information: null,
            country_id: null,
            state_id: null,
            city_id: null
        },
        searchUser: false
    };
  },
  computed: {
    user: function () {
      return this.$store.state.user
    }
  },
  watch: {
    country(newValue) {
      this.formCustomer.country_id = newValue.id;
    },
    city(newValue) {
      this.formCustomer.city_id = newValue.id;
    },
    state(newValue) {
      this.formCustomer.state_id = newValue.id;
    }
  },
  methods: {
    AddActivities(activities) {
      this.activities = activities;
    },
    async saveReservations(){
      console.log('usuario', this.user);
      const infoGeneral = [];
      infoGeneral.total = this.activities.reduce((a, b) => a.total + b.total);
      infoGeneral.amount = this.activities.reduce((a, b) => a.amount + b.amount);
      console.log('General',infoGeneral)
      infoGeneral.total = Number.isInteger(infoGeneral.total) ? infoGeneral.total : infoGeneral.total.total;
      infoGeneral.amount = Number.isInteger(infoGeneral.amount) ? infoGeneral.amount : infoGeneral.amount.amount;
      infoGeneral.expected_date = this.activities[0].reservation_date.split('T')[0];
      infoGeneral.type = 'tour';
      infoGeneral.user_id = this.user.id;
      infoGeneral.status = status;
      console.log(infoGeneral)
      console.log(this.activities)
      const data = {...infoGeneral, customer: {...this.formCustomer}, tours: {...this.activities}}
      await PurchaseOrderResource.create(data);
      this.$swal.fire({
          icon: 'success',
          title: 'Bien',
          toast: true,
          position: 'top',
          timer: 3000,
          showConfirmButton: false,
          timerProgressBar: true,
          text: 'Reservacion Guardada de forma correcta',
      })
    },
    async getVendor() {
      var response = (await VendorResouce.getVendor(this.id)).data;
      if (!response.success) {
        this.showError("Error al obtener agencia.");
        return false;
      }
      this.vendor = response.data;
      if (this.vendor == "" || this.vendor == null) {
        this.showError("Agencia no existe.");
        return false;
      }

      this.vendorCode = this.vendor.code;
      this.name = this.vendor.name;
      this.NameVendorEdit = this.name;
      this.businessName = this.vendor.business_name;
      this.description = this.vendor.description;
      this.web = this.vendor.web;
      this.email = this.vendor.email;
      this.phone = this.vendor.phone;
      this.statusVendor = this.vendor.status;

      this.addressId = this.vendor.address_id;

      return true;
    },
    getVendorForm() {
      return {
        code: this.vendorCode,
        name: this.name,
        business_name: this.businessName,
        description: this.description,
        web: this.web,
        email: this.email,
        phone: this.phone,
        address_id: +this.addressId,
        status: this.statusVendor,
      };
    },
    async getCountries() {
        try {
          this.countries = await nationResource.getCountries();
          this.countries = this.countries.data.data
        } catch (error) {
          console.log('error paises', error)
        }
      },
      async getStates() {
        try {
          this.state = null
          this.city = null
          console.log(this.country);
          this.states = await nationResource.getState(this.country.id);
          this.states = this.states.data.data
        } catch (error) {
          console.log('error estados', error)
        }
      },
      async getCitys() {
        try {
          this.city = null
          this.citys = await nationResource.getCity(this.state.id);
          this.citys = this.citys.data.data
        } catch (error) {
          console.log('error ciudades', error)
        }
      },
      async getCustomerByEmail() {
        this.searchUser = true
        const {data: {data}} = await customerResource.getCustomerByEmail(this.email_customer);
        if(data) {
            this.formCustomer.id = data.id
            this.formCustomer.name = data.name
            this.formCustomer.last_name = data.last_name
            this.formCustomer.email = data.email
            this.formCustomer.phone = data.phone
            this.formCustomer.birth_date = data.birth_date
            this.formCustomer.sex = data.sex
            this.formCustomer.additional_information = data.additional_information
            this.country = data.country
            this.state = data.state
            this.city = data.city
        }
        this.searchUser = false
      }
  },
  mounted() {
      this.getCountries();
  }
};
</script>

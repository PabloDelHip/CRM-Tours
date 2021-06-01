<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>
              Agencia{{
                this.NameVendorEdit == null ? "" : " - " + this.NameVendorEdit
              }}
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
                  :to="{ name: 'ListVendor' }"
                >
                  Agencias
                </router-link>
                <router-link
                  v-else
                  :to="{ name: 'profileVendor', params: { id: +this.id } }"
                >
                  Perfil
                </router-link>
              </li>
              <li class="breadcrumb-item active">
                Agencia
                {{
                  this.NameVendorEdit == null ? "" : " - " + this.NameVendorEdit
                }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <div class="container-fluid">
      <ValidationObserver ref="observer">
        <div class="row">
          <div class="col-md-6">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title" v-if="newVendor">
                  Agregar nueva agencia
                </h3>
                <h3 class="card-title" v-else>Editar agencia</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="form-group col-md-3">
                    <label for="vendorCode">Código</label>
                    <ValidationProvider
                      rules="required"
                      name="código"
                      v-slot="{ errors }"
                    >
                      <input
                        type="text"
                        class="form-control"
                        v-model="vendorCode"
                        oninput="this.value = this.value.toUpperCase()"
                        maxlength="5"
                      />
                      <span
                        :class="[
                          'error',
                          'invalid-feedback',
                          errors[0] ? 'ver' : '',
                        ]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                  <div class="form-group col-md-9">
                    <label for="name">Nombre</label>
                    <ValidationProvider
                      rules="required"
                      name="nombre"
                      v-slot="{ errors }"
                    >
                      <input type="text" class="form-control" v-model="name" />
                      <span
                        :class="[
                          'error',
                          'invalid-feedback',
                          errors[0] ? 'ver' : '',
                        ]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                </div>
                <div class="form-group">
                  <label for="businessName">Nombre Comercial</label>
                  <ValidationProvider
                    rules="required"
                    name="nombre comercial"
                    v-slot="{ errors }"
                  >
                    <input
                      type="text"
                      class="form-control"
                      v-model="businessName"
                    />
                    <span
                      :class="[
                        'error',
                        'invalid-feedback',
                        errors[0] ? 'ver' : '',
                      ]"
                      >{{ errors[0] }}</span
                    >
                  </ValidationProvider>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="web">Sitio web</label>
                    <ValidationProvider
                      rules="required"
                      name="sitio web"
                      v-slot="{ errors }"
                    >
                      <div class="input-group mb-12">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fas fa-link"></i
                          ></span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          v-model="web"
                          placeholder="https://www.google.com/"
                        />
                      </div>
                      <span
                        :class="[
                          'error',
                          'invalid-feedback',
                          errors[0] ? 'ver' : '',
                        ]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="email">Correo electrónico</label>
                    <ValidationProvider
                      rules="required|email"
                      name="correo electrónico"
                      v-slot="{ errors }"
                    >
                      <div class="input-group mb-12">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fas fa-at"></i
                          ></span>
                        </div>
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          v-model="email"
                          :disabled="!newVendor"
                          oninput="this.value = this.value.toLowerCase()"
                          placeholder="john.doe@mail.com"
                        />
                      </div>
                      <span
                        :class="[
                          'error',
                          'invalid-feedback',
                          errors[0] ? 'ver' : '',
                        ]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Estatus de la agencia</label>
                      <select
                        class="form-control"
                        v-model.number="statusVendor"
                      >
                        <option value="0">Inactivo</option>
                        <option value="1">Activo</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="email">Teléfono</label>
                    <ValidationProvider
                      rules="required"
                      name="teléfono"
                      v-slot="{ errors }"
                    >
                      <div class="input-group mb-12">
                        <div class="input-group-prepend">
                          <span class="input-group-text"
                            ><i class="fas fa-phone"></i
                          ></span>
                        </div>
                        <input
                          type="number"
                          name="phone"
                          min="0"
                          max="9999999999"
                          class="form-control no-arrow"
                          v-model.number="phone"
                        />
                      </div>
                      <span
                        :class="[
                          'error',
                          'invalid-feedback',
                          errors[0] ? 'ver' : '',
                        ]"
                        >{{ errors[0] }}</span
                      >
                    </ValidationProvider>
                  </div>
                </div>
                <label for="description">Descripción</label>
                <ValidationProvider
                  rules="required"
                  name="descripción"
                  v-slot="{ errors }"
                >
                  <textarea
                    class="form-control"
                    name="description"
                    v-model="description"
                    rows="3"
                    placeholder="..."
                  ></textarea>
                  <span
                    :class="[
                      'error',
                      'invalid-feedback',
                      errors[0] ? 'ver' : '',
                    ]"
                    >{{ errors[0] }}</span
                  >
                </ValidationProvider>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <address-component
              :id="+this.addressId"
              ref="addressComponent"
            ></address-component>
          </div>
        </div>
      </ValidationObserver>
      <div class="col-md-12">
        <button type="button" @click="saveContent()" class="btn btn-primary">
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vendor from "../../providers/Vendor";
import AddressComponent from "../../components/Address/addressComponent.vue";

import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const VendorResouce = new Vendor();

export default {
  props: {
    id: {
      // Revisar como convertirlo en número
      required: false,
    },
  },
  components: {
    AddressComponent,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      addressId: null,

      vendorCode: null,
      name: null,
      businessName: null,
      description: null,
      web: null,
      email: null,
      phone: null,
      statusVendor: 1,

      newVendor: false,
      vendor: null,
      NameVendorEdit: null,
    };
  },
  async created() {
    if (this.id != undefined) {
      if (!(await this.getVendor())) {
        this.$router.push("/vendors");
      }
    }
    this.newVendor =
      this.id == undefined || this.vendor == "" || this.vendor == null;
  },
  methods: {
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
    async saveContent() {
      const addressResponse = await this.$refs.addressComponent.isValidAddressForm();
      const vendorResponse = await this.isValidVendorForm();
      const allErrors = vendorResponse;
      if (allErrors.length > 0 || !addressResponse) {
        this.showWarning("Hay campos faltantes.");
        return;
      }

      try {
        const saveAddressResponse = await this.$refs.addressComponent.saveAddress();
        if (saveAddressResponse.success) {
          this.addressId = saveAddressResponse.data.id;
        } else {
          throw saveAddressResponse.err;
        }
      } catch (ex) {
        console.error(ex);
        this.showError("Error al guardar la dirección.");
        return;
      }

      var idVendor = null;
      try {
        var saveVendorResponse = await this.saveVendor();
        if (!saveVendorResponse.success) {
          throw saveVendorResponse.err;
        }
        idVendor = saveVendorResponse.data.id;
      } catch (ex) {
        console.error(ex);
        this.showError("Error al guardar la agencia.");
        return;
      }
      this.showSuccess("Agencia guardada correctamente.");

      if (this.newVendor) {
        setTimeout(() => {
          this.$router.push({
            name: "EditVendor",
            params: { id: +idVendor },
          });
        }, 3000);
      }
    },
    async isValidVendorForm() {
      return await this.$refs.observer.validate();
    },
    async saveVendor() {
      var response = null;

      let formData = this.getVendorForm();
      if (this.newVendor) {
        response = await this.saveNewVendor(formData);
      } else {
        response = await this.saveEditVendor(formData);
      }
      if (!response.success) {
        this.showError("Error al guardar la agencia.");
      }
      return response;
    },
    async saveNewVendor(formData) {
      var response = (await VendorResouce.createVendor(formData)).data;
      return response;
    },
    async saveEditVendor(formData) {
      var response = (await VendorResouce.updateVendor(this.id, formData)).data;
      return response;
    },
    showWarning(message) {
      this.showMessage("Atención!", message, "warning");
    },
    showError(message) {
      this.showMessage("Oops...", message, "error");
    },
    showSuccess(message) {
      this.showMessage("Bien!!", message, "success");
    },
    showMessage(title, message, type) {
      this.$swal.fire({
        icon: type,
        title: title,
        toast: true,
        position: "top",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        text: message,
      });
    },
  },
};
</script>

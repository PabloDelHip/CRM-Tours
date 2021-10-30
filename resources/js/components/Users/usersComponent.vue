<template>
  <div>
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title" v-if="newUser">Agregar nuevo usuario</h3>
        <h3 class="card-title" v-if="!newUser">Editar usuario</h3>
      </div>
      <ValidationObserver ref="observer">
        <div class="card-body">
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <ValidationProvider
              :rules="
                'required|email' + (newUser ? '|confirmed:emailconfirm' : '')
              "
              name="correo electrónico"
              v-slot="{ errors }"
            >
              <div class="input-group">
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
                  :disabled="!newUser"
                  oninput="this.value = this.value.toLowerCase()"
                  placeholder="ejemplo.fulanito@ejemplo.com"
                />
                <span
                  :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                  >{{ errors[0] }}</span
                >
              </div>
            </ValidationProvider>
          </div>
          <div class="form-group" v-if="user == null">
            <label for="emailConfirm">Confirmar correo electrónico</label>
            <ValidationProvider
              rules="required|email"
              vid="emailconfirm"
              name="confirmar correo electrónico"
              v-slot="{ errors }"
            >
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="fas fa-at"></i
                  ></span>
                </div>
                <input
                  type="email"
                  name="emailConfirm"
                  class="form-control"
                  v-model="emailConfirm"
                  oninput="this.value = this.value.toLowerCase()"
                  placeholder="ejemplo.fulanito@ejemplo.com"
                />
                <span
                  :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                  >{{ errors[0] }}</span
                >
              </div>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <ValidationProvider
              rules="required|min:6|max:20"
              name="contraseña"
              v-slot="{ errors }"
            >
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Contraseña"
              />
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>Estatus del usuario</label>
            <select class="form-control" v-model.number="statusUser">
              <option value="0">Inactivo</option>
              <option value="1">Activo</option>
            </select>
          </div>
          <div class="form-group">
            <label>Tipo de usuario</label>
            <select class="form-control" v-model.number="tipoUser">
              <option value="1">Administrador</option>
              <option value="2">Vendedor</option>
            </select>
          </div>
          <div class="form-group">
            <label>% por venta</label>
            <input
                type="number"
                class="form-control"
                placeholder="00"
              />
          </div>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import User from "../../providers/User";

import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const UserResource = new User();

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
    contactId: {
      type: Number,
      required: false,
    },
    profileId: {
      type: Number,
      required: false,
    },
    externalEmail: {
      type: String,
      required: false,
    },
    vendorId: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      newUser: false,

      // Usuario
      email: null,
      emailConfirm: null,
      password: null,
      statusUser: 1,
      user: null,
    };
  },
  watch: {
    externalEmail(val) {
      this.email = val;
      this.emailConfirm = val;
    },
  },
  async created() {
    if (this.id != undefined && this.id + 0 > 0) {
      if (!(await this.getUser())) {
        this.$router.push("/users");
      }
      return;
    }
    this.status = 1;
    this.newUser = this.id == undefined || this.user == "" || this.user == null;
  },
  methods: {
    getUserForm() {
      return {
        email: this.email,
        password: this.password,
        status: +this.statusUser,
        level: +this.tipoUser,
        profile_id: this.profileId,
        contact_id: this.contactId,
        vendor_id: this.vendorId == 0 ? null : +this.vendorId,
      };
    },
    async getUser() {
      var response = (await UserResource.getUser(this.id)).data;
      if (!response.success) {
        this.showError("Error al obtener usuario.");
        return false;
      }
      this.user = response.data;
      if (this.user == "" || this.user == null) {
        this.showError("Usuario no existe.");
        return false;
      }
      this.email = this.user.email;
      this.emailConfirm = this.user.email;
      this.statusUser = this.user.status;
      this.tipoUser = this.user.level;

      this.$emit("get-profileId", this.user.profile_id);
      this.$emit("get-contactId", this.user.contact_id);
      this.$emit("get-vendorId", this.user.vendor_id);

      return true;
    },
    async saveUser(contactId, profileId) {
      var response = null;

      let formData = this.getUserForm();
      if (formData.contact_id == null || formData.contact_id == 0) {
        formData.contact_id = contactId;
      }
      if (formData.profile_id == null || formData.profile_id == 0) {
        formData.profile_id = profileId;
      }
      if (this.newUser) {
        response = await this.saveNewUser(formData);
      } else {
        response = await this.saveEditUser(formData);
      }
      return response;
    },
    async saveNewUser(formData) {
      var response = (await UserResource.createUser(formData)).data;
      return response;
    },
    async saveEditUser(formData) {
      var response = (await UserResource.updateUser(this.id, formData)).data;
      return response;
    },
    async isValidUserForm() {
      return await this.$refs.observer.validate();
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

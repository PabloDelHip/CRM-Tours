<template>
  <div class="container-fluid">
    <!-- <ValidationObserver v-slot="{validate }" ref="observer"> -->
      <div class="row">
        <div class="col-md-6">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title" v-if="newUser">Agregar nuevo perfil</h3>
              <h3 class="card-title" v-if="!newUser">Editar perfil</h3>
            </div>
            <div class="card-body">
              <transition name="fade">
                <div
                  class="alert alert-danger alert-dismissible text-center"
                  v-if="profileErrors.length > 0"
                >
                  <ul>
                    <li v-for="(e, index) in profileErrors" :key="index"> {{ e }}</li>
                  </ul>
                </div>
              </transition>
              <div class="form-group">
                <label for="name">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="name"
                  placeholder="John Doe"
                />
              </div>
              <div class="form-group">
                <label for="lastName">Apellidos</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="lastName"
                  placeholder="John Doe"
                />
              </div>
              <div class="form-group">
                <label for="birthDate">Fecha de nacimiento</label>
                <input
                  type="date"
                  class="form-control"
                  v-model="birthDate"
                  placeholder="John Doe"
                />
              </div>
              <div class="form-group">
                <label for="sex">Sexo</label>
                <select class="custom-select" v-model.number="sex">
                  <option value="1">Masculino</option>
                  <option value="2">Femenino</option>
                  <option value="3">Otro</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title" v-if="newUser">Agregar nuevo usuario</h3>
              <h3 class="card-title" v-if="!newUser">Editar usuario</h3>
            </div>
            <form method="POST" action="/user/saveContent">
              <div class="card-body">
                <transition name="fade">
                  <div
                    class="alert alert-danger alert-dismissible text-center"
                    v-if="userErrors.length > 0"
                  >
                    <ul>
                      <li v-for="(e, index) in userErrors" :key="index"> {{ e }}</li>
                    </ul>
                  </div>
                </transition>
                <div class="form-group">
                  <label for="email">Correo electrónico</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    :disabled="!newUser"
                    placeholder="ejemplo.fulanito@ejemplo.com"
                  />
                </div>
                <div class="form-group" v-if="this.user == null">
                  <label for="emailConfirm">Confirmar correo electrónico</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="emailConfirm"
                    placeholder="ejemplo.fulanito@ejemplo.com"
                  />
                </div>
                <div class="form-group" v-if="this.user == null">
                  <label for="password">Contraseña</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                    placeholder="Contraseña"
                  />
                </div>
                <div class="form-group">
                  <label>Estatus del usuario</label>
                  <select class="custom-select" v-model.number="statusUser">
                    <option value="0">Inactivo</option>
                    <option value="1">Activo</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-12">
          <contacts-component
            :id="+this.ContactId"
            :typeContact="1"
            ref="contactComponent"
          ></contacts-component>
        </div>
        <div class="col-md-12">
          <button
            type="button"
            @click="saveContent()"
            class="btn btn-primary"
          >
            Guardar
          </button>
        </div>
      </div>
    <!-- </ValidationObserver> -->
  </div>
</template>

<script>
import User from "../../providers/User";
import Profile from "../../providers/Profile";
import ContactsComponent from "../../components/Contacts/contactsComponent.vue";
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

const UserResource = new User();
const ProfileResource = new Profile();

export default {
  name: "create-user-component",
  props: {
    id: {
      // Revisar como convertirlo en número
      required: false,
    },
  },
  components: {
    ContactsComponent,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      profileErrors: [],
      userErrors: [],

      newUser: false,
      user: null,
      profile: null,
      ContactId: null,

      // Usuario
      email: null,
      emailConfirm: null,
      password: null,
      statusUser: 1,

      // Perfil
      name: null,
      lastName: null,
      birthDate: null,
      sex: 0,
    };
  },
  async created() {
    if (this.id != undefined) {
      if (await this.getUser()){
        await this.getProfile();
      }
      else{
        setTimeout(() => {
          this.$router.push('/users');
        }, 3000);
      }
      return;
    }
    this.newUser = this.id == undefined || this.user == "" || this.user == null;
    this.status = 1;
  },
  methods: {
    async chechIdUser() {
      if (this.id == undefined || this.user == null) {
        return false;
      }
      return true;
    },
    async getUser() {
      var response = (await UserResource.getUser(this.id)).data;
      if (!response.success) {
        this.userErrors.push("Error al obtener usuario.");
        return false;
      }
      this.user = response.data;
      if (this.user == "" || this.user == null) {
        this.userErrors.push("Usuario no existe.");
        return false;
      }

      this.email = this.user.email;
      this.emailConfirm = this.user.email;
      this.statusUser = this.user.status;

      this.ContactId = this.user.contact_id;

      return true;
    },
    async getProfile() {
      if (this.newUser) {
        return;
      }
      var response = (await ProfileResource.getProfile(this.user.profile_id))
        .data;
      if (!response.success) {
        this.userErrors.push("Error al obtener perfil.");
        return;
      }
      this.profile = response.data;
      if (this.profile == "") {
        this.userErrors.push("Perfil no existe.");
        return;
      }
      this.name = this.profile.name;
      this.lastName = this.profile.last_name;
      this.birthDate = this.profile.birth_date;
      this.sex = this.profile.sex;
    },
    getUserForm() {
      return {
        // name: this.name,
        email: this.email,
        password: this.password,
        status: this.statusUser,
      };
    },
    getProfileForm() {
      return {
        name: this.name,
        lastName: this.lastName,
        birthDate: this.birthDate,
        sex: this.sex,
      };
    },
    async saveContent() {
      const contactResponse = this.$refs.contactComponent.isValidContactForm();
      const profileErrors = this.isValidProfileForm();
      const userErrors = this.isValidUserForm();
      const allErrors = contactResponse.concat(profileErrors).concat(userErrors);
      if (allErrors.length > 0){
        console.log("Formulario invalido");
        return;
      }
    },
    saveUser() {
      this.userErrors = [];
      if (!this.isValidUserForm()) {
        return;
      }

      let formData = this.getUserForm();
      if (this.newUser) {
        this.saveNewUser(formData);
      } else {
        this.saveEditUser(formData);
      }
    },
    saveProfile() {
      this.profileErrors = [];
      if (!this.isValidProfileForm()) {
        return;
      }

      let formData = this.getProfileForm();
      if (this.newUser) {
        this.saveNewProfile(formData);
      } else {
        this.saveEditProfile(formData);
      }
    },
    async saveNewUser(formData) {
      var response = (await UserResource.createUser(formData)).data;
    },
    async saveEditUser(formData) {
      var response = (await UserResource.updateUser(this.id, formData)).data;
    },
    async saveNewProfile(formData) {
      var response = (await ProfileResource.createProfile(formData)).data;
    },
    async saveEditProfile(formData) {
      var response = (await ProfileResource.updateProfile(this.id, formData)).data;
    },
    isValidUserForm() {
      const errors = [];
      if (this.email != this.emailConfirm) {
        errors.push("Correos no coinciden.");
      }
      if (this.password == "") {
        errors.push("Contraseña no puede estar vacio.");
      }
      this.userErrors = errors;
      return errors;
    },
    isValidProfileForm() {
      const errors = [];
      if (this.name == null || this.name == "") {
        errors.push("Nombre no puede estar vacio.");
      }
      if (this.lastName == null || this.lastName == "") {
        errors.push("Apellido no puede estar vacio.");
      }
      if (this.birthDate == null || this.birthDate == "") {
        errors.push("Fecha de nacimiento no puede estar vacio.");
      }
      if (this.sex == null || this.sex == 0) {
        errors.push("Sexo no puede estar vacio.");
      }
      this.profileErrors = errors;
      return errors;
    },
  },
};
</script>
<template>
  <div>
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title" v-if="newProfile">Agregar nuevo perfil</h3>
        <h3 class="card-title" v-else>Editar perfil</h3>
      </div>
      <div class="card-body">
        <ValidationObserver ref="observer">
          <div class="row">
            <div class="col-7">
              <div class="form-group">
                <label for="name">Nombre</label>
                <ValidationProvider
                  rules="required"
                  name="nombre"
                  v-slot="{ errors }"
                >
                  <input
                    type="text"
                    class="form-control"
                    v-model="name"
                    placeholder="John Doe"
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
              <div class="form-group">
                <label for="lastName">Apellidos</label>
                <ValidationProvider
                  rules="required"
                  name="apellidos"
                  v-slot="{ errors }"
                >
                  <input
                    type="text"
                    class="form-control"
                    v-model="lastName"
                    placeholder="John Doe"
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
            </div>
            <div class="form-group col-5" style="text-align:center">
              <input
                type="file"
                class="custom-file-input"
                @change="onFileChange"
                accept="image/*"
                style="display: none"
                ref="imageFile"
              />
              <img
                v-bind:src="imagePreview"
                class="img-circle elevation-2"
                alt="User Avatar"
                @click="$refs.imageFile.click()"
                :style="'cursor: pointer'"
                style="width= 155px;height= auto;max-height: 155px;max-width: 155px;"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="birthDate">Fecha de nacimiento</label>
            <ValidationProvider
              rules="required"
              name="fecha de nacimiento"
              v-slot="{ errors }"
            >
              <input
                type="date"
                class="form-control"
                v-model="birthDate"
                placeholder="John Doe"
              />
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label for="sex">Sexo</label>
            <ValidationProvider
              rules="required"
              name="sexo"
              v-slot="{ errors }"
            >
              <select class="form-control" v-model.number="sex">
                <option value="1">Masculino</option>
                <option value="2">Femenino</option>
                <option value="3">Otro</option>
              </select>
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "../../providers/Profile";

import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const ProfileResource = new Profile();

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
  },
  data() {
    return {
      newProfile: true,
      profile: null,

      // Perfil
      picture: null,
      imagePreview: "/img/profile-icon.png",

      name: null,
      lastName: null,
      birthDate: null,
      sex: null,
    };
  },
  watch: {
    id: function(val) {
      this.newProfile = this.id == null;
      this.getProfile();
    },
  },
  methods: {
    onFileChange(event) {
      this.picture = event.target.files[0];

      if (
        !this.picture ||
        !/\.(jpe?g|png|gif)$/i.test(this.picture.name) ||
        this.picture.size / 1024 / 1024 > 2
      ) {
        this.picture = null;
        return;
      }
      let reader = new FileReader();

      reader.addEventListener(
        "load",
        function() {
          this.imagePreview = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.picture);
    },
    async getProfile() {
      var response = (await ProfileResource.getProfile(this.id)).data;
      if (!response.success) {
        this.profileErrors.push("Error al obtener perfil.");
        return;
      }
      this.profile = response.data;
      if (this.profile == "") {
        this.profileErrors.push("Perfil no existe.");
        return;
      }
      this.name = this.profile.name;
      this.lastName = this.profile.last_name;
      this.birthDate = this.profile.birth_date;
      this.sex = this.profile.sex;
      if (this.profile.image) {
        this.imagePreview = this.profile.image;
      }
      this.$emit("get-name", this.name + " " + this.lastName);
    },
    getProfileForm() {
      return {
        name: this.name,
        last_name: this.lastName,
        birth_date: this.birthDate,
        sex: +this.sex,
        contact_id: +this.contactId,
        picture:
          this.picture == null &&
          (this.profile == null || this.profile.image == this.imagePreview)
            ? null
            : this.imagePreview,
      };
    },
    async saveProfile(contactId) {
      var response = null;

      let formData = this.getProfileForm();
      if (formData.contact_id == null || formData.contact_id == 0) {
        formData.contact_id = contactId;
      }
      if (this.newProfile) {
        response = await this.saveNewProfile(formData);
      } else {
        response = await this.saveEditProfile(formData);
      }
      return response;
    },
    async saveNewProfile(formData) {
      var response = (await ProfileResource.createProfile(formData)).data;
      return response;
    },
    async saveEditProfile(formData) {
      var response = (await ProfileResource.updateProfile(this.id, formData))
        .data;
      return response;
    },
    async isValidProfileForm() {
      return await this.$refs.observer.validate();
    },
  },
};
</script>

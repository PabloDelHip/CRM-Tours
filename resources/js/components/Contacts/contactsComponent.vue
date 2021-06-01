<template>
  <div>
    <div class="card card-warning">
      <div class="card-header">
        <h3 class="card-title" v-if="newContact">Agregar nuevo contacto</h3>
        <h3 class="card-title" v-if="!newContact">Editar contacto</h3>
      </div>
      <div class="card-body">
        <ValidationObserver ref="observer">
          <div class="form-group" v-show="false">
            <label for="typeContact">Tipo de contacto</label>
            <select
              name="typeContact"
              class="form-control"
              v-model.number="typeContact"
            >
              <option value="1">Usuario</option>
              <option value="2">Proveedor</option>
              <option value="3">Cliente</option>
            </select>
          </div>
          <div class="form-group">
            <label for="rfcContact">RFC</label>
            <ValidationProvider rules="required" name="rfc" v-slot="{ errors }">
              <input
                type="text"
                name="rfcContact"
                class="form-control"
                v-model="rfcContact"
                placeholder="CUPU800825569"
              />
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label for="typePerson">Tipo persona</label>
            <ValidationProvider
              rules="required"
              name="tipo de persona"
              v-slot="{ errors }"
            >
              <select
                name="typePerson"
                class="form-control"
                v-model.number="typePerson"
              >
                <option value="1">Física</option>
                <option value="2">Moral</option>
              </select>
              <span
                :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                >{{ errors[0] }}</span
              >
            </ValidationProvider>
          </div>
          <div>
            <label for="emailsContact">Correos electrónicos</label>
            <div v-for="(email, index) in emailsContact" :key="index + 'email'">
              <ValidationProvider
                rules="required|email"
                :name="'correo electrónico ' + (index + 1)"
                v-slot="{ errors }"
              >
                <div
                  class="input-group mb-3"
                  style="margin-bottom: 8px !important;"
                >
                  <div class="input-group-prepend">
                    <span class="input-group-text"
                      ><i class="fas fa-at"></i
                    ></span>
                  </div>
                  <input
                    type="email"
                    name="emailsContact"
                    class="form-control"
                    v-model="emailsContact[index]"
                    oninput="this.value = this.value.toLowerCase()"
                    placeholder="john.doe@mail.com"
                  />
                  <div
                    class="input-group-append"
                    v-if="emailsContact.length > 1"
                  >
                    <input
                      type="button"
                      class="btn btn-danger"
                      @click="emailsContact.splice(index, 1)"
                      value="-"
                    />
                  </div>
                  <div
                    class="input-group-append"
                    v-if="emailsContact.length < 3"
                  >
                    <input
                      type="button"
                      class="btn btn-success"
                      @click="emailsContact.push('')"
                      value="+"
                    />
                  </div>
                </div>
                <span
                  style="margin-top: 0 !important;margin-bottom: 4px;"
                  :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                  >{{ errors[0] }}
                </span>
              </ValidationProvider>
            </div>
          </div>
          <div>
            <label for="emailsContact">Teléfonos móviles</label>
            <div
              v-for="(mobile, index) in mobilesContact"
              :key="index + 'mobile'"
            >
              <ValidationProvider
                rules="required"
                :name="'teléfono móvil ' + (index + 1)"
                v-slot="{ errors }"
              >
                <div
                  class="input-group mb-3"
                  style="margin-bottom: 8px !important;"
                >
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-phone"></i>
                    </span>
                  </div>
                  <input
                    type="number"
                    name="mobilesContact"
                    class="form-control no-arrow"
                    min="0"
                    max="9999999999"
                    v-model="mobilesContact[index]"
                    placeholder="111 111 11 11"
                  />
                  <div
                    class="input-group-append"
                    v-if="mobilesContact.length > 1"
                  >
                    <input
                      type="button"
                      class="btn btn-danger"
                      @click="mobilesContact.splice(index, 1)"
                      value="-"
                    />
                  </div>
                  <div
                    class="input-group-append"
                    v-if="mobilesContact.length < 3"
                  >
                    <input
                      type="button"
                      class="btn btn-success"
                      @click="mobilesContact.push('')"
                      value="+"
                    />
                  </div>
                </div>
                <span
                  style="margin-top: 0 !important;margin-bottom: 4px;"
                  :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                  >{{ errors[0] }}
                </span>
              </ValidationProvider>
            </div>
          </div>
          <div>
            <label for="emailsContact">Teléfonos</label>
            <div v-for="(phone, index) in phonesContact" :key="index + 'phone'">
              <ValidationProvider
                rules="required"
                :name="'teléfono ' + (index + 1)"
                v-slot="{ errors }"
              >
                <div
                  class="input-group mb-3"
                  style="margin-bottom: 8px !important;"
                >
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-phone"></i>
                    </span>
                  </div>
                  <input
                    type="number"
                    name="phonesContact"
                    class="form-control no-arrow"
                    min="0"
                    max="9999999999"
                    v-model="phonesContact[index]"
                    placeholder="222 222 22 22"
                  />
                  <div
                    class="input-group-append"
                    v-if="phonesContact.length > 1"
                  >
                    <input
                      type="button"
                      class="btn btn-danger"
                      @click="phonesContact.splice(index, 1)"
                      value="-"
                    />
                  </div>
                  <div
                    class="input-group-append"
                    v-if="phonesContact.length < 3"
                  >
                    <input
                      type="button"
                      class="btn btn-success"
                      @click="phonesContact.push('')"
                      value="+"
                    />
                  </div>
                </div>
                <span
                  style="margin-top: 0 !important;margin-bottom: 4px;"
                  :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']"
                  >{{ errors[0] }}
                </span>
              </ValidationProvider>
            </div>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "../../providers/Contact";

import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const ContactResource = new Contact();

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
    typeContact: {
      type: Number,
      required: true,
    },
    addressId: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      newContact: true,
      refTypeContact: null,

      contact: null,

      // Contacto
      rfcContact: null,
      typePerson: null,
      emailsContact: [""],
      mobilesContact: [""],
      phonesContact: [""],
    };
  },
  watch: {
    id: async function(val) {
      this.newContact = this.id == null;
      await this.getContact();
    },
    typeContact: function(val) {
      this.refTypeContact = val;
    },
  },
  methods: {
    async getContact() {
      var response = (await ContactResource.getContact(this.id)).data;
      if (!response.success) {
        this.errors.push("Error al obtener contacto.");
        return;
      }
      this.contact = response.data;
      if (this.contact == "") {
        this.errors.push("Contacto no existe.");
        return;
      }

      this.$emit("get-addressId", this.contact.address_id);
      this.refTypeContact = this.contact.type;
      this.rfcContact = this.contact.rfc;
      this.typePerson = this.contact.type_person;
      this.emailsContact = this.contact.emails.split("|");
      this.mobilesContact = this.contact.moviles.split("|");
      this.phonesContact = this.contact.phones.split("|");
    },
    getContactForm() {
      return {
        type: this.refTypeContact,
        rfc: this.rfcContact,
        type_person: this.typePerson,
        emails: this.emailsContact.join("|"),
        moviles: this.mobilesContact.join("|"),
        phones: this.phonesContact.join("|"),
        address_id: this.addressId,
      };
    },
    async saveContact(addressId) {
      let formData = this.getContactForm();

      if (formData.address_id == null || formData.address_id == 0) {
        formData.address_id = addressId;
      }
      var response = null;
      if (this.newContact) {
        response = await this.saveNewContact(formData);
      } else {
        response = await this.saveEditContact(formData);
      }
      return response;
    },
    async saveNewContact(formData) {
      var response = (await ContactResource.createContact(formData)).data;
      return response;
    },
    async saveEditContact(formData) {
      var response = (await ContactResource.updateContact(this.id, formData))
        .data;
      return response;
    },
    async isValidContactForm() {
      return await this.$refs.observer.validate();
    },
  },
};
</script>

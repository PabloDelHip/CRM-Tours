<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card card-warning">
        <div class="card-header">
          <h3 class="card-title" v-if="newContact">Agregar nuevo contacto</h3>
          <h3 class="card-title" v-if="!newContact">Editar contacto</h3>
        </div>
        <div class="card-body">
          <transition name="fade">
            <div
              class="alert alert-danger alert-dismissible text-center"
              v-if="errors.length > 0"
            >
              <ul>
                <li v-for="(e, index) in errors" :key="index"> {{ e }}</li>
              </ul>
            </div>
            <div
              class="alert alert-success alert-dismissible text-center"
              v-if="successMessage.length > 0"
            >
              {{ successMessage }}
            </div>
          </transition>
          <div class="form-group" v-show="false">
            <label for="typeContact">Tipo de contacto</label>
            <select
              name="typeContact"
              class="custom-select"
              v-model.number="typeContact"
            >
              <option value="1">Usuario</option>
              <option value="2">Proveedor</option>
              <option value="3">Cliente</option>
            </select>
          </div>
          <div class="form-group">
            <label for="rfcContact">RFC</label>
            <input
              type="text"
              name="rfcContact"
              class="form-control"
              v-model="rfcContact"
              placeholder="CUPU800825569"
            />
          </div>
          <div class="form-group">
            <label for="typePerson">Tipo persona</label>
            <select
              name="typePerson"
              class="custom-select"
              v-model.number="typePerson"
            >
              <option value="1">Física</option>
              <option value="2">Moral</option>
            </select>
          </div>
          <div class="form-group">
            <label for="emailsContact">Correos electrónicos</label>
            <input
              type="text"
              name="emailsContact"
              class="form-control"
              v-model="emailsContact"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="mobilesContact">Teléfonos móviles</label>
            <input
              type="text"
              name="mobilesContact"
              class="form-control"
              v-model="mobilesContact"
              placeholder=""
            />
          </div>
          <div class="form-group">
            <label for="phonesContact">Teléfonos</label>
            <input
              type="text"
              name="phonesContact"
              class="form-control"
              v-model="phonesContact"
              placeholder=""
            />
          </div>
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
</template>

<script>
import Contact from "../../providers/Contact";
import AddressComponent from "../../components/Address/addressComponent.vue";

const ContactResource = new Contact();

export default {
  props: {
    id: {
      type: Number,
      required: false,
    },
    typeContact: {
      type: Number,
      required: true,
    },
  },
  components: {
    AddressComponent,
  },
  data() {
    return {
      newContact: true,
      // typeContact: 0,

      contact: null,
      addressId: null,
      errors: [],
      successMessage: "",

      // Contacto
      rfcContact: null,
      typePerson: 0,
      emailsContact: null,
      mobilesContact: null,
      phonesContact: null,
    };
  },
  created() {},
  watch: {
    id: function(val) {
      this.newContact = this.id == null;
      this.getContact();
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

      this.addressId = this.contact.address_id;
      this.typeContact = this.contact.type;
      this.rfcContact = this.contact.rfc;
      this.typePerson = this.contact.type_person;
      this.emailsContact = this.contact.emails;
      this.mobilesContact = this.contact.moviles;
      this.phonesContact = this.contact.phones;
    },
    getContactForm() {
      return {
        type: this.typeContact,
        rfc: this.rfcContact,
        type_person: this.typePerson,
        emails: this.emailsContact,
        moviles: this.mobilesContact,
        phones: this.phonesContact,
        address_id: this.addressId,
      };
    },
    async saveContact() {
      const saveAddressResponse = await this.$refs.addressComponent.saveAddress();
      if (saveAddressResponse.success) {
        this.addressId = saveAddressResponse.data.id;
      }
      else{
        return saveAddressResponse;
      }

      this.errors = [];
      let formData = this.getContactForm();
      var response = null;

      if (this.newContact) {
        response = await this.saveNewContact(formData);
      } else {
        response = await this.saveEditContact(formData);
      }
      if (!response.success){
        this.errors.push("Error al guardar contacto.");
      }
      this.successMessage = "Dirección guardada correctamente.";

      return response;
    },
    async saveNewContact(formData) {
      var response = (await ContactResource.createContact(formData)).data;
      return response;
    },
    async saveEditContact(formData) {
      var response = (await ContactResource.updateContact(this.id, formData)).data;
      return response;
    },
    isValidContactForm() {
      const addressResponse = this.$refs.addressComponent.isValidAddressForm();
      const errors = [];
      if (this.typeContact == null || this.typeContact == "") {
        errors.push("Tipo de contacto no puede estar vacio.");
      }
      if (this.rfcContact == null || this.rfcContact == "") {
        errors.push("RFC no puede estar vacio.");
      }
      if (this.typePerson == null || this.typePerson == "") {
        errors.push("Tipo de persona no puede estar vacio.");
      }
      if (this.emailsContact == null || this.emailsContact == "") {
        errors.push("Correos electrónicos no puede estar vacio.");
      }
      if (this.mobilesContact == null || this.mobilesContact == "") {
        errors.push("Teléfonos móviles no puede estar vacio.");
      }
      if (this.phonesContact == null || this.phonesContact == "") {
        errors.push("Teléfonos no puede estar vacio.");
      }
      this.errors = errors;
      return errors.concat(addressResponse);
    },
  },
};
</script>

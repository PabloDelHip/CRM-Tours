<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>
              Contacto{{
                this.NameContactEdit == null ? "" : " - " + this.NameContactEdit
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
                <router-link :to="{ name: 'ListVendor' }">
                  Agencias
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link
                  :to="{ name: 'listContactsVendor', params: { id: +this.id } }"
                >
                  Contactos
                </router-link>
              </li>
              <li class="breadcrumb-item active">
                Contacto{{
                  this.NameContactEdit == null
                    ? ""
                    : " - " + this.NameContactEdit
                }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <profile-component
            :id="+this.ProfileId"
            :contactId="+this.refContactId"
            @get-name="NameContactEdit = $event"
            ref="profileComponent"
          ></profile-component>
        </div>
        <div class="col-md-6">
          <contacts-component
            :id="+this.refContactId"
            :addressId="this.addressId"
            :typeContact="this.typeContact"
            @get-addressId="addressId = $event"
            ref="contactComponent"
          ></contacts-component>
        </div>
        <div class="col-md-6">
          <address-component
            :id="+this.addressId"
            :readOnly="true"
            ref="addressComponent"
          ></address-component>
        </div>
        <div class="col-md-12">
          <button type="button" @click="saveContent()" class="btn btn-primary">
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactVendor from "../../../providers/ContactVendor";
import Profile from "../../../providers/Profile";
import Vendor from "../../../providers/Vendor";

import AddressComponent from "../../../components/Address/addressComponent.vue";
import ContactsComponent from "../../../components/Contacts/contactsComponent.vue";
import ProfileComponent from "../../../components/Profile/ProfileComponent.vue";

const vendorResource = new Vendor();
const profileResource = new Profile();
const contactVendorResource = new ContactVendor();

export default {
  components: { ProfileComponent, ContactsComponent, AddressComponent },
  props: {
    id: {
      required: true,
    },
    contactId: {
      required: false,
    },
  },
  data() {
    return {
      addressId: null,
      ProfileId: null,

      newContact: false,
      refContactId: 0,

      vendor: null,
      profile: null,

      NameContactEdit: null,
      typeContact: 0,
    };
  },
  watch: {
    contactId: function(val) {
      this.newContact = this.contactId == null;
    },
  },
  async mounted() {
    this.newContact = this.contactId == undefined;
    if (this.newContact) {
      await this.getVendor();
    } else {
      this.refContactId = +this.contactId;
      await this.getProfile();
    }
    this.typeContact = 2;
  },
  methods: {
    async saveContent() {
      const contactResponse = await this.$refs.contactComponent.isValidContactForm();
      const profileResponse = await this.$refs.profileComponent.isValidProfileForm();
      if (!contactResponse || !profileResponse) {
        this.showWarning("Hay campos faltantes.");
        return;
      }

      try {
        const saveContactResponse = await this.$refs.contactComponent.saveContact(
          this.addressId
        );
        if (saveContactResponse.success) {
          this.refContactId = saveContactResponse.data.id;
        } else {
          throw saveContactResponse.err;
        }
      } catch (ex) {
        console.error(ex);
        this.showError("Error al guardar el contacto.");
        return;
      }

      try {
        var saveProfileResponse = await this.$refs.profileComponent.saveProfile(
          this.refContactId
        );
        if (saveProfileResponse.success) {
          this.ProfileId = saveProfileResponse.data.id;
        } else {
          throw saveProfileResponse.err;
        }
      } catch (ex) {
        console.error(ex);
        this.showError("Error al guardar el perfil.");
        return;
      }

      if (this.newContact) {
        await this.saveContactVendor();
      }

      this.showSuccess("Informacion guardada correctamente.");
      if (this.newContact){
        setTimeout(async () => {
          this.$router.push({
            name: "editContactsVendor",
            params: { id: +this.id, contactId: +this.refContactId },
          });
        }, 3000);
      }
    },
    getContactVendorForm() {
      return {
        contact_id: +this.refContactId,
        vendor_id: +this.id,
      };
    },
    async saveContactVendor() {
      try {
        var response = (
          await contactVendorResource.createContactVendor(
            this.getContactVendorForm()
          )
        ).data;
      } catch (error) {
        this.showError(
          "Disculpe tuvimos un error para guardar relación del contacto."
        );
      }
    },
    async getProfile() {
      var response = (
        await profileResource.getProfileByContactId(this.refContactId)
      ).data;
      if (!response.success) {
        this.showError("Error al obtener perfil.");
        return false;
      }
      this.profile = response.data;
      if (this.profile == "") {
        this.showError("Perfil no existe.");
        return false;
      }
      this.ProfileId = this.profile.id;
      return true;
    },
    async getVendor() {
      var response = (await vendorResource.getVendor(this.id)).data;
      if (!response.success) {
        this.showError("Agencia no encontrada!");
        this.$router.push({ path: "/" });
        return;
      }
      this.vendor = response.data;
      this.addressId = this.vendor.address_id;
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

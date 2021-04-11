<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Contactos</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/' }">
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/vendors' }">
                  Agencias
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/vendors/contacts/'+ this.id }">
                  Contactos
                </router-link>
              </li>
              <li class="breadcrumb-item active">Contacto</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <div class="container-fluid">
      <!-- <ValidationObserver v-slot="{validate }" ref="observer"> -->
      <div class="row">
        <div class="col-md-6">
          <profile-component :id="+this.ProfileId"
            :contactId="this.refContactId"
            ref="profileComponent"></profile-component>
        </div>
        <div class="col-md-6">
          <contacts-component
            :id="this.refContactId"
            :addressId="this.addressId"
            :typeContact="2"
            @get-addressId="addressId = $event"
            ref="contactComponent"
          ></contacts-component>
        </div>
        <div class="col-md-6">
          <address-component
            :id="+this.addressId"
            ref="addressComponent"
          ></address-component>
        </div>
        <div class="col-md-12">
          <button type="button" @click="saveContent()" class="btn btn-primary">
            Guardar
          </button>
        </div>
      </div>
      <!-- </ValidationObserver> -->
    </div>
  </div>
</template>

<script>
import AddressComponent from '../../../components/Address/addressComponent.vue';
import ContactsComponent from '../../../components/Contacts/contactsComponent.vue';
import ProfileComponent from '../../../components/Profile/ProfileComponent.vue';

import Vendor from '../../../providers/Vendor';

const vendorResource = new Vendor();

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
    };
  },
  watch: {
    contactId: function(val) {
      this.newContact = this.contactId == null;
    },
  },
  async created() {
    this.newContact = this.contactId == undefined;
    if (!this.newContact){
      this.refContactId = +this.contactId;
    }
    await this.getVendor();
  },
  methods:{
    async saveContent() {
      const contactResponse = this.$refs.contactComponent.isValidContactForm();
      const profileErrors = this.$refs.profileComponent.isValidProfileForm();
      const allErrors = contactResponse
        .concat(profileErrors);
      if (allErrors.length > 0) {
        return;
      }
      
      const saveContactResponse = await this.$refs.contactComponent.saveContact();
      if (saveContactResponse.success) {
        this.refContactId = saveContactResponse.data.id;
      } else {
        return;
      }
      
      var saveProfileResponse = await this.$refs.profileComponent.saveProfile();
      if (saveProfileResponse.success) {
        this.ProfileId = saveProfileResponse.data.id;
      } else {
        return;
      }

      setTimeout(()=>{
        this.$refs.profileComponent.saveProfile();
      }, 1500);
    },
    async getVendor() {
      var response = (await vendorResource.getVendor(this.id)).data;
      if (!response.success) {
        this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            toast: true,
            position: 'top',
            timer: 3000,
            showConfirmButton: false,
            timerProgressBar: true,
            text: 'Agencia no encontrada!',
        })
        setTimeout(() => {
          this.$router.push({
            path: "/",
          });
        }, 3500);
        return;
      }
      this.vendor = response.data;
      this.addressId = this.vendor.address_id;
    },
  },
}
</script>
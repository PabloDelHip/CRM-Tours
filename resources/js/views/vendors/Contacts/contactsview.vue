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
            :contactId="+this.ContactId"
            ref="profileComponent"></profile-component>
        </div>
        <div class="col-md-6">
          <contacts-component
            :id="+this.ContactId"
            :addressId="this.addressId"
            :typeContact="1"
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
      ContactId: null,
      ProfileId: null,
    };
  },
  methods:{
    async saveContent() {
      const addressResponse = this.$refs.addressComponent.isValidAddressForm();
      const contactResponse = this.$refs.contactComponent.isValidContactForm();
      const profileErrors = this.$refs.profileComponent.isValidProfileForm();
      const allErrors = addressResponse
        .concat(contactResponse)
        .concat(profileErrors);
      if (allErrors.length > 0) {
        return;
      }
    },
  },
}
</script>
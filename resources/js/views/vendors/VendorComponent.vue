<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Agencia</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/' }">
                Home
                </router-link>
              </li>
              <li class="breadcrumb-item" v-if="id == null">
                <router-link :to="{ name: 'ListVendor' }">
                Agencias
                </router-link>
              </li>
              <li class="breadcrumb-item active">Agencia</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <div class="container-fluid">
      <!-- <ValidationObserver v-slot="{validate }" ref="observer"> -->
      <div class="row">
        <div class="col-md-6">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title" v-if="newVendor">Agregar nueva agencia</h3>
              <h3 class="card-title" v-else>Editar agencia</h3>
            </div>
            <div class="card-body">
              <transition name="fade">
                <div
                  class="alert alert-danger"
                  v-if="vendorErrors.length > 0"
                >
                  <ul>
                    <li v-for="(e, index) in vendorErrors" :key="index">{{ e }}</li>
                  </ul>
                </div>
                <div
                  class="alert alert-success text-center"
                  v-if="successVendorMessage.length > 0"
                >
                  {{ successVendorMessage }}
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <contacts-component
            :id="+this.ContactId"
            :typeContact="2"
            ref="contactComponent"
          ></contacts-component>
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
import ContactsComponent from "../../components/Contacts/contactsComponent.vue";

export default {
  props: {
    id: {
      // Revisar como convertirlo en número
      required: false,
    },
  },
  components: {
    ContactsComponent,
  },
  data() {
    return {
      vendorErrors: [],
      successVendorMessage: [],

      ContactId: null,

      newVendor: false,
      vendor: null,
    };
  },
  created() {
    if (this.id != undefined) {
    }
    this.newVendor = this.id == undefined || this.vendor == "" || this.vendor == null;
  },
  methods:{
    async saveContent() {
      const contactResponse = this.$refs.contactComponent.isValidContactForm();
      const allErrors = contactResponse;
      if (allErrors.length > 0) {
        return;
      }
    },
  },
};
</script>
<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Tour{{ nameTourEdit == null ? "" : " - " + nameTourEdit }}</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/' }">
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'ListTours' }">
                  Tours
                </router-link>
              </li>
              <li class="breadcrumb-item active">
                Tour{{ nameTourEdit == null ? "" : " - " + nameTourEdit }}
              </li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <div class="row">
      <div class="col-12">
        <div class="card card-primary card-outline card-tabs">
          <div class="card-header p-0 pt-1 border-bottom-0">
            <ul class="nav nav-tabs" id="tours-tabs-tab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-toggle="pill"
                  href="#tours-tabs-tour-information"
                  role="tab"
                  aria-controls="tours-tabs-tour-information"
                  aria-selected="true"
                  >Información del tour</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="pill"
                  href="#tours-tabs-seo"
                  role="tab"
                  aria-controls="tours-tabs-seo"
                  aria-selected="false"
                  >SEO</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="pill"
                  href="#tours-tabs-general-information"
                  role="tab"
                  aria-controls="tours-tabs-general-information"
                  aria-selected="false"
                  >Información general</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="pill"
                  href="#tours-tabs-operation"
                  role="tab"
                  aria-controls="tours-tabs-operation"
                  aria-selected="false"
                  >Operación</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="pill"
                  href="#tours-tabs-images"
                  role="tab"
                  aria-controls="tours-tabs-images"
                  aria-selected="false"
                  >Imágenes</a
                >
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content" id="tours-tabs-tabContent">
              <div
                class="tab-pane fade active show"
                id="tours-tabs-tour-information"
                role="tabpanel"
                aria-labelledby="tours-tabs-tour-information-tab"
              >
                <tour-component
                  ref="tourComponent"
                  @get-name="nameTourEdit = $event"
                  :id="+this.id"
                ></tour-component>
              </div>
              <div
                class="tab-pane fade"
                id="tours-tabs-seo"
                role="tabpanel"
                aria-labelledby="tours-tabs-seo-tab"
              >
                <div class="overlay-wrapper">
                  <div class="overlay" v-show="false">
                    <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                    <div class="text-bold pt-2">Loading...</div>
                  </div>
                  <seo-tour-component
                    ref="seoTourComponent"
                    :idTour="+this.id"
                  ></seo-tour-component>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tours-tabs-general-information"
                role="tabpanel"
                aria-labelledby="tours-tabs-general-information-tab"
              >
                <div class="overlay-wrapper">
                  <div class="overlay" v-show="false">
                    <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                    <div class="text-bold pt-2">Loading...</div>
                  </div>
                  <general-information-component
                    ref="generalInformationComponent"
                    :idTour="+this.id"
                  ></general-information-component>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tours-tabs-operation"
                role="tabpanel"
                aria-labelledby="tours-tabs-operation-tab"
              >
                <div class="overlay-wrapper">
                  <div class="overlay" v-show="false">
                    <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                    <div class="text-bold pt-2">Loading...</div>
                  </div>
                  <operation-tour-component
                    ref="operationTourComponent"
                    :idTour="+this.id"
                  ></operation-tour-component>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="tours-tabs-images"
                role="tabpanel"
                aria-labelledby="tours-tabs-images-tab"
              >
                <div class="overlay-wrapper">
                  <div class="overlay" v-show="false">
                    <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                    <div class="text-bold pt-2">Loading...</div>
                  </div>
                  <images-tour-component
                    ref="imagesTourComponent"
                    :idTour="+this.id"
                  ></images-tour-component>
                </div>
              </div>
            </div>
          </div>
          <!-- /.card -->
        </div>
      </div>
      <div class="col-12">
        <button type="button" @click="saveContent()" class="btn btn-primary">
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TourComponent from "../../../components/Products/Tours/tourComponent.vue";
import GeneralInformationComponent from "../../../components/Products/Tours/generalInformationComponent.vue";
import ImagesTourComponent from "../../../components/Products/Tours/imagesTourComponent.vue";
import OperationTourComponent from "../../../components/Products/Tours/operationTourComponent.vue";
import SeoTourComponent from "../../../components/Products/Tours/seoTourComponent.vue";

export default {
  name: "tour-view",
  components: {
    TourComponent,
    SeoTourComponent,
    GeneralInformationComponent,
    OperationTourComponent,
    ImagesTourComponent,
  },
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      nameTourEdit: null,
    };
  },
  methods: {
    async saveContent() {
      if (!(await this.$refs.tourComponent.isValidForm())) {
        this.showWarning("Hay campos faltantes en el formulario tour.");
        return;
      }
      if (!(await this.$refs.seoTourComponent.isValidForm())) {
        this.showWarning("Hay campos faltantes en el formulario seo.");
        return;
      }
      if (!(await this.$refs.generalInformationComponent.isValidForm())) {
        this.showWarning("Hay campos faltantes en el formulario información general.");
        return;
      }
      if (!(await this.$refs.operationTourComponent.isValidForm())) {
        this.showWarning("Hay campos faltantes en el formulario operación.");
        return;
      }

      try {
        const saveTourResponse = await this.$refs.tourComponent.saveTour();
        if (!saveTourResponse.success) {
          throw saveTourResponse.err;
        }
      } catch (ex) {
        console.error(ex);
        this.showError("Error al guardar información del tour.");
        return;
      }
      try {
        const saveSeoTourResponse = await this.$refs.seoTourComponent.saveSeoTour();
        if (!saveSeoTourResponse.success) {
          throw saveSeoTourResponse.err;
        }
      } catch (ex) {
        console.error(ex);
        this.showError("Error al guardar Seo.");
        return;
      }
      try {
        const saveGeneralInformationResponse = await this.$refs.generalInformationComponent.saveGeneralInformation();
        if (!saveGeneralInformationResponse.success) {
          throw saveGeneralInformationResponse.err;
        }
      } catch (ex) {
        console.error(ex);
        this.showError("Error al guardar la información general.");
        return;
      }
      try {
        const saveOperationTourResponse = await this.$refs.operationTourComponent.saveOperationTour();
        if (!saveOperationTourResponse.success) {
          throw saveGeneralInformationResponse.err;
        }
      } catch (ex) {
        console.error(ex);
        this.showError("Error al guardar la operación.");
        return;
      }
      this.showSuccess("Informacion guardada correctamente.");
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

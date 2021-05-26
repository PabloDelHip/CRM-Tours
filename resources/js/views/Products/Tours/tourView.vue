<template>
  <div>
    <h1>Información del tour {{ this.id }}</h1>
    <div class="row">
      <div class="col-12">
          <div class="card card-primary card-outline card-tabs">
            <div class="card-header p-0 pt-1 border-bottom-0">
              <ul class="nav nav-tabs" id="tours-tabs-tab" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="pill" href="#tours-tabs-tour-information" role="tab" aria-controls="tours-tabs-tour-information" aria-selected="true">Información del tour</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="pill" href="#tours-tabs-seo" role="tab" aria-controls="tours-tabs-seo" aria-selected="false">SEO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="pill" href="#tours-tabs-general-information" role="tab" aria-controls="tours-tabs-general-information" aria-selected="false">Información general</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="pill" href="#tours-tabs-operation" role="tab" aria-controls="tours-tabs-operation" aria-selected="false">Operación</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="pill" href="#tours-tabs-images" role="tab" aria-controls="tours-tabs-images" aria-selected="false">Imágenes</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <div class="tab-content" id="tours-tabs-tabContent">
                <div class="tab-pane fade active show" id="tours-tabs-tour-information" role="tabpanel" aria-labelledby="tours-tabs-tour-information-tab">
                  <base-tour-component ref="baseTourComponent"></base-tour-component>
                </div>
                <div class="tab-pane fade" id="tours-tabs-seo" role="tabpanel" aria-labelledby="tours-tabs-seo-tab">
                  <div class="overlay-wrapper">
                    <div class="overlay" v-show="false">
                      <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                      <div class="text-bold pt-2">Loading...</div>
                    </div>
                    <seo-tour-component ref="seoTourComponent"></seo-tour-component>
                  </div>
                </div>
                <div class="tab-pane fade" id="tours-tabs-general-information" role="tabpanel" aria-labelledby="tours-tabs-general-information-tab">
                  <div class="overlay-wrapper">
                    <div class="overlay" v-show="false">
                      <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                      <div class="text-bold pt-2">Loading...</div>
                    </div>
                    <general-information-component ref="generalInformationComponent"></general-information-component>
                  </div>
                </div>
                <div class="tab-pane fade" id="tours-tabs-operation" role="tabpanel" aria-labelledby="tours-tabs-operation-tab">
                  <div class="overlay-wrapper">
                    <div class="overlay" v-show="false">
                      <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                      <div class="text-bold pt-2">Loading...</div>
                    </div>
                    <operation-tour-component ref="operationTourComponent"></operation-tour-component>
                  </div>
                </div>
                <div class="tab-pane fade" id="tours-tabs-images" role="tabpanel" aria-labelledby="tours-tabs-images-tab">
                  <div class="overlay-wrapper">
                    <div class="overlay" v-show="false">
                      <i class="fas fa-3x fa-sync-alt fa-spin"></i>
                      <div class="text-bold pt-2">Loading...</div>
                    </div>
                    <images-tour-component ref="imagesTourComponent"></images-tour-component>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card -->
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import baseTourComponent from "../../../components/Products/Tours/baseTourComponent.vue";
import GeneralInformationComponent from '../../../components/Products/Tours/generalInformationComponent.vue';
import ImagesTourComponent from '../../../components/Products/Tours/imagesTourComponent.vue';
import OperationTourComponent from '../../../components/Products/Tours/operationTourComponent.vue';
import SeoTourComponent from '../../../components/Products/Tours/seoTourComponent.vue';

export default {
  name: "tour-view",
  components: { 
    baseTourComponent, 
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
  data(){
    return {

    };
  },
  methods: {

  },
}
</script>
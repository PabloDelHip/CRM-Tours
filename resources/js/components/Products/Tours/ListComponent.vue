<template>
  <div>
    <div>
      <tour-modal-form-component
      :openModal="openModal"
      ref="tourModalFormComponent"
      ></tour-modal-form-component>
    </div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Tours</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/' }">
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item active">Tours</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Tours</h3>
            </div>
            <div class="card-header">
              <a 
                style="color: #fff;"
                class="btn btn-warning"
                @click="$refs.tourModalFormComponent.openModalForm()">
                <i class="fas fa-walking"></i>
                Nuevo Tour
              </a>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table
                id="usersTable"
                class="table table-bordered table-striped"
                style="width:100%"
              >
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Fecha de Creacion</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="tour in tours" :key="tour.id">
                    <td>{{ tour.name }}</td>
                    <td>{{ fechaFormato(tour.created_at) }}</td>
                    <td class="table-actions">
                      <div class="btn-group">
                        <router-link
                          class="btn btn-info btn-sm"
                          :to="{
                            name: 'editTour',
                            params: { id: +tour.id },
                          }"
                        >
                          <i class="fas fa-pencil-alt"> </i>
                        </router-link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import tourModalFormComponent from '../../../components/Products/Tours/tourModalFormComponent.vue';
import moment, { locales } from "moment";

import Tour from '../../../providers/products/Tour'

const TourResource = new Tour();

export default {
  components: { tourModalFormComponent },
  data(){
    return {
      tours: [],

      openModal: false,
    };
  },
  async created() {
    await this.getTours();
  },
  methods: {
    async getTours(){
      var response = (await TourResource.getTours()).data;
      if (response.success){
          this.tours = response.data;
      }
    },
    fechaFormato($fecha) {
      if ($fecha == null || $fecha == undefined) {
        return "-";
      }
      return moment($fecha).format("DD/MM/YYYY");
    },
  }
}
</script>
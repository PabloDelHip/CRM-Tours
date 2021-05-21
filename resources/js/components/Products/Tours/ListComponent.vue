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
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="tour in tours" :key="tour.id">
                    <td>{{ tour.name }}</td>
                    <td>{{ fechaFormato(tour.created_at) }}</td>
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

export default {
  components: { tourModalFormComponent },
  data(){
    return {
      tours: [],

      openModal: false,
    };
  },
  methods: {
    fechaFormato($fecha) {
      if ($fecha == null || $fecha == undefined) {
        return "-";
      }
      return moment($fecha).format("DD/MM/YYYY");
    },
  }
}
</script>
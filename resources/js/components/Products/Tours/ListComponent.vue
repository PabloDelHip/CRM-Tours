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
                        <button  @click="eliminarTour(tour.id)" class="btn btn-danger btn-sm">
                            <i class="fas fa-trash"> </i>
                        </button>
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

import Tour from '../../../providers/products/tours/Tour'

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
    async eliminarTour(idTour) {
      this.$swal.fire({
        title: '¿Esta seguro que desea eliminar el tour?',
        text: "El tour sera eliminado de forma permanente",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'Cancelar'
        }).then( async (result) => {
            if (result.isConfirmed) {
                try {
                    await TourResource.deleteTour(idTour);
                    await this.getTours();
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Bien',
                        toast: true,
                        position: 'top',
                        timer: 3000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        text: 'Tour eliminado de forma correcta',
                    })
                } catch (error) {
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        toast: true,
                        position: 'top',
                        timer: 3000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        text: 'Disculpe tuvimos un error para eliminar el tour',
                    })
                }
            }
        })
    }
  }
}
</script>
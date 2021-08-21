<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Paquete</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/' }"> Home </router-link>
              </li>
              <li class="breadcrumb-item active">Paquete</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>

    <div class="row">
      <div class="col-6">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Información paquete</h3>
          </div>
          <div class="card-body">
            <form-create-component ref="paqueteComponent"></form-create-component>
          </div>
          <button class="btn btn-primary" @click="editPackage()">Modificar Paquete</button>
        </div>
      </div>

      <div class="col-6">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">Tours</h3>
          </div>
          <div class="card-body">
            <div class="col-12">
              <select v-model="idTour" class="custom-select rounded-0 mb-3">
                <option value=''>Seleccionar Tour</option>
                <option :value="tour.id" v-for="tour in toursList" :key="tour.id">
                  {{ tour.name }}
                </option>
              </select>
              
              <button @click="addTour()" class="btn btn-primary btn-sm">Agregar Tour</button>
            </div>
            <hr>
            <table
              id="usersTable"
              class="table table-bordered table-striped"
              style="width: 100%"
            >
              <thead>
                <tr>
                  <th>Tour</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="tour in tours" :key="tour.id">
                  <td>{{ tour.tour.name }}</td>
                  <td class="table-actions">
                    <div class="btn-group">
                      <button  @click="deleteTour(tour.tour_id)" class="btn btn-danger btn-sm">
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
</template>

<script>
import FormCreateComponent from "./FormCreateComponent";
import Tour from "../../../providers/products/tours/Tour";
import Packages from "../../../providers/Packages";

const TourResource = new Tour();
const PackagesResource = new Packages();
export default {
  props: ["idPaquete"],
  data() {
    return {
      tours: [],
      toursList: [],
      idTour: ''
    };
  },
  components: { FormCreateComponent },
  methods: {
    async deleteTour(id_tour) {
      try {
        await PackagesResource.deleteTour(id_tour, this.idPaquete);
        this.getTourSelected();
      } catch (error) {
        alert('Error al eliminar');
      }
    },
    async editPackage() {
      this.$refs.paqueteComponent.editPackage(this.idPaquete);
    },
    async getTours() {
      const { data: {data} } = await TourResource.getTours();
      this.toursList = data;
    },
    async getTourSelected() {
      try {
        const {data: {data}} = await PackagesResource.findPackageTour(this.idPaquete);
        this.tours = data
        console.log('Tures', this.tours);
      } catch (error) {
        
      }
    },
    async addTour() {
      try {
        await PackagesResource.addTour({package_id: this.idPaquete, tour_id: this.idTour});
        this.getTourSelected();
      } catch (error) {
        alert('Error al guardar la informacion');
      }
    }
  },
  mounted() {
    console.log('BUSVCABDO')
    this.$refs.paqueteComponent.getdataPaquete(this.idPaquete);
    this.getTourSelected();
    this.getTours();
  },
};
</script>

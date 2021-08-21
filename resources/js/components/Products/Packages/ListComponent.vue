<template>
  <div>
    <div>
      <modal-form
      :openModal="openModal"
      ref="tourModalFormComponent"
      ></modal-form>
    </div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Paquetes</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/' }">
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item active">Paquetes</li>
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
                Nuevo Paquete
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
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="paquete in paquetes" :key="paquete.id">
                    <td>{{ paquete.name }}</td>
                    <td class="table-actions">
                      <div class="btn-group">
                        <router-link
                          class="btn btn-info btn-sm"
                          :to="{
                            name: 'EditPackageView',
                            params: { id: paquete.id },
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
import ModalForm from '../../../components/Products/Packages/ModalForm';
import moment, { locales } from "moment";

import Tour from '../../../providers/products/tours/Tour'
import Package from '../..,/../../../providers/Packages'

const TourResource = new Tour();
const PackageResource = new Package();

export default {
  components: { ModalForm },
  data(){
    return {
      paquetes: [],

      openModal: false,
    };
  },
  async created() {
    await this.getTours();
  },
  methods: {
    async getTours(){
      const { data: {data} } = await PackageResource.findAll();
      this.paquetes = data;
      console.log(this.paquetes);
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
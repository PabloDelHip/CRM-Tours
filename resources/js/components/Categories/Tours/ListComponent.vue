<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/' }">
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item active">Categorias</li>
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
              <h3 class="card-title"><i class="fas fa-list-alt"></i> Categorias</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table
                style="width:100%"
                id="example1"
                class="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Ver en el inicio</th>
                    <th>Status</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="categorie in categories" :key="categorie.id">
                    <td>{{ categorie.name }}</td>
                    <td v-if="categorie.see_home" class="text-center">
                        <span class="right badge badge-success text-center">Si</span>
                    </td>
                    <td v-else class="text-center">
                        <span class="right badge badge-danger">No</span>
                    </td>
                    <td v-if="categorie.status" class="text-center">
                        <span class="right badge badge-success text-center">Activa</span>
                    </td>
                    <td v-else class="text-center">
                        <span class="right badge badge-danger">Inactiva</span>
                    </td>
                    
                    <td class="table-actions">
                      <div class="btn-group">
                        <router-link
                          class="btn btn-primary btn-sm"
                          :to="{
                            name: 'profileVendor',
                            params: { id: categorie.id },
                          }"
                        >
                          <i class="far fa-eye"></i>
                        </router-link>

                        <button v-if="categorie.see_home == 0" @click="updateCategorieStatus(categorie.id, { status: categorie.status, see_home: 1 })" class="btn btn-success btn-sm">
                            <i class="fas fa-home"></i>
                        </button>
                        <button  v-else @click="updateCategorieStatus(categorie.id, { status: categorie.status, see_home: 0 })" class="btn btn-danger btn-sm">
                            <i class="fas fa-home"></i>
                        </button>

                        <button v-if="categorie.status == 0" @click="updateCategorieStatus(categorie.id, { status: 1, see_home: categorie.see_home })" class="btn btn-success btn-sm">
                            <i class="fas fa-trash"> </i>
                        </button>
                        <button  v-else @click="updateCategorieStatus(categorie.id, { status: 0, see_home: categorie.see_home })" class="btn btn-danger btn-sm">
                            <i class="fas fa-trash"> </i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- /.card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Categorie from "../../../providers/Categorie";

import modalFormComponent from "../../../components/Customers/modalFormComponent";

const categorieResource = new Categorie();
export default {
  name: "TableCategorie",
  components: {
    modalFormComponent,
  },
  data() {
    return {
      categories: [],
      modalEdit: false,
      destroyTable: false,
    };
  },
  methods: {
    async getListCategories() {
      try {
        //Cambiar el 1 por el idProvider
        this.categories = await categorieResource.getListCategories();
        this.categories = this.categories.data.data;
        //console.log(this.categories)
        if (this.destroyTable) {
          $("#example1")
            .DataTable()
            .destroy();
          this.createTable();
        }
        this.destroyTable = true;
      } catch (error) {
        console.log(error);
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          toast: true,
          position: "top",
          timer: 3000,
          showConfirmButton: false,
          timerProgressBar: true,
          text: "Disculpe tuvimos un error para cargar los contactos",
        });
      }
    },
    async updateCategorieStatus($id_categorie, formData) {
      try {
        await categorieResource.updateCategorieStatus($id_categorie, formData);
        this.getListCategories();
      } catch (error) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          toast: true,
          position: "top",
          timer: 3000,
          showConfirmButton: false,
          timerProgressBar: true,
          text: "Disculpe tuvimos un error para eliminar la agencia",
        });
      }
    },
    createTable() {
      $(function() {
        //SUMMERNOTE
        $("#editor").summernote();
        //DATA-TABLE
        $("#example1")
          .DataTable({
            lengthChange: false,
            searching: true,
            ordering: true,
            info: true,
            autoWidth: true,
            responsive: true,
            buttons: ["copy", "csv", "excel", "pdf", "print"],
            language: {
              decimal: "",
              emptyTable: "No hay información",
              info: "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
              infoEmpty: "Mostrando 0 to 0 of 0 Entradas",
              infoFiltered: "(Filtrado de _MAX_ total entradas)",
              infoPostFix: "",
              thousands: ",",
              lengthMenu: "Mostrar _MENU_ Entradas",
              loadingRecords: "Cargando...",
              processing: "Procesando...",
              search: "Buscar:",
              zeroRecords: "Sin resultados encontrados",
              paginate: {
                first: "Primero",
                last: "Ultimo",
                next: "Siguiente",
                previous: "Anterior",
              },
            },
          })
          .buttons()
          .container()
          .appendTo("#example1_wrapper .col-md-6:eq(0)");
      });
    },
  },
  async mounted() {
    await this.getListCategories();
    this.createTable();
  },
};
</script>

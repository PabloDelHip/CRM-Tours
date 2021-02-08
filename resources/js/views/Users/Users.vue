<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Usuarios</h3>
          </div>
          <div class="card-header">
            <a class="btn btn-warning" @click="newUser()">
              <i class="fas fa-user"></i> 
              Nuevo Usuario
            </a>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <transition name="fade">
                <div class="alert alert-dismissible text-center" :class="{
                    'alert-danger': showError,
                    'alert-warning': showWarning,
                    'alert-success': showSuccess,
                  }"  v-if="showError || showSuccess || showWarning">
                    {{ message }}
                </div>
            </transition>
            <table id="usersTable" class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Estatus</th>
                  <th>Fecha de Creacion</th>
                  <th>Ultima Actualización</th>
                  <!-- <th colspan="2"></th> -->
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{user.name}}</td>
                  <td>{{user.email}}</td>
                  <td v-if="user.status == 1">Activo</td>
                  <td v-if="user.status == 0">Inactivo</td>
                  <td>{{user.created_at}}</td>
                  <td>{{user.updated_at}}</td>
                  <td><button class="btn btn-primary" @click="editUser(user.id)">Ver</button></td>
                  <td><button class="btn btn-danger" @click="deleteUser(user.id)">Eliminar</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container-fluid -->
</template>

<script>
import user from "../../providers/User";
import datatables from "datatables";
const userResource = new user();

export default {
  name: "users-get",
  data() {
    return {
      users: "",
      message: null,
      showError: null,
      showSuccess: null,
      showWarning: null,
    };
  },
  mounted() {
    this.obtenerUsuarios();
  },
  methods: {
    newUser(){
      window.location.href = '/users/create';
    },
    editUser($id){
      window.location.href = '/users/edit/'+ $id;
    },
    async obtenerUsuarios() {
      try {
        var response = (await userResource.getUsers()).data;
        if (response.success){
          this.users = response.data;
          $("#usersTable").DataTable().destroy();
          this.tableusers();
        }
        else{
          this.message = "Lista de usuarios vacia";
          this.showWarning = true;
        }
      } catch (error) {
        this.message = "No se pudo obtener usuarios";
        this.showError = true;
      }
    },
    async deleteUser($id) {
      if (confirm("¿Esta seguro que desea eliminarlo?")) {
        try {
          var response = (await userResource.deleteUsers($id)).data;
          if (response.success){
            this.message = "El usuario se ha eliminado correctamente",
            this.showSuccess = true;
            this.obtenerUsuarios();
          }
          else{
            this.message = "No se pudo eliminar el usuario";
            this.showError = true;
          }
        } catch (error) {
          this.message = "No se pudo eliminar el usuario";
          this.showError = true;
        }
      }
    },
    tableusers(){
      this.$nextTick(() => {
        $("#usersTable").DataTable({
        "lengthChange": false,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "responsive": true,
        "buttons": [
          {"extend": "copyHtml5", "text": "<i class='fas fa-copy'></i> Copiar", "titleAttr": "Copiar", "ClassName": "btn btn-secundary"},
          {"extend": "excelHtml5", "text": "<i class='fas fa-file-excel'></i> Excel", "titleAttr": "Exportar a Excel", "ClassName": "btn btn-success"},
          {"extend": "pdfHtml5", "text": "<i class='fas fa-file-pdf'></i> PDF", "titleAttr": "Exportar a PDF", "ClassName": "btn btn-danger"},
          {"extend": "csvHtml5", "text": "<i class='fas fa-file-csv'></i> CSV", "titleAttr": "Exportar a CSV", "ClassName": "btn btn-info"},
          {"extend": "print", "text": "<i class='fas fa-print'></i> Imprimir", "titleAttr": "Imprimir", "ClassName": "btn btn-secondary"},
          {"extend": "colvis", "text": "Columnas Visibles", "titleAttr": "Columnas visibles", "ClassName": "btn btn-info"}
          ],
        oLanguage: {"sSearch": "Busqueda",
          "oPaginate": { "sNext": "Siguiente", "sFirst": "Primero", "sLast": "Ultimo","sPrevious": "Anterior"},
          "sEmptyTable": "No hay Registros",
          "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
          "sInfoEmpty": "No hay entradas que mostrar"}
        }).buttons().container().appendTo('#usersTable_wrapper .col-md-6:eq(0)');
      });
    }
  },
};
</script>

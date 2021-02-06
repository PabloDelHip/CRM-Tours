<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Usuarios</h3>
          </div>
          <div class="card-header">
            <button class="btn btn-warning" v-on:click="onClickNewUser()">Nuevo Usuario</button>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <table id="example1" class="table table-bordered table-striped">
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
                  <td v-if="user.active = 1">Activo</td>
                  <td v-if="user.active = 0">Inactivo</td>
                  <td>{{user.created_at}}</td>
                  <td>{{user.updated_at}}</td>
                  <td><button class="btn btn-primary" v-on:click="onClickShow(user.id)">Ver</button></td>
                  <td><button class="btn btn-danger" v-on:click="onClickDelete(user.id)">Eliminar</button></td>
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
    };
  },
  mounted() {
    this.obtenerUsuarios();
  },
  methods: {
    async obtenerUsuarios() {
      try {
        this.users = await userResource.getUsers();
        this.users = this.users.data.data;
        this.tableusers();
      } catch (error) {
        alert("No se pudo obtener usuarios");
      }
    },
    onClickDelete($id) {
      if (confirm("¿Esta seguro que desea eliminarlo?")) {
        try {
          this.users = userResource.deleteUsers($id);
          alert("El Usuario se ha eliminado correctamente");
        } catch (error) {
          alert("No se pudo eliminar el usuario");
        }
      }
      this.obtenerUsuarios();
    },
    onClickShow($id) {
      alert("ver usuario");
    },
    onClickNewUser() {
      if (confirm("¿Desea agregar un nuevo usuario?")) {
        alert("redirecciona a la ventana de nuevo usuario");
      }
    },
    tableusers() {
      $(document).ready(function () {
        $("#example1").DataTable({
          responsive: true,
          lengthChange: false,
          autoWidth: false,
          buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
          oLanguage: {"sSearch": "Busqueda",
                      "oPaginate": { "sNext": "Siguiente", "sFirst": "Primero", "sLast": "Ultimo","sPrevious": "Anterior"},
                      "sEmptyTable": "No hay Registros",
                      "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
                      "sInfoEmpty": "No entries to show"}
        })
        .buttons()
        .container()
        .appendTo("#example1_wrapper .col-md-6:eq(0)");
      $("#example2").DataTable({
        paging: true,
        lengthChange: false,
        searching: false,
        ordering: true,
        info: true,
        autoWidth: false,
        responsive: true,
      });
      });
    },
  },
};
</script>

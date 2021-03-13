<template>
  <div>
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Usuarios</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/' }">
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item active">Usuarios</li>
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
              <h3 class="card-title">Usuarios</h3>
            </div>
            <div class="card-header">
              <router-link v-if="userPermission.create"
                :to="{ name: 'CreateUser' }"
                name="created"
                style="color: #fff;"
                class="btn btn-warning"
              >
                <i class="fas fa-user"></i>
                Nuevo Usuario
              </router-link>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <transition name="fade">
                <div
                  class="alert alert-dismissible text-center"
                  :class="{
                    'alert-danger': showError,
                    'alert-warning': showWarning,
                    'alert-success': showSuccess,
                  }"
                  v-if="showError || showSuccess || showWarning"
                >
                  {{ message }}
                </div>
              </transition>
              <table
                id="usersTable"
                class="table table-bordered table-striped"
                style="width:100%"
              >
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Tipo de Usuario</th>
                    <th>Fecha de Creacion</th>
                    <th>Ver</th>
                    <th v-if="this.userPermission.delete">Eliminar</th>
                    <th v-if="this.permissionPermission.read">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{ user.profile.name }}</td>
                    <td>{{ user.profile.last_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.type }}</td>
                    <td>{{ fechaFormato(user.created_at) }}</td>
                    <td>
                      <router-link
                        name="read"
                        class="btn btn-primary btn-sm"
                        :to="{ name: 'perfilUsuario', params: { id: user.id } }"
                      >
                        <!--:to="this.read == 1 ? { name:'perfilUsuario', params: { id: user.id }} : ''"> -->
                        Ver
                      </router-link>
                    </td>
                    <td v-if="userPermission.delete">
                      <button
                        name="delete"
                        class="btn btn-danger btn-sm"
                        @click="deleteUser(user.id)"
                      >
                        Eliminar
                      </button>
                    </td>
                    <td v-if="permissionPermission.read">
                      <router-link
                        class="btn btn-secondary btn-sm"
                        :to="{ name: 'permisos', params: { id: user.id } }"
                        >Permisos</router-link
                      >
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
import user from "../../providers/User";
import UserPermissions from "../../providers/UserPermission";
import moment, { locales } from "moment";
const userResource = new user();
const userPermissionResource = new UserPermissions();

const UserNameModule = "Usuarios";
const PermissionNameModule = "Permisos";

export default {
  name: "users-get",
  props: {
    event: 0,
  },
  data() {
    return {
      users: "",
      message: null,
      showError: null,
      showSuccess: null,
      showWarning: null,
      userPermission: [],
      permissionPermission: [],
    };
  },
  computed: {
    user: function () {
      return this.$store.state.user;
    }
  },
  async created() {
    await this.setPermissions();
    this.obtenerUsuarios();
  },
  methods: {
    async setPermissions(){
      this.userPermission = await this.getPermission(UserNameModule);
      this.permissionPermission = await this.getPermission(PermissionNameModule);
    },
    async getPermission(name) {
      var response = (await userPermissionResource.UserPermissionsByModule(this.user.id, name)).data;
      if (!response.success){
        this.$router.push({
            name: 'notauthorized',
        });
      }
      return response.data.permission;
    },
    async obtenerUsuarios() {
      try {
        var response = (await userResource.getUsers()).data;
        if (response.success) {
          this.users = response.data;
          $("#usersTable")
            .DataTable()
            .destroy();
          this.tableusers();
        } else {
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
          if (response.success) {
            (this.message = "El usuario se ha eliminado correctamente"),
              (this.showSuccess = true);
            this.obtenerUsuarios();
          } else {
            this.message = "No se pudo eliminar el usuario";
            this.showError = true;
          }
        } catch (error) {
          this.message = "No se pudo eliminar el usuario";
          this.showError = true;
        }
      }
    },
    // habilitarbotones(){
    //   $("#delete").on("click", function(){
    //     console.log(this.delete);
    //    return this.permitsModuls[0]["delete"];
    //   //  if(this.delete==1) {
    //   //     $(this).prop('disabled', true);
    //   //  }else {
    //   //     $(this).prop('disabled', false);
    //   //  }
    //   });
    // },
    fechaFormato($fecha) {
      if ($fecha == null || $fecha == undefined) {
        return "-";
      }
      return moment($fecha).format("DD/MM/YYYY");
    },
    tableusers() {
      this.$nextTick(() => {
        $("#usersTable")
          .DataTable({
            lengthChange: false,
            searching: true,
            ordering: true,
            info: true,
            autoWidth: true,
            responsive: true,
            buttons: [
              {
                extend: "copyHtml5",
                text: "<i class='fas fa-copy'></i> Copiar",
                titleAttr: "Copiar",
                ClassName: "btn btn-secundary",
              },
              {
                extend: "excelHtml5",
                text: "<i class='fas fa-file-excel'></i> Excel",
                titleAttr: "Exportar a Excel",
                ClassName: "btn btn-success",
              },
              {
                extend: "pdfHtml5",
                text: "<i class='fas fa-file-pdf'></i> PDF",
                titleAttr: "Exportar a PDF",
                ClassName: "btn btn-danger",
              },
              {
                extend: "csvHtml5",
                text: "<i class='fas fa-file-csv'></i> CSV",
                titleAttr: "Exportar a CSV",
                ClassName: "btn btn-info",
              },
              {
                extend: "print",
                text: "<i class='fas fa-print'></i> Imprimir",
                titleAttr: "Imprimir",
                ClassName: "btn btn-secondary",
              },
              {
                extend: "colvis",
                text: "Columnas Visibles",
                titleAttr: "Columnas visibles",
                ClassName: "btn btn-info",
              },
            ],
            oLanguage: {
              sSearch: "Busqueda",
              oPaginate: {
                sNext: "Siguiente",
                sFirst: "Primero",
                sLast: "Ultimo",
                sPrevious: "Anterior",
              },
              sEmptyTable: "No hay Registros",
              sInfo: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
              sInfoEmpty: "No hay entradas que mostrar",
            },
          })
          .buttons()
          .container()
          .appendTo("#usersTable_wrapper .col-md-6:eq(0)");
      });
    },
  },
};
</script>

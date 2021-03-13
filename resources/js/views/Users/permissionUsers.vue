<template>
  <div>
    <section class="content-header">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Permisos Usuarios</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/' }">
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'getUsers' }">
                Usuarios
                </router-link>
              </li>
              <li class="breadcrumb-item active">Permisos Usuarios</li>
            </ol>
          </div>
        </div>
    </section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
                <transition name="fade">
                  <div
                    class="alert alert-danger"
                    v-if="errors.length > 0"
                  >
                    <ul>
                      <li v-for="(e, index) in errors" :key="index"> {{ e }}</li>
                    </ul>
                  </div>
                </transition>
              <table
                id="permissionsTable"
                class="table table-bordered table-striped"
                style="width:100%"
              >
                <thead>
                  <tr>
                    <th>Modulo</th>
                    <th class="text-center">Ver</th>
                    <th class="text-center">Agregar</th>
                    <th class="text-center">Editar</th>
                    <th class="text-center">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="permission in permissions" :key="permission.id">
                    <td>{{ permission.name }}</td>
                    <td align="center">
                      <input :disabled="!permissionPermission.update"
                        type="checkbox"
                        name="read"
                        id="CBoxReadT"
                        :value="permission.permission.read"
                        :checked="permission.permission.read"
                        @change="
                          check(
                            permission.id,
                            $event.target.name,
                            $event.target.checked
                          )
                        "
                      />
                    </td>
                    <td align="center">
                      <input :disabled="!permissionPermission.update"
                        type="checkbox"
                        name="create"
                        id="CBoxCreatedT"
                        :value="permission.permission.create"
                        :checked="permission.permission.create"
                        @click="
                          check(
                            permission.id,
                            $event.target.name,
                            $event.target.checked
                          )
                        "
                      />
                    </td>
                    <td align="center">
                      <input :disabled="!permissionPermission.update"
                        type="checkbox"
                        name="update"
                        id="CBoxUpdateT"
                        :value="permission.permission.update"
                        :checked="permission.permission.update"
                        @change="
                          check(
                            permission.id,
                            $event.target.name,
                            $event.target.checked
                          )
                        "
                      />
                    </td>
                    <td align="center">
                      <input  :disabled="!permissionPermission.update"
                        type="checkbox"
                        name="delete"
                        id="CBoxDeleteT"
                        :value="permission.permission.delete"
                        :checked="permission.permission.delete"
                        @change="
                          check(
                            permission.id,
                            $event.target.name,
                            $event.target.checked
                          )
                        "
                      />
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
import UserPermissions from "../../providers/UserPermission";
const userPermissionResource = new UserPermissions();

const NameModule = "Permisos";

export default {
  name: "users-permissions",
  props: ["id"],
  data() {
    return {
      permissions: "",
      permissionPermission: [],
      errors: [],
    };
  },
  computed: {
    user: function () {
      return this.$store.state.user;
    }
  },
  async mounted() {
    if (!await this.getPermission()){
      return;
    }
    this.obtenerPermisos();
  },
  methods: {
    async getPermission() {
      var response = (await userPermissionResource.UserPermissionsByModule(this.user.id, NameModule)).data;
      if (!response.success){
        this.errors.push("Error al obtener información.");
        setTimeout(() => {
          this.$router.push({
            path: '/',
          });
        }, 3000);
        return false;
      }
      this.permissionPermission = response.data.permission;

      return true;
    },
    async obtenerPermisos() {
      try {
        let response = (await userPermissionResource.UserPermissions(this.id))
          .data;
        if (!response.success) {
          return;
        }
        this.permissions = response.data;
        $("#permissionsTable")
          .DataTable()
          .destroy();
        this.tablePermits();
      } catch (error) {
        console.log(error);
          this.errors.push("No se pudo obtener permisos de usuarios.");
      }
    },
    check(module_id, name, checked) {
      this.$nextTick(() => {
        if (!this.permissionPermission.update){
          this.errors.push("No tienes permiso para hacer este cambio.");
          return;
        }

        let formData = {
          module_id: module_id,
          user_id: this.id,
          column: name,
          value: checked ? 1 : 0,
        };
        try {
          this.modules = userPermissionResource.updatePermits(formData);
        } catch (error) {
          console.log(error);
          this.errors.push("No se pudo actualizar permisos del usuario.");
        }
      });
    },

    tablePermits() {
      this.$nextTick(() => {
        $("#permissionsTable")
          .DataTable({
            lengthChange: false,
            searching: true,
            ordering: false,
            info: false,
            autoWidth: true,
            responsive: true,
            buttons: [],
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
          .appendTo("#permissionsTable_wrapper .col-md-6:eq(0)");
      });
    },
  },
};
</script>

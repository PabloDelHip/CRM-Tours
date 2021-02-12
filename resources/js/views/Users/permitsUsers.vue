<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Permisos Usuarios</h3>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <table id="example1" class="table table-bordered table-striped" style="width:100%">
              <thead>
                <tr>  
                  <th>Modulo</th>  
                  <!-- <th>Usuario</th>   -->
                  <th class="text-center">Ver</th>  
                  <th class="text-center">Agregar</th>
                  <th class="text-center">Editar</th>  
                  <th class="text-center">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="permit in permits" :key="permit.id">
                  <td>{{permit.module}}</td>
                  <!-- <td>{{permit.nombre}}</td> -->
                  <td v-if="permit.watch == 1" align="center"><input type="checkbox" id="CBoxWatch" value="permit.nombre" v-model="checked" checked></td>
                  <td v-else class="text-center"><input type="checkbox" id="CBoxWatch" value="Jack" v-model="checked"></td>
                  <td v-if="permit.add == 1" align="center"><input type="checkbox" id="CBoxAdd" value="permit.watch" v-model="checked" checked></td>
                  <td v-else class="text-center"><input type="checkbox" id="CBoxAdd" value="Jack" v-model="checked"></td>                  
                  <td v-if="permit.edit == 1" align="center"><input type="checkbox" id="CBoxEdit" value="permit.watch" v-model="checked" checked></td>
                  <td v-else class="text-center"><input type="checkbox" id="CBoxEdit" value="Jack" v-model="checked"></td>                  
                  <td v-if="permit.delete == 1" align="center"><input type="checkbox" id="CBoxDelete" value="permit.watch" v-model="checked" checked></td>
                  <td v-else class="text-center"><input type="checkbox" id="CBoxDelete" value="Jack" v-model="checked"></td>
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
import getPermits from "../../providers/Permits";
import datatables from "datatables";
const permitsResource = new getPermits();

export default {
  name: "users-permits",
  props: ['id'],
  data() {
    return {
      permits: "",
      // CBoxWatch: false,
      // watchs: false,
      // adds: false,
      // edits: false,
      // deletes: false,
    };
  },
  mounted() {
    this.obtenerPermisos();
    console.log(this.permits);
  },
/*   computed : {
    checkedComputed () {
    return this.checked
    }
  }, */
  methods: {
    async obtenerPermisos() {
      try {
        this.permits = await permitsResource.permitsUsers(this.id);
        this.permits = this.permits.data.data;
        $("#example1").DataTable().destroy();
        this.tablePermits();
      } catch (error) {
        console.log(error);
        alert("No se pudo obtener permisos de usuarios");
      }
    },
    tablePermits(){
      this.$nextTick(() => {
        $("#example1").DataTable({
        "lengthChange": false,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": true,
        "responsive": true,
        "buttons": [
          {"extend": "copyHtml5", "text": "<i class='fas fa-copy'></i> Copiar", "titleAttr": "Copiar", "ClassName": "btn btn-secundary"},
          {"extend": "excelHtml5", "text": "<i class='fas fa-file-excel'></i> Excel", "titleAttr": "Exportar a Excel", "ClassName": "btn btn-success"},
          {"extend": "pdfHtml5", "text": "<i class='fas fa-file-pdf'></i> PDF", "titleAttr": "Exportar a PDF", "ClassName": "btn btn-danger"},
          {"extend": "csvHtml5", "text": "<i class='fas fa-file-csv'> CSV</i>", "titleAttr": "Exportar a CSV", "ClassName": "btn btn-info"},
          {"extend": "print", "text": "<i class='fas fa-print'></i> Imprimir", "titleAttr": "Imprimir", "ClassName": "btn btn-secondary"},
          {"extend": "colvis", "text": "Columnas Visibles", "titleAttr": "Columnas visibles", "ClassName": "btn btn-info"}
          ],
        oLanguage: {"sSearch": "Busqueda",
          "oPaginate": { "sNext": "Siguiente", "sFirst": "Primero", "sLast": "Ultimo","sPrevious": "Anterior"},
          "sEmptyTable": "No hay Registros",
          "sInfo": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
          "sInfoEmpty": "No hay entradas que mostrar"}
        }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
      });
    }
  },
};
</script>

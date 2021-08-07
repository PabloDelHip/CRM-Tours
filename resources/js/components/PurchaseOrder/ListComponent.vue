<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <router-link
              :to="{ name: 'PurchaseOrderFormAltaView' }"
              name="created"
              class="btn btn-warning"
            >
              <i class="fas fa-store"></i>
              Nueva oportunidad de venta
            </router-link>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <router-link :to="{ path: '/' }">
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item active">Oportunidades de venta</li>
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
              <h3 class="card-title"><i class="fas fa-store"></i> Oportunidades de venta</h3>
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
                    <th>Cupon</th>
                    <th>Total</th>
                    <th>Monto</th>
                    <th>Fecha Inicio Tours</th>
                    <th>Num. Actividades</th>
                    <th>Status</th>
                    <th>Reservo</th>
                    <th>Cliente</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="purchaseOrder in purchaseOrders" :key="purchaseOrder.id">
                    <td>{{ purchaseOrder.purchase_order.id }}</td>
                    <td>{{ purchaseOrder.purchase_order.total }}</td>
                    <td>{{ purchaseOrder.purchase_order.amount }}</td>
                    <td>{{ purchaseOrder.purchase_order.expected_date }}</td>
                    <td>{{ purchaseOrder.num_tours }}</td>
                    <td>{{ purchaseOrder.purchase_order.status }}</td>
                    <td>{{ purchaseOrder.user.profile.name }}</td>
                    <td>{{ purchaseOrder.customer.name }} {{ purchaseOrder.customer.last_name }}</td>
                    <td class="table-actions">
                      <div class="btn-group">
                        <router-link
                          class="btn btn-info btn-sm"
                          :to="{
                            name: 'PurchaseOrderFormEditarView',
                            params: { id_purchase_order: purchaseOrder.purchase_order.id }
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
          <!-- /.card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseOrder from "../../providers/PurchaseOrder";

import modalFormComponent from "../../components/Customers/modalFormComponent";

const PurchaseOrderResource = new PurchaseOrder();
export default {
  name: "TableVendors",
  components: {
    modalFormComponent,
  },
  data() {
    return {
      purchaseOrders: [],
      modalEdit: false,
      destroyTable: false,
    };
  },
  methods: {
    async getPurchaseOrder() {
      const { data } = await PurchaseOrderResource.getList();
      this.purchaseOrders = data.data;
      console.log(this.purchaseOrders)
    },
    async deleteVendor($id_vendor) {
      try {
        this.$swal
          .fire({
            title: "¿Estas seguro?",
            text: "La agencia se eliminara permanentemente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Si, eliminar agencia",
          })
          .then(async (result) => {
            if (result.isConfirmed) {
              await vendorResource.deleteVendor($id_vendor);
              await this.getPurchaseOrder();
              this.$swal.fire({
                icon: "success",
                title: "Bien",
                toast: true,
                position: "top",
                timer: 3000,
                showConfirmButton: false,
                timerProgressBar: true,
                text: "Agencia eliminada de forma correcta",
              });
            }
          });
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
    await this.getPurchaseOrder();
    this.createTable();
  },
};
</script>

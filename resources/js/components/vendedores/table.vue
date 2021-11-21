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
                <router-link :to="{ path: '/' }"> Home </router-link>
              </li>
              <li class="breadcrumb-item active">Agencias</li>
            </ol>
          </div>
        </div>
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 row">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Vendedores</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Vendedor</th>
                      <th>Tours Vendidos</th>
                      <th>Porcentaje</th>
                      <th>Total Vendido</th>
                      <th>Total a pagar</th>
                      <th>Pagado</th>
                      <th>Pendiente a pagar</th>
                      <th>Acciosssssnes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(seller, i) in sellers" :key="i">
                      <td>{{ seller.user.profile.name }} {{ seller.user.profile.last_name }}</td>
                      <td>{{ seller.tours_vendidos }}</td>
                      <td>{{ seller.user.percentage }}</td>
                      <td>{{ seller.total_vendido.toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                            }) 
                          }}
                      </td>
                      <td>{{ seller.total_pagar.toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                            })
                          }}
                      </td>
                      <td>{{ seller.pagado.toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                            }) 
                          }}
                      </td>
                      <td>{{ seller.falta_pagar.toLocaleString('en-US', {
                              style: 'currency',
                              currency: 'USD',
                            })
                          }}
                      </td>
                      <td>
                        <router-link class="btn btn-primary btn-sm" :to="{ name: 'SellerList', params: { id: seller.user.id } }" >
                            <i class="far fa-eye"></i>
                        </router-link>
                      </td>
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
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import FilterSelect from "../Generals/FilterSelect";
import Seller from "../../providers/Seller";

const SellerResource = new Seller();

export default {
  components: {
    FilterSelect
  },
  data() {
    return {
      sellers: [],
    };
  },
  methods: {
    async getSeller() {
      this.sellers = await SellerResource.getSeller();
      this.sellers = this.sellers.data.data;
    },
    showPayments() {
      console.log('PROBANDO');
    },
    createTable() {
      $(function () {
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
    await this.getSeller();
    this.createTable();
  },
};
</script>

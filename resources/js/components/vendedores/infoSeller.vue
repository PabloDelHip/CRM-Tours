<template lang="">
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <button
              class="btn btn-warning"
              @click="$modal.show('add-payment')"
            >
              Agregar Pago
            </button>
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
          <div 
            class="col-12 row filters-date"
          >
            <div class="col-3">
              <label for="name">Filtrar por fecha</label>
              <input
                type="date"
                class="form-control mb-3"
                v-model="dateFilter"
              />
              <input type="radio" id="uno" value="año" v-model="tipoFiltro">
              <label for="uno">Año</label>
              <input type="radio" id="Dos" value="mes" v-model="tipoFiltro">
              <label for="Dos">Mes</label>
              <input type="radio" id="Dos" value="dia" v-model="tipoFiltro">
              <label for="Dos">Dia</label>
              <br>
              <button type="button" @click="filtro" class="btn btn-primary mt-3" data-dismiss="modal">Filtrar</button>
              <button type="button" @click="filtroClear" class="btn btn-default mt-3" data-dismiss="modal">Ver todos</button>
            </div>
            <div
              class="col-6"
              style="border-left: 1px solid #cacaca; padding-left: 17px;"
            >
              <label>Seleccionar fechas a filtrar</label>
              <br>
              <v-md-date-range-picker
                show-year-select
                @change="handleChange"
              ></v-md-date-range-picker>
            </div>
            <div class="w-100 mt-3"></div>
            <div class="col-4 mt-2">

            </div>
            <div class="w-100 mt-3"></div>
            <div class="col-4 text-left">
              
            </div>
          </div>
          <div class="col-12 row">
            <div class="card" style="width:100%;">
              <div class="card-header">
                <h3 class="card-title">Vendedor</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Pago</th>
                      <th>Comentario</th>
                      <th>Cantidad</th>
                      <th>Mes pagado</th>
                      <th>Fecha de pago</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(payment, i) in payments" :key="i">
                      <td>{{ payment.user.profile.name }} {{ payment.user.profile.last_name }}</td>
                      <td>{{ payment.comment }}</td>
                      <td>{{ payment.amount }}</td>
                      <td>{{ fechaFormato(payment.month_paying) }}</td>
                      <td>{{ fechaFormato(payment.created_at) }}</td>
                      <td>
                        <button
                          @click="eliminarPago(payment.id)"
                          class="btn btn-danger btn-sm"
                        >
                          <i class="fas fa-trash"> </i>
                        </button>
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
    <modal-pagos
      :sellerId="id"
      @onFiltroClear="filtroClear"
    />
  </div>
</template>

<script>
import Seller from "../../providers/Seller";
import moment, { locales } from "moment";

const SellerResource = new Seller();

export default {
  components: {
    ModalPagos: () => import('./ModalPagos.vue'),
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      payments: [],
      tipoFiltro: '',
      dateFilter: '',
    };
  },
  methods: {
    async handleChange(data) {
      const from = moment(data[0]).format("YYYY/MM/DD").replaceAll('/', '-');
      const to = moment(data[1]).format("YYYY/MM/DD").replaceAll('/', '-');
      const query = `?date_one=${from}&date_two=${to}`;
      this.payments = await SellerResource.getSellerPaymentRange(this.id, query);
      console.log('dsds', this.payments);
      this.payments = this.payments.data.data;
      $("#example1")
          .DataTable()
          .destroy();
      this.createTable();
    },
    async eliminarPago(id) {
      this.$swal
          .fire({
            title: "¿Estas seguro?",
            text: "La agencia se eliminara permanentemente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Si, eliminar pago",
          })
          .then(async (result) => {
            if (result.isConfirmed) {
              await SellerResource.deletePayment(id);
              this.filtroClear();
            }
          });
     
    },
    fechaFormato($fecha) {
      if ($fecha == null || $fecha == undefined) {
        return "-";
      }
      return moment($fecha).format("DD/MM/YYYY");
    },
    async showPayments(query='') {
      this.payments = await SellerResource.getSellerPayment(this.id, query);
      this.payments = this.payments.data.data;
    },
    async filtro() {
      if (this.tipoFiltro === '') {
        alert('Necesita seleccionar un tipo de filtro');
      } else if(this.dateFilter === '') {
        alert('Necesita seleccionar una fecha');
      } else {
        const props = this.dateFilter.split('-');
        let query = '';
        if(this.tipoFiltro === 'año' || this.tipoFiltro === 'mes') {
          query+= `?year=${props[0]}`;
          if(this.tipoFiltro === 'mes') {
            query+= `&month=${props[1]}`;
          }
        } else if(this.tipoFiltro === 'dia') {
          query+= `?date=${this.dateFilter}`;
        }
        $("#example1")
          .DataTable()
          .destroy();
        await this.showPayments(query);
        this.createTable();
      }
    },
    async filtroClear() {
      this.tipoFiltro = ''
      this.dateFilter = ''
      $("#example1")
          .DataTable()
          .destroy();
      await this.showPayments('')
      this.createTable();
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
  async created() {
    await this.showPayments();
    this.createTable();
  },
}
</script>

<style scoped>
  .filters-date {
    box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
    margin-bottom: 1rem;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
    background-color: #fff;
    padding: 1.25rem;
  }
</style>
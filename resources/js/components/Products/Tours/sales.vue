<template>
  <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6"></div>
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
          <div class="col-12">
            <!-- <div class="row">
              <hr>
              <div class="col-3 text-center">
                <label>Tours</label>
                <multiselect
                  v-model="value"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="name"
                  track-by="id"
                  :options="toursList"
                  :multiple="true"
                  :taggable="true"
                  :preserveSearch="true"
                  :close-on-select="false"
                  @tag="addTag">
                </multiselect>
                <br>
                <button type="submit" class="btn btn-primary">Buscar</button>
              </div>
              <div class="col-3 text-center">
                <label>Agencias</label>
                <multiselect
                  v-model="value"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="name"
                  track-by="id"
                  :options="agencias"
                  :multiple="true"
                  :taggable="true"
                  :close-on-select="false"
                  @tag="addTag">
                </multiselect>
                <br>
                <button type="submit" class="btn btn-primary">Buscar</button>
              </div>
              <div class="col-3 text-center">
                <label>Vendor</label>
                <multiselect
                  v-model="value"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="name"
                  track-by="id"
                  :options="vendedores"
                  :multiple="true"
                  :taggable="true"
                  :close-on-select="false"
                  @tag="addTag">
                </multiselect>
                <br>
                <button type="submit" class="btn btn-primary">Buscar</button>
              </div>
              <div class="col-3 text-center">
                <label>Status</label>
                <multiselect
                  placeholder="Search or add a tag"
                  :show-labels="false"
                  :options="status">
                </multiselect>
                <br>
                <button type="submit" class="btn btn-primary">Buscar</button>
              </div>
            </div> -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Tours vendidos</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Fecha de operacion</th>
                      <th>Fecha de reserva</th>
                      <th>Opera</th>
                      <th>Vendedor</th>
                      <th>Status</th>
                      <th>Num. Pax</th>
                      <th>Monto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in ventas" :key="index">
                      <td>{{ item.fecha_operacion }}</td>
                      <td>{{ item.fecha_reserva }}</td>
                      <td>{{ item.agencia }}</td>
                      <td>{{ item.vendedor }}</td>
                      <td>{{ item.status }}</td>
                      <td>{{ item.pax }}</td>
                      <td>{{ item.monto }}</td>
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
import Tour from "../../../providers/products/tours/Tour";
import Vendor from '../../../providers/Vendor';
import user from "../../../providers/User";
import PurchaseOrder from "../../../providers/PurchaseOrder";

import FilterSelect from "../../Generals/FilterSelect";
import { Datetime } from "vue-datetime";

const TourResource = new Tour();
const vendorResource = new Vendor();
const userResource = new user();
const PurchaseOrderResource = new PurchaseOrder();

export default {
  data() {
    return {
      purchaseOrders: [],
      date: [],
      list:[
        {value: 'item 1'},
        {value: 'item 2'},
        {value: 'item 3'},
        {value: 'item 4'},
        {value: 'item 5'},
      ],
      value: [
        { name: 'Javascript', code: 'js' }
      ],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
      ],
      toursList: [],
      agencias: [],
      vendedores: [],
      status: ['Reservada', 'Operadas'],
      ventas: [],
    }
  },
  components: {
    FilterSelect,
    datetime: Datetime,
  },
  methods: {
    async getPurchaseOrder() {
      const { data } = await PurchaseOrderResource.getList();
      this.purchaseOrders = data.data;
      this.purchaseOrders.forEach((item) => {
        const fecha_reserva = item.purchase_order.created_at;
        const user = `${item.user.profile.name} ${item.user.profile.last_name}`;
        const status = item.purchase_order.status;
        item.tours.forEach((tour) => {
          const fecha_operacion = tour.reservation_date;
          const agencia = tour.tour.vendor.name;
          const monto = tour.amount;
          const pax = `${tour.num_adults}.${tour.num_childrens}.${tour.num_infants}`;
          this.ventas.push({
            fecha_reserva: fecha_reserva.split('T')[0],
            vendedor: user,
            status,
            fecha_operacion,
            agencia,
            monto,
            pax,
          });
        });
      });
      this.createTable();
    },
    async getTours() {
      const { data: {data} } = await TourResource.getTours();
      this.toursList = data;
    },
    async getVendors() {
      try {
        this.agencias = await vendorResource.getVendorList();
        this.agencias = this.agencias.data.data
      } catch (error) {
        
      }
    },
    async getUsers() {
      const response = (await userResource.getUsers()).data;
      console.log('usuarios', response.data);
      this.vendedores = response.data.map((item) => {
        return {
          id: item.id,
          name: `${item.profile.name} ${item.profile.last_name}`
        }
      });

    },
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    handleChange(value) {
      this.date = value;
      console.log('SOY EL VA', value);
    },
    probando() {
      console.log(this.date);
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
  mounted() {
    this.getTours();
    this.getVendors();
    this.getUsers();
    this.getPurchaseOrder();
  },
};
</script>

<style>
.mdrp__activator .activator-wrapper .text-field__filled~label {
  display: none;
}
.form-check {
    /* position: relative; */
    display: inline-table;
    /* padding-left: 1.25rem; */
}
</style>

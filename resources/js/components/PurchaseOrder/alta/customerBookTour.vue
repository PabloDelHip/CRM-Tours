<template>
  <div class="row">
    <div class="col-6">
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Tour a Reservar</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <ValidationObserver v-slot="{ invalid }" ref="observer">
          <div class="card-body row">
            <div class="form-group col-12">
              <label for="exampleInputEmail1">Tour</label>
              <ValidationProvider rules="required" name="Tour" v-slot="{ errors }">
                <multiselect
                  v-model="tour"
                  label="name"
                  track-by="id"
                  :options="tours"
                  :searchable="true"
                  :show-labels="false"
                  placeholder="Seleccionar Tour"
                >
                </multiselect>
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group col-12">
              <label for="exampleInputEmail1">Fecha del tour</label>
              <ValidationProvider rules="required" name="Fecha tour" v-slot="{ errors }">
                <datetime v-model="fecha_tour" value-zone="local" zone="local"></datetime>
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group col-12">
              <label for="exampleInputEmail1">Num. Adul.</label>
              <ValidationProvider rules="numeric" name="Num. Adultos" v-slot="{ errors }">
                <input
                  v-model="num_adultos"
                  type="number"
                  class="form-control rounded-0"
                />
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group col-12">
              <label for="exampleInputEmail1">Num. Nin.</label>
              <ValidationProvider rules="numeric" name="Num. Ninos" v-slot="{ errors }">
                <input v-model="num_ninos" type="number" class="form-control rounded-0" />
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group col-12">
              <label for="exampleInputEmail1">Num. Infa.</label>
              <ValidationProvider
                rules="numeric|required"
                name="Num. Infantes"
                v-slot="{ errors }"
              >
                <input
                  v-model="num_infante"
                  type="number"
                  class="form-control rounded-0"
                />
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group col-12">
              <ValidationProvider
                rules="numeric|required"
                name="monto"
                v-slot="{ errors }"
              >
                <label for="exampleInputEmail1">Monto</label>
                <div class="input-group">
                  <div class="input-group-prepend rounded-0">
                    <span class="input-group-text">$</span>
                  </div>
                  <input v-model="monto" type="number" class="form-control rounded-0" />
                  <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
                    errors[0]
                  }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="w-100 mt-3 mb-3 border-line"></div>
            <div class="col-12 total-custom">
              <p class="p-0 m-0">
                <span>Total: $</span>
                {{ total }}
              </p>
            </div>
          </div>
          <!-- /.card-body -->

          <div class="card-footer">
            <button @click="addActividad" :disabled="invalid" class="btn btn-primary">
              Agregar
            </button>
          </div>
        </ValidationObserver>
        <div class="row card-footer">
          <div class="col-12">
            <table
              class="table table-bordered table-striped table-responsive"
              style="width: 100%"
            >
              <thead>
                <tr>
                  <th>Actividad</th>
                  <th>Fecha</th>
                  <th>Adul.</th>
                  <th>Nin.</th>
                  <th>Inf.</th>
                  <th>Monto</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="actividad in actividades" :key="actividad.tour">
                  <td v-if="actividad.total !== 0">{{ actividad.actividad }}</td>
                  <td v-if="actividad.total !== 0">{{ actividad.reservation_date | moment("L") }}</td>
                  <td v-if="actividad.total !== 0">{{ actividad.num_adults }}</td>
                  <td v-if="actividad.total !== 0">{{ actividad.num_childrens }}</td>
                  <td v-if="actividad.total !== 0">{{ actividad.num_infants }}</td>
                  <td v-if="actividad.total !== 0">{{ actividad.amount }}</td>
                  <td v-if="actividad.total !== 0">{{ actividad.total }}</td>
                  <td v-if="actividad.total !== 0">
                    <button
                      @click="eliminarActividad(actividad.tour_id)"
                      class="btn btn-danger btn-sm"
                    >
                      <i class="fas fa-trash"> </i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-12 row">
            <h4>
              Total:
              <span style="color: red"
                >{{
                  new Intl.NumberFormat("es-MX", {
                    style: "currency",
                    currency: "MXN",
                    minimumFractionDigits: 2,
                  }).format(totalPagar)
                }}
              </span>
            </h4>
          </div>
          <div class="col-12 row">
            <label for="exampleInputEmail1">Descuento en porcentaje: </label>
            <input v-model="descuento" type="number" class="form-control rounded-0" />
          </div>
        </div>
      </div>
    </div>

    <div class="col-6">
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Paquete a Reservar</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <ValidationObserver v-slot="{ invalid }" ref="observer">
          <div class="card-body row">
            <div class="form-group col-12">
              <label for="exampleInputEmail1">Paquete</label>
                <multiselect
                  v-model="paquete"
                  label="name"
                  track-by="id"
                  :options="paquetes"
                  :searchable="true"
                  :show-labels="false"
                  placeholder="Seleccionar Tour"
                >
                </multiselect>
            </div>
            <table class="table table-bordered mb-5">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Tour</th>
                  <th scope="col">Fecha</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="tour in toursPaquetes" :key="tour.id">
                  <th scope="row">{{ tour.tour.name }}</th>
                  <td>
                    <input
                      id="date"
                      type="date"
                      @change="selectFechaTour(tour.tour, $event.target.value)"
                      class="form-control rounded-0"
                      :value="tour.reservation_date"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <div class="form-group col-12">
              <label for="exampleInputEmail1">Num. Adultos paquete</label>
              <ValidationProvider rules="numeric" name="Num. Adultos" v-slot="{ errors }">
                <input
                  v-model="num_adultos_paquetes"
                  type="number"
                  class="form-control rounded-0"
                />
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group col-12">
              <label for="exampleInputEmail1">Num. Nin.</label>
              <ValidationProvider rules="numeric" name="Num. Ninos" v-slot="{ errors }">
                <input
                  v-model="num_ninos_paquetes"
                  type="number"
                  class="form-control rounded-0"
                />
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group col-12">
              <label for="exampleInputEmail1">Num. Infa.</label>
              <ValidationProvider
                rules="numeric|required"
                name="Num. Infantes"
                v-slot="{ errors }"
              >
                <input
                  v-model="num_infante_paquetes"
                  type="number"
                  class="form-control rounded-0"
                />
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
                  errors[0]
                }}</span>
              </ValidationProvider>
            </div>
            <div class="form-group col-12">
              <ValidationProvider
                rules="numeric|required"
                name="monto"
                v-slot="{ errors }"
              >
                <label for="exampleInputEmail1">Monto</label>
                <div class="input-group">
                  <div class="input-group-prepend rounded-0">
                    <span class="input-group-text">$</span>
                  </div>
                  <input
                    v-model="monto_paquete"
                    type="number"
                    class="form-control rounded-0"
                  />
                  <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{
                    errors[0]
                  }}</span>
                </div>
              </ValidationProvider>
            </div>
            <div class="w-100 mt-3 mb-3 border-line"></div>
            <div class="col-12 total-custom">
              <p class="p-0 m-0">
                <span>Total: $</span>
                {{ totalPaquete }}
              </p>
            </div>
          </div>
          <!-- /.card-body -->

          <div class="card-footer">
            <button
              @click="addActividadPaquete"
              :disabled="invalid"
              class="btn btn-primary"
            >
              Agregar
            </button>
          </div>
        </ValidationObserver>
        <div class="row card-footer">
          <div class="col-12">
            <table
              class="table table-bordered table-striped table-responsive"
              style="width: 100%"
            >
              <thead>
                <tr>
                  <th>Paquete</th>
                  <th>Adul.</th>
                  <th>Nin.</th>
                  <th>Inf.</th>
                  <th>Monto</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr  v-for="(actividad, index) in paquetesReservadosTabla" :key="actividad.tour">
                  <td>{{ actividad.name }}</td>
                  <td>{{ actividad.num_adults }}</td>
                  <td>{{ actividad.num_childrens }}</td>
                  <td>{{ actividad.num_infants }}</td>
                  <td>{{ actividad.amount }}</td>
                  <td>{{ actividad.total }}</td>
                  <td>
                    <button
                      @click="eliminarPaquete(index+1)"
                      class="btn btn-danger btn-sm"
                    >
                      <i class="fas fa-trash"> </i>
                    </button>
                    <button 
                      @click="showToursPaquetes(actividad.id)"
                      class="btn btn-primary btn-sm">
                      <i class="far fa-eye"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tours from "../../../providers/products/tours/Tour";
import Packages from "../../../providers/Packages";
import OperationTour from "../../../providers/products/tours/OperationTour";
import PurchaseOrderPackage from "../../../providers/PurchaseOrderPackage";
import { Datetime } from "vue-datetime";
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const ToursResource = new Tours();
const OperationTourResource = new OperationTour();
const PackagesResource = new Packages();
const PurchaseOrderPackageResource = new PurchaseOrderPackage();

export default {
  components: {
    datetime: Datetime,
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    activities: {
      default: "",
    },
    paquetesData: {
      default: [],
    },
    descuentoData: {
      default: 0,
    },
  },
  data() {
    return {
      tour: "",
      operationTour: "",
      operationPaquete: {},
      actividad: "",
      fecha_tour: "",
      fecha_tour_paquete: "",
      num_adultos: 0,
      num_ninos: 0,
      num_infante: 0,
      num_adultos_paquetes: 0,
      num_ninos_paquetes: 0,
      num_infante_paquetes: 0,
      monto: 0,
      monto_paquete: 0,
      total: 0,
      totalPaquete: 0,
      tours: [],
      toursPaquetes: [],
      addToursPaquetes: [],
      paquetes: [],
      paquete: "",
      actividades: [],
      paquetesReservador: [],
      paquetesReservadosTabla: [],
      descuento: 0,
      form: {
        tour: "",
        total: 0,
      },
      totalPagar: 0,
      totalFijo: 0,
      idPaqueteEdit: 0
    };
  },
  watch: {
    async descuento(newValue) {
      if (newValue) {
        const porcentaje = (this.totalFijo * newValue) / 100;
        this.totalPagar = this.totalFijo - porcentaje;
        this.$emit("onDescuento", this.descuento);
      }
      if (newValue === "") {
        this.totalPagar = this.totalFijo;
        this.$emit("onDescuento", 0);
      }
    },
    async paquete(newValue) {
      this.calculateTotalPaquete();
      const {
        data: { data },
      } = await PackagesResource.findPackageTour(newValue.id);
      this.toursPaquetes = data;
    },
    async tour(newValue) {
      const {
        data: { data },
      } = await OperationTourResource.getByTourId(newValue.id);
      this.operationTour = data;
      let adultPrice = 0;
      let childPrice = 0;
      if(this.operationTour) {
        adultPrice = this.operationTour.adult_price;
        childPrice = this.operationTour.child_price;
      }
      this.calculateTotal(adultPrice, childPrice);
      this.form.tour = newValue.id;
      this.actividad = newValue.name;
    },
    async num_adultos() {
      this.calculateTotal(this.operationTour.adult_price, this.operationTour.child_price);
    },
    async num_ninos() {
      this.calculateTotal(this.operationTour.adult_price, this.operationTour.child_price);
    },
    async num_adultos_paquetes() {
      this.calculateTotalPaquete();
    },
    async num_ninos_paquetes() {
      this.calculateTotalPaquete();
    },
    activities: {
      inmediate: true,
      handler(newValue) {
        this.activities = newValue;
        this.activities.forEach(async (activite) => {
          await this.addActividadEdit(activite);
        });
        this.descuento = this.descuentoData;
        this.calcular();
      },
    },
    paquetesData: {
      inmediate: true,
      handler(newValue) {
        this.paquetesData = newValue;
        this.paquetesData.forEach((paquete) => {
          this.addActividadPaqueteEdit(paquete);
        });
        this.calcular();
      }
    }
  },
  methods: {
    async showToursPaquetes(id) {
      const { data: { data } } = await PurchaseOrderPackageResource.find(id);
      data
      this.num_adultos_paquetes = data[0].num_adults;
      this.num_ninos_paquetes = data[0].num_childrens;
      this.num_infante_paquetes = data[0].num_infants;
      this.monto_paquete = data[0].amount;
      this.toursPaquetes = data[0].customerBook;
      this.idPaqueteEdit = id;
      console.log('somos id', data);
    },
    async getPaquete() {
      // const {data: {data}} = await PackagesResource.find();
    },
    async getPaquetes() {
      const {
        data: { data },
      } = await PackagesResource.findAll();
      this.paquetes = data;
    },
    selectFechaTour(tour, value) {
      let addTour = true;
      this.addToursPaquetes = this.addToursPaquetes.filter((tourValue) => {
        if (tourValue.id === tour.id) {
          addTour = false;
          tourValue.fecha = value;
          return tourValue;
        }
        return tourValue;
      });

      if (addTour) {
        this.addToursPaquetes.push({
          id: tour.id,
          tour: tour.name,
          fecha: value,
          package_id: this.paquete.id,
        });
      }
    },
    eliminarActividad(id_tour) {
      const pos = this.actividades
        .map(function (actividad) {
          return actividad.tour_id;
        })
        .indexOf(id_tour);
      this.actividades.splice(pos, 1);
      this.$emit("onAddActivities", this.actividades);
      this.calcular();
    },
    eliminarPaquete(index) {
      
      const newActivities = this.actividades.filter(actividades => {
        if(actividades.index !== index) {
          return actividades;
        }
      })
      this.actividades = newActivities;
      const pos = this.paquetesReservadosTabla
        .map(function (paquete) {
          return paquete.index;
        })
        .indexOf(index);
      this.paquetesReservadosTabla.splice(pos, 1);
      this.$emit("onAddActivities", this.actividades);
      this.$emit("onAddPackage", this.paquetesReservadosTabla);
      this.calcular();
    },
    async getTours() {
      const {
        data: { data },
      } = await ToursResource.getTours();
      this.tours = data;
    },
    async addActividad(actividad) {
      this.actividades.push({
        tour_id: this.form.tour,
        actividad: this.actividad,
        reservation_date: this.fecha_tour.split("T")[0],
        num_adults: this.num_adultos,
        num_childrens: this.num_ninos,
        num_infants: this.num_infante,
        amount: Number(this.monto),
        total: this.total,
        descuento: this.descuento,
        index: 99999,
      });

      this.$emit("onAddActivities", this.actividades);
      this.tour = "";
      this.operationTour = "";
      this.actividad = "";
      this.fecha_tour = "";
      this.num_adultos = 0;
      this.num_ninos = 0;
      this.num_infante = 0;
      this.monto = 0;
      this.total = 0;
      this.calcular();
      this.descuento = 0;
    },
    async addActividadPaquete() {
        const lengthPaquete = this.paquetesReservadosTabla.length;
        let index = 1;
        if(lengthPaquete) {
          index = this.paquetesReservadosTabla[lengthPaquete-1].index + 1;
        }
        this.paquetesReservadosTabla.push({
          id: this.paquete.id,
          package_id: this.paquete.id,
          name: this.paquete.name,
          num_adults: this.num_adultos_paquetes,
          num_childrens: this.num_ninos_paquetes,
          num_infants: this.num_infante_paquetes,
          amount: Number(this.monto_paquete),
          total: this.totalPaquete,
          index
        });

        this.addToursPaquetes.forEach((tour) => {
          this.actividades.push({
            tour_id: tour.id,
            actividad: tour.tour,
            reservation_date: tour.fecha,
            num_adults: this.num_adultos_paquetes,
            num_childrens: this.num_ninos_paquetes,
            num_infants: this.num_infante_paquetes,
            amount: Number(0),
            total: Number(0),
            package_id: this.paquete.id,
            index
          });
          this.$emit("onAddActivities", this.actividades);
          this.$emit("onAddPackage", this.paquetesReservadosTabla);
        });
        this.addToursPaquetes = [];
        this.num_adultos_paquetes = 0;
        this.num_ninos_paquetes = 0;
        this.num_infante_paquetes = 0;
        this.monto_paquete = 0;
        this.totalPaquete = 0;
        this.paquete = [];
        this.calcular(true);
        /* */
    },
    calcular(retornar = true) {
      let total = 0;
      total += this.actividades.reduce((a, b) => {
        return a + b.total;
      }, 0);
      total += this.paquetesReservadosTabla.reduce((a, b) => {
        console.log('si entro');
          return a + b.total;
        }, 0);
    
      /* if(calularPaquetes) {
        total += this.paquetesReservadosTabla.reduce((a, b) => {
          return a + b.total;
        }, 0);
      }
      else {
        total += this.paquetesData.reduce((a,b) => {
        return a + b.total;
       }, 0);
      } */
      
      console.log('total 3', total);
      this.totalPagar = total;
      this.totalFijo = total;
    },
    async addActividadEdit(actividad) {
      this.actividades.push({
        id: actividad.id,
        actividad: actividad.tour.name,
        reservation_date: actividad.reservation_date,
        num_adults: actividad.num_adults,
        num_childrens: actividad.num_childrens,
        num_infants: actividad.num_infants,
        amount: actividad.amount,
        total: actividad.total,
        tour_id: actividad.tour_id,
        index: actividad.index
      });
      this.$emit("onAddActivities", this.actividades);
    },
    addActividadPaqueteEdit(paquete) {
      this.paquetesReservadosTabla.push({
        id: paquete.id,
        package_id: paquete.package_id,
        name: paquete.package.name,
        num_adults: paquete.num_adults,
        num_childrens: paquete.num_childrens,
        num_infants: paquete.num_infants,
        amount: Number(paquete.amount),
        total: paquete.total,
        index: paquete.index
      });
      this.$emit("onAddPackage", this.paquetesReservadosTabla);
    },
    async calculateTotal(priceAdult, priceChild) {
      this.total = 0;
      const totalAdult = priceAdult * this.num_adultos;
      const totalChild = priceChild * this.num_ninos;
      this.total = totalAdult + totalChild;
    },
    async calculateTotalPaquete() {
      this.totalPaquete = 0;
      const totalAdult = this.paquete.adult_price * this.num_adultos_paquetes;
      const totalChild = this.paquete.child_price * this.num_ninos_paquetes;
      this.totalPaquete = totalAdult + totalChild;
    },
  },
  async mounted() {
    await this.getTours();
    await this.getPaquetes();
  },
};
</script>

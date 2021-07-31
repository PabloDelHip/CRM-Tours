<template>
    <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Tour a Reservar</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
                <div class="card-body row">
                    <div class="form-group col-12">
                        <label for="exampleInputEmail1">Tour</label>
                        <multiselect
                            v-model="tour"
                            label="name"
                            track-by="id"
                            :options="tours"
                            :searchable="true"
                            :show-labels="false"
                            placeholder="Seleccionar Tour">
                        </multiselect>
                    </div>
                    <div class="form-group col-12">
                        <label for="exampleInputEmail1">Fecha del tour</label>
                        <datetime v-model="fecha_tour" value-zone="local" zone="local"></datetime>
                    </div>
                    <div class="form-group col-4">
                        <label for="exampleInputEmail1">Num. Adul.</label>
                        <input v-model="num_adultos" type="number" class="form-control rounded-0">
                    </div>
                    <div class="form-group col-4">
                        <label for="exampleInputEmail1">Num. Nin.</label>
                        <input v-model="num_ninos" type="number" class="form-control rounded-0">
                    </div>
                    <div class="form-group col-4">
                        <label for="exampleInputEmail1">Num. Infa.</label>
                        <input v-model="num_infante" type="number" class="form-control rounded-0">
                    </div>
                    <div class="form-group col-12">
                        <label for="exampleInputEmail1">Monto</label>
                        <div class="input-group">
                            <div class="input-group-prepend rounded-0">
                                <span class="input-group-text">$</span>
                            </div>
                            <input v-model="monto" type="text" class="form-control rounded-0">
                        </div>
                    </div>
                    <div class="w-100 mt-3 mb-3 border-line"></div>
                    <div class="col-12 total-custom">
                        <p class="p-0 m-0">
                            <span>Total: $</span>
                            {{total}}
                        </p>
                    </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button @click="addActividad" class="btn btn-primary">Agregar</button>
                </div>

                <div class="row card-footer">
                    <div class="col-12">
                        <table
                            class="table table-bordered table-striped table-responsive"
                            style="width:100%"
                        >
                            <thead>
                            <tr>
                                <th>Actividad</th>
                                <th>Fecha </th>
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
                                <td>{{ actividad.actividad }}</td>
                                <td>{{ actividad.fecha_tour | moment("L") }}</td>
                                <td>{{ actividad.adultos }}</td>
                                <td>{{ actividad.ninos }}</td>
                                <td>{{ actividad.infantes }}</td>
                                <td>{{ actividad.monto }}</td>
                                <td>{{ actividad.total }}</td>
                                <td>
                                    <button @click="eliminarActividad(actividad.actividad)" class="btn btn-danger btn-sm">
                                        <i class="fas fa-trash"> </i>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
</template>

<script>
import Tours from '../../../providers/products/tours/Tour';
import OperationTour from '../../../providers/products/tours/OperationTour';
import { Datetime } from 'vue-datetime';

const ToursResource = new Tours();
const OperationTourResource = new OperationTour();
export default {
    components: {
      datetime: Datetime
    },
    data() {
        return {
            tour: '',
            operationTour: '',
            actividad: '',
            fecha_tour: '',
            num_adultos: 0,
            num_ninos: 0,
            num_infante: 0,
            monto: 0,
            total: 0,
            tours: [],
            actividades: [],
            form: {
                tour: '',
                total: 0
            }
        }
    },
    watch: {
        async tour(newValue) {
            const  { data: {data}} = await OperationTourResource.getByTourId(newValue.id)
            this.operationTour = data;
            this.calculateTotal(this.operationTour.adult_price, this.operationTour.child_price)
            this.form.tour = newValue.id
            this.actividad = newValue.name
        },
        async num_adultos() {
            this.calculateTotal(this.operationTour.adult_price, this.operationTour.child_price)
        },
        async num_ninos() {
            this.calculateTotal(this.operationTour.adult_price, this.operationTour.child_price)
        }
    },
    methods : {
        eliminarActividad(nameActividad) {
            const pos = this.actividades.map(function(actividad) { return actividad.actividad; })
                .indexOf(nameActividad);
            this.actividades.splice(pos, 1);
            this.$emit('onAddActivities', this.actividades)
        },
        async getTours() {
            const {data: {data}} = await ToursResource.getTours();
            this.tours = data
        },
        async addActividad(actividad) {
            this.actividades.push({
                actividad: this.actividad,
                fecha_tour: this.fecha_tour,
                adultos: this.num_adultos,
                ninos: this.num_ninos,
                infantes: this.num_infante,
                monto: this.monto,
                total: this.total
            })
            this.$emit('onAddActivities', this.actividades)
            this.tour =  '';
            this.operationTour =  '';
            this.actividad = '';
            this.fecha_tour = '';
            this.num_adultos = 0;
            this.num_ninos = 0;
            this.num_infante = 0;
            this.monto = 0;
            this.total = 0;
        },

        async calculateTotal(priceAdult, priceChild) {
            const totalAdult = priceAdult * this.num_adultos;
            const totalChild = priceChild * this.num_ninos;
            this.total = totalAdult + totalChild; 
        }
    },
    mounted() {
        this.getTours()
    }
}
</script>
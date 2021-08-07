<template>
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
                                    placeholder="Seleccionar Tour">
                                </multiselect>
                                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-12">
                            <label for="exampleInputEmail1">Fecha del tour</label>
                            <ValidationProvider rules="required" name="Fecha tour" v-slot="{ errors }">
                                <datetime v-model="fecha_tour" value-zone="local" zone="local"></datetime>
                                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-12">
                            <label for="exampleInputEmail1">Num. Adul.</label>
                            <ValidationProvider rules="numeric" name="Num. Adultos" v-slot="{ errors }">
                                <input v-model="num_adultos" type="number" class="form-control rounded-0">
                                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-12">
                            <label for="exampleInputEmail1">Num. Nin.</label>
                            <ValidationProvider rules="numeric" name="Num. Ninos" v-slot="{ errors }">
                                <input v-model="num_ninos" type="number" class="form-control rounded-0">
                                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-12">
                            <label for="exampleInputEmail1">Num. Infa.</label>
                            <ValidationProvider rules="numeric|required" name="Num. Infantes" v-slot="{ errors }">
                                <input v-model="num_infante" type="number" class="form-control rounded-0">
                                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group col-12">
                            <ValidationProvider rules="numeric|required" name="monto" v-slot="{ errors }">
                                <label for="exampleInputEmail1">Monto</label>
                                <div class="input-group">
                                        <div class="input-group-prepend rounded-0">
                                            <span class="input-group-text">$</span>
                                        </div>
                                        <input v-model="monto" type="number" class="form-control rounded-0">
                                        <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
                                </div>
                            </ValidationProvider>
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
                        <button @click="addActividad" :disabled="invalid" class="btn btn-primary">Agregar</button>
                    </div>
                </ValidationObserver>
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
                                <td>{{ actividad.reservation_date | moment("L") }}</td>
                                <td>{{ actividad.num_adults }}</td>
                                <td>{{ actividad.num_childrens }}</td>
                                <td>{{ actividad.num_infants }}</td>
                                <td>{{ actividad.amount }}</td>
                                <td>{{ actividad.total }}</td>
                                <td>
                                    <button @click="eliminarActividad(actividad.tour_id)" class="btn btn-danger btn-sm">
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
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";

const ToursResource = new Tours();
const OperationTourResource = new OperationTour();
export default {
    components: {
      datetime: Datetime,
      ValidationObserver,
      ValidationProvider
    },
    props: {
        activities: {
            default: ''
        },
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
            console.log('cambios');
            this.calculateTotal(this.operationTour.adult_price, this.operationTour.child_price)
        },
        async num_ninos() {
            this.calculateTotal(this.operationTour.adult_price, this.operationTour.child_price)
        },
        activities: {
            inmediate: true,
            handler(newValue) {
                this.activities = newValue;
                this.activities.forEach(activite => {
                    this.addActividadEdit(activite)
                });
            }
        }
    },
    methods : {
        eliminarActividad(id_tour) {
            const pos = this.actividades.map(function(actividad) { return actividad.tour_id; })
                .indexOf(id_tour);
            this.actividades.splice(pos, 1);
            this.$emit('onAddActivities', this.actividades)
        },
        async getTours() {
            const {data: {data}} = await ToursResource.getTours();
            this.tours = data
        },
        async addActividad(actividad) {
            this.actividades.push({
                id: null,
                actividad: this.actividad,
                reservation_date: this.fecha_tour.split('T')[0],
                num_adults: this.num_adultos,
                num_childrens: this.num_ninos,
                num_infants: this.num_infante,
                amount: Number(this.monto),
                total: this.total,
                tour_id: this.form.tour
            })
            console.log(this.actividades);
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
            })
             this.$emit('onAddActivities', this.actividades)
        },
        async calculateTotal(priceAdult, priceChild) {
            this.total = 0;
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
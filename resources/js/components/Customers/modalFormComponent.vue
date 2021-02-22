<template>
    <div>
        <button class="btn btn-primary btn-flat" data-toggle="modal" data-target="#modal-lg">
                <i class="fas fa-address-card"></i>
                &nbsp;Agregar contacto
            </button>
        
        <div class="modal fade" id="modal-lg">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Nuevo contacto</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body row">
              <div class="form-group col-6">
                <label>* Nombre</label>
                <input type="text" class="form-control rounded-0" placeholder="Jhon">
              </div>
              <div class="form-group col-6">
                <label>* Apellidos</label>
                <input type="text" class="form-control rounded-0" placeholder="Doe Smiths">
              </div>
              <div class="form-group col-6">
                <label>* Email</label>
                <input type="text" class="form-control rounded-0" placeholder="email@example.com">
              </div>
              <div class="form-group col-6">
                <label>Teléfono de contacto</label>
                <input type="text" class="form-control rounded-0" placeholder="(998) 123 4567">
              </div>
              <div class="form-group col-6">
                <label>Fecha de nacimiento</label>
                <datetime v-model="date"></datetime>
              </div>
              <div class="form-group col-6">
                <label>Genero</label>
                <select class="custom-select rounded-0">
                  <option>Seleccionar genero</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
              </div>
              <div class="form-group col-4">
                <label>Pais</label>
                <multiselect
                  @input="getStates()"
                  v-model="form.country"
                  label="country"
                  track-by="id"
                  :options="countries"
                  :searchable="true"
                  :show-labels="false"
                  placeholder="Seleccionar un pais">
                </multiselect>
              </div>
              <div class="form-group col-4">
                <label>Estado</label>
                <multiselect
                  @input="getCitys()"
                  v-model="form.state"
                  label="name"
                  track-by="id"
                  :options="states"
                  :searchable="true"
                  :show-labels="false"
                  placeholder="Seleccionar un estado">
                </multiselect>
              </div>
              <div class="form-group col-4">
                <label>Ciudad</label>
                <multiselect
                  v-model="form.city"
                  label="city"
                  track-by="id"
                  :options="citys"
                  :searchable="true"
                  :show-labels="false"
                  placeholder="Seleccionar una ciudad">
                </multiselect>
              </div>
              <div class="form-group col-4">
                <label>Como llego el contacto</label>
                <select class="custom-select rounded-0">
                  <option>Seleccionar</option>
                  <option>Por email</option>
                  <option>Por telefono</option>
                </select>
              </div>
              <div class="col-sm-8">
                <!-- textarea -->
                <div class="form-group">
                  <label>Comentarios adicionales</label>
                  <textarea class="form-control rounded-0" rows="5" placeholder="Enter ..."></textarea>
                </div>
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
              <button @click="getState()" type="button" class="btn btn-primary">Guardar contacto</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
    </div>
</template>

<script>
  import Nation from '../../providers/Nation';
  import { Datetime } from 'vue-datetime';

  const nationResource = new Nation();
  
  export default {
    components: {
      datetime: Datetime
    },
    data () {
      return {
          date: null,
          active_status: false,
          countries: [],
          states: [],
          citys: [],
          form: {
            country: null,
            state: null,
            city: null
          },
      }
    },
    methods: {
      async getCountries() {
        try {
          this.countries = await nationResource.getCountries();
          this.countries = this.countries.data.data
        } catch (error) {
          console.log('error paises', error)
        }
      },
      async getStates() {
        try {
          this.form.state = null
          this.form.city = null
          this.states = await nationResource.getState(this.form.country.id);
          this.states = this.states.data.data
        } catch (error) {
          console.log('error estados', error)
        }
      },
      async getCitys() {
        try {
          console.log(this.form.state)
          this.form.city = null
          this.citys = await nationResource.getCity(this.form.state.id);
          this.citys = this.citys.data.data
          console.log(this.citys)
        } catch (error) {
          console.log('error ciudades', error)
        }
      }
    },
    mounted() {
      this.getCountries();
      console.log('paises', this.countries);
    }
  }
</script>

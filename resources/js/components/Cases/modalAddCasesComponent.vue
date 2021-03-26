<template>
    <div>

      <modal name="my-first-modal"
          :style="{ padding: '100px 0px 30px' }"
          :width="'60%'"
          :height="'auto'"
          :scrollable="true">
        <ValidationObserver v-slot="{ invalid, validate }" ref="observer">
          <div class="modal-body row">
            
            <div class="form-group col-12">
              <label>* Titulo</label>
              <ValidationProvider rules="required" name="nombre" v-slot="{ errors }">
                <input type="text" v-model="form.name" class="form-control rounded-0" placeholder="Jhon">
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
              </ValidationProvider>
            </div> 
              
            <div class="form-group col-4">
                <label>Agencia</label>
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
                <label>Contacto(s)</label>
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
              <div class="col-sm-12">
                <!-- textarea -->
                <div class="form-group">
                  <label>¿Cual es el caso?</label>
                  <textarea id="editorCase" v-model="note"></textarea>
                </div>
              </div>
          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            <button v-if="texto_boton == 'Guardar contacto'" :disabled="invalid" @click="validate().then(saveContact)" type="button" class="btn btn-primary">{{ texto_boton }}</button>
            <button v-else :disabled="invalid" @click="validate().then(updateContact(form.id))" type="button" class="btn btn-primary">{{ texto_boton }}</button>
          </div>
        </ValidationObserver>
          
      </modal>
    </div>
</template>

<script>
  import Nation from '../../providers/Nation';
  import Customer from '../../providers/Customer';
  import { Datetime } from 'vue-datetime';
  import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

  const nationResource = new Nation();
  const customerResource = new Customer();

  export default {
    components: {
      datetime: Datetime,
      ValidationObserver,
      ValidationProvider
    },
    data () {
      return {
          note: '',
          date: null,
          active_status: false,
          countries: [],
          states: [],
          citys: [],
          texto_boton: 'Guardar contacto',
          form: {
            id: 0,
            name: null,
            last_name: null,
            email: null,
            phone: null,
            birth_date: null,
            sex: 0,
            additional_information: null,
            country: null,
            state: null,
            city: null
          },
      }
    },
    watch: { 
      OpenModalEdit() {
        this.openModal()
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
        } catch (error) {
          console.log('error ciudades', error)
        }
      },
      async saveContact() {
        try {
          const isValid = await this.$refs.observer.validate();
          if (isValid) {
            await customerResource.saveCustomer(this.form)
            this.$swal.fire({
                icon: 'success',
                title: 'Bien',
                toast: true,
                position: 'top',
                timer: 3000,
                showConfirmButton: false,
                timerProgressBar: true,
                text: 'Contacto guardado de forma correcta',
            })
            this.clearData()
            this.$modal.hide('my-first-modal');
            this.$emit('onRefreshTable')
          }
          else {
            this.$swal.fire({
                icon: 'error',
                title: 'Oops...',
                toast: true,
                position: 'top',
                timer: 3000,
                showConfirmButton: false,
                timerProgressBar: true,
                text: 'Verifique que el formulario fue llenado de forma correcta',
            })
          }
          
        } catch (error) {
          this.$swal.fire({
              icon: 'error',
              title: 'Oops...',
              toast: true,
              position: 'top',
              timer: 3000,
              showConfirmButton: false,
              timerProgressBar: true,
              text: 'Disculpe tuvimos un error',
          })
        }
      },
      async updateContact() {
        try {
          const isValid = await this.$refs.observer.validate();
          if (isValid) {
            await customerResource.updateCustomer(this.form)
            this.$swal.fire({
                icon: 'success',
                title: 'Bien',
                toast: true,
                position: 'top',
                timer: 3000,
                showConfirmButton: false,
                timerProgressBar: true,
                text: 'Contacto modificado de forma correcta',
            })
            this.clearData()
            this.$modal.hide('my-first-modal');
            this.$emit('onRefreshTable')
          }
          else {
            this.$swal.fire({
                icon: 'error',
                title: 'Oops...',
                toast: true,
                position: 'top',
                timer: 3000,
                showConfirmButton: false,
                timerProgressBar: true,
                text: 'Verifique que el formulario fue llenado de forma correcta',
            })
          }
          
        } catch (error) {
          this.$swal.fire({
              icon: 'error',
              title: 'Oops...',
              toast: true,
              position: 'top',
              timer: 3000,
              showConfirmButton: false,
              timerProgressBar: true,
              text: 'Disculpe tuvimos un error',
          })
          console.log(error)
        }
      },
      async openModal(id_contacto = null) {
        this.clearData();
        if(id_contacto != null) {
          let infoCustomer = await customerResource.getCustomer(id_contacto);
          infoCustomer = infoCustomer.data.data;
          console.log(infoCustomer)
          this.form.id = infoCustomer.id
          this.form.name = infoCustomer.name;
          this.form.last_name = infoCustomer.last_name;
          this.form.email = infoCustomer.email;
          this.form.phone = infoCustomer.phone;
          this.form.birth_date = infoCustomer.birth_date;
          this.form.sex = infoCustomer.sex;
          this.form.additional_information = infoCustomer.additional_information;
          this.form.country = infoCustomer.country;
          this.form.state = infoCustomer.state;
          this.form.city = infoCustomer.city;
          this.texto_boton =  'Editar contacto';
        }
        else {
          this.texto_boton =  'Guardar contacto';
        }
        this.$modal.show('my-first-modal')
        $(function () {
            //SUMMERNOTE
            $('#editorCase').summernote()
        })
      },
      clearData() {
        this.form.name = null;
        this.form.last_name = null;
        this.form.email = null;
        this.form.phone = null;
        this.form.birth_date = null;
        this.form.sex = null;
        this.form.additional_information = null;
        this.form.country = null;
        this.form.state = null;
        this.form.city = null;
      }
    },
    mounted() {
        this.getCountries();
    }
  }
</script>

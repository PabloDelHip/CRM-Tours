<template>
    <div>

      <modal name="add-cases"
          :width="'60%'"
          :height="'auto'"
          :scrollable="true">
        <ValidationObserver v-slot="{ invalid, validate }" ref="observer">
          <div class="modal-body row">
            
            <div class="form-group col-12">
              <label>* Titulo</label>
              <ValidationProvider rules="required" name="nombre" v-slot="{ errors }">
                <input type="text" v-model="form.name" class="form-control rounded-0" placeholder="Papeles importantes de los tours">
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
              </ValidationProvider>
            </div> 
              
            <div class="form-group col-4">
                <label>Agencia</label>
                <multiselect
                    @input="getContacts()"
                    v-model="form.agencia"
                    label="name"
                    track-by="id"
                    :options="vendors"
                    :searchable="true"
                    :show-labels="false"
                    placeholder="Seleccionar una agencia">
                </multiselect>
            </div>
              <div class="form-group col-4">
                <label>Contacto(s)</label>
                <multiselect
                  v-model="form.state"
                  track-by="id"
                  :custom-label="completeName"
                  :options="contacts"
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
  import Vendor from '../../providers/Vendor';
  import User from '../../providers/User';
  import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

  const vendorResource = new Vendor();
  const userResource = new User();

  export default {
    components: {
      ValidationObserver,
      ValidationProvider
    },
    data () {
      return {
        vendors: [],
        contacts: [],
        note: '',
        date: null,
        active_status: false,
        countries: [],
        states: [],
        citys: [],
        texto_boton: 'Guardar contacto',
        form: {
          agencia: '',
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
      completeName({profile}) {
        return `${profile.name} ${profile.last_name}`
      },
      async getVendors() {
        try {
          this.vendors = await vendorResource.getVendorList();
          this.vendors = this.vendors.data.data
        } catch (error) {
          console.log('error paises', error)
        }
      },
      async getContacts() {
        try {
          this.contacts = await userResource.getUserVendor(this.form.agencia.id);
          this.contacts = this.contacts.data.users;
        } catch (error) {
          console.log('error estados', error)
        }
      },
      async getCitys() {
        try {
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
            this.$modal.hide('add-cases');
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
            this.$modal.hide('add-cases');
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
        this.$modal.show('add-cases')
        await this.getVendors();
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
  }
</script>

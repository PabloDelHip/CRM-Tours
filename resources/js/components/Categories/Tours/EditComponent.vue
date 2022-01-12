<template>
    <div>
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Editar Categoria</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                        <router-link :to="{ path: '/' }">
                        Home
                        </router-link>
                    </li>
                    <li class="breadcrumb-item active">Categoria</li>
                    </ol>
                </div>
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>

        <ValidationObserver v-slot="{ invalid, validate }" ref="observer">
          <div class=" row">
            
            <div class="form-group col-6">
              <label>* Nombre</label>
              <ValidationProvider rules="required" name="nombre" v-slot="{ errors }">
                <input type="text" v-model="form.name" class="form-control rounded-0" placeholder="Aquatico">
                <span :class="['error', 'invalid-feedback', errors[0] ? 'ver' : '']">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
              <div class="form-group col-6">
                <label>Description</label>
                <textarea  class="form-control rounded-0" id="editorCase" v-model="form.description"></textarea>
              </div>
              
                <div class="form-group col-6">
                    <label>Titulo</label>
                    <input type="text" v-model="form.title" class="form-control rounded-0" placeholder="Tours Aquatico">
                </div>

            <div class="form-group col-6">
                <label>Meta description</label>
                <textarea class="form-control rounded-0" id="editorCase" v-model="form.meta_description"></textarea>
            </div>
            <div class="col-6">
                <div class="custom-control custom-checkbox">
                    <input
                    type="checkbox"
                    class="custom-control-input"
                    id="seeHome"
                    v-model="form.see_home"
                    />
                    <label class="custom-control-label" for="seeHome">
                    Ver en home
                    </label>
                </div>
            </div>
          </div>
          <div class="modal-footer justify-content-between">
            <button :disabled="invalid" @click="validate().then(saveCategoria)" type="button" class="btn btn-primary">{{ texto_boton }}</button>
          </div>
        </ValidationObserver>
    </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import Categorie from '../../../providers/Categorie'

const CategorieResource = new Categorie();
export default {
    props: {
      id: {
        type: String
      }
    },
    components: {
      ValidationObserver,
      ValidationProvider
    },
    data () {
      return {
          date: null,
          active_status: false,
          countries: [],
          states: [],
          citys: [],
          texto_boton: 'Guardar categoria',
          form: {
            name: '',
            description: '',
            image: '',
            title: '',
            meta_description: '',
            keywords: '',
            see_home: false,
            reverse_outside: false,
            status: true
          },
      }
    },
    methods: {
      async saveCategoria() {
        try {
          const isValid = await this.$refs.observer.validate();
          if (isValid) {
            await CategorieResource.updateCategorieAll(this.id,this.form)

            this.$swal.fire({
                title: 'Guardado correcto',
                text: 'Contacto guardada de forma correcta',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                }).then( async (result) => {
                  this.$router.push({name: "ListCategoriesTours"});
                })
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
          console.log(error)
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
      async getCategorie() {
        const {data: {data}} = await CategorieResource.getCategorie(this.id);
        this.form = data;
      }
    },
    async mounted() {
      await this.getCategorie();
    }
}
</script>
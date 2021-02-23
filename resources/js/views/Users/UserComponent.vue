<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title" v-if="newUser">Agregar nuevo perfil</h3>
                        <h3 class="card-title" v-if="!newUser">Editar perfil</h3>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" class="form-control" v-model="name" placeholder="John Doe">
                        </div>
                        <div class="form-group">
                            <label for="lastName">Apellidos</label>
                            <input type="text" class="form-control" v-model="lastName" placeholder="John Doe">
                        </div>
                        <div class="form-group">
                            <label for="birthDate">Fecha de nacimiento</label>
                            <input type="date" class="form-control" v-model="birthDate" placeholder="John Doe">
                        </div>
                            <div class="form-group">
                                <label for="sex">Sexo</label>
                                <select class="custom-select" v-model.number="sex">
                                    <option value="1">Masculino</option>
                                    <option value="2">Femenino</option>
                                    <option value="3">Otro</option>
                                </select>
                            </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title" v-if="newUser">Agregar nuevo usuario</h3>
                        <h3 class="card-title" v-if="!newUser">Editar usuario</h3>
                    </div>
                    <form method="POST" action="/user/saveUser">
                        <div class="card-body">
                            <transition name="fade">
                                <div class="alert alert-danger alert-dismissible text-center" v-if="showError">
                                    {{ message }}
                                </div>
                            </transition>
                            <div class="form-group">
                                <label for="email">Correo electrónico</label>
                                <input type="email" class="form-control" v-model="email" :disabled="!newUser"  placeholder="ejemplo.fulanito@ejemplo.com">
                            </div>
                            <div class="form-group" v-if="this.user == null">
                                <label for="emailConfirm">Confirmar correo electrónico</label>
                                <input type="email" class="form-control" v-model="emailConfirm" placeholder="ejemplo.fulanito@ejemplo.com">
                            </div>
                            <div class="form-group" v-if="this.user == null">
                                <label for="password">Contraseña</label>
                                <input type="password" class="form-control" v-model="password" placeholder="Contraseña">
                            </div>
                            <div class="form-group">
                                <label>Estatus del usuario</label>
                                <select class="custom-select" v-model.number="statusUser">
                                    <option value="0">Inactivo</option>
                                    <option value="1">Activo</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-6">
                <contacts-component></contacts-component>
            </div>
            <div class="col-md-6">
                <address-component></address-component>
            </div>
            <div class="col-md-12">
                <button type="button" :disabled="showError" @click="saveUser()" class="btn btn-primary">Guardar</button>
            </div>
        </div>
    </div>
</template>

<script>
    import User from '../../providers/User';
    import ContactsComponent from '../../components/Contacts/contactsComponent.vue';
    import AddressComponent from '../../components/Address/addressComponent.vue';

    const UserResource = new User();

    export default{
        name: "create-user-component",
        props: {
            id: {
                // Revisar como convertirlo en número
                required: false,
            },
        },
        components: {
            ContactsComponent,
            AddressComponent,
        },
        data () {
            return {
                message: null,
                showError: null,
                email: null,
                emailConfirm: null,
                password: null,
                statusUser: 1,
                user:  null,
                newUser: false,

                name: null,
                lastName: null,
                birthDate: null,
                sex: 0,
            }
        },
        async created() {
            if (this.id != undefined){
                await this.getUser();
                return;
            }
            this.newUser = this.id == undefined || this.user == '';
            this.status = 1;
        },
        methods: {
            async chechIdUser(){
                if (this.id == undefined || this.user == null) {
                    return false;
                }
                return true;
            },
            async getUser() {
                this.user = (await UserResource.getUser(this.id)).data;
                if (this.user == ''){
                    this.message = "Usuario no existe.";
                    this.showError = true;
                    return;
                }
                // this.name = this.user.name;
                this.email = this.user.email;
                this.emailConfirm = this.user.email;
                this.statusUser = this.user.status;
            },
            getUserForm(){
                return {
                    // name: this.name,
                    email: this.email,
                    password: this.password,
                    status: this.statusUser,
                };
            },
            saveUser() {
                this.showError = false;
                if (!this.isValidForm()){
                    this.showError = true;
                    return;
                }

                let formData = this.getUserForm();
                if (this.newUser){
                    this.saveNewUser(formData);
                }
                else{
                    this.saveEditUser(formData);
                }
            },
            saveNewUser(userForm) {
                UserResource.post(userForm).then((response) => {
                    window.location.href = '/users';
                }).catch(err =>{
                    console.log(err);
                });
            },
            saveEditUser(userForm) {
                UserResource.updateUser(this.id, userForm).then((response) => {
                    window.location.href = '/users';
                }).catch(err =>{
                    console.log(err);
                });
            },
            isValidForm() {
                // if (this.name == null || this.name == '') {
                //     this.message = "Nombre no puede estar vacio.";
                //     return false;
                // }
                if (this.email != this.emailConfirm) {
                    this.message = "Correos no coinciden";
                    return false;
                }
                if (this.password == '') {
                    this.message = "Contraseña no puede estar vacio.";
                    return false;
                }

                return true;
            },
        },
    }
</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <div class="card card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Agregar nuevo usuario</h3>
                    </div>
                    <form method="POST" action="/user/saveUser">
                        <div class="card-body">
                            <transition name="fade">
                                <div class="alert alert-danger alert-dismissible text-center" v-if="showError">
                                    {{ message }}
                                </div>
                            </transition>
                            <div class="form-group">
                                <label for="name">Nombre</label>
                                <input type="text" class="form-control" v-model="name"  placeholder="John Doe">
                            </div>
                            <div class="form-group">
                                <label for="email">Correo electrónico</label>
                                <input type="email" class="form-control" v-model="email"  placeholder="ejemplo.fulanito@ejemplo.com">
                            </div>
                            <div class="form-group">
                                <label for="emailConfirm">Confirmar correo electrónico</label>
                                <input type="email" class="form-control" v-model="emailConfirm"  placeholder="ejemplo.fulanito@ejemplo.com">
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" class="form-control" v-model="password" placeholder="Contraseña">
                            </div>
                            <div class="form-group">
                                <label>Estatus del usuario</label>
                                <select class="custom-select">
                                    <option>Inactivo</option>
                                    <option selected>Activo</option>
                                </select>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="button" @click="saveUser()" class="btn btn-primary">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import User from '../../providers/User';

    const UserResource = new User();

    export default{
        name: "create-user-component",
        data () {
            return {
                name: null,
                email: null,
                emailConfirm: null,
                password: null,
                message: null,
                showError: null,
            }
        },
        methods: {
            saveUser() {
                this.showError = false;
                if (!this.isValidForm()){
                    this.showError = true;
                    return;
                }

                let formData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                }

            },
            isValidForm() {
                if (this.name == '') {
                    this.message = "Nombre no puede estar vacio.";
                    return false;
                }
                if (this.email != this.emailConfirm) {
                    this.message = "Correos no coinciden";
                    return false;
                }
                if (this.name == '') {
                    this.message = "Contraseña no puede estar vacio.";
                    return false;
                }

                return true;
            },
        },
    }


</script>
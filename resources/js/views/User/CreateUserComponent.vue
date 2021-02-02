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
                if (this.email != this.emailConfirm){
                    this.message = "mal contraseña";
                    this.showError = true;
                }


                let formData = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                }


                console.log(formData)
            }
        },
    }


</script>
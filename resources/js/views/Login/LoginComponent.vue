<template>
    <div class="login-box">
        <!-- /.login-logo -->
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
            <img src="/img/Logotipo.png" alt="Logo Caribbean Hollidays">
            </div>
            <div class="card-body">
            <p class="login-box-msg">Regístrese para iniciar su sesión</p>
            <transition name="fade">
                <div class="alert alert-danger alert-dismissible text-center" v-if="show_error">
                    {{ message }}
                </div>
            </transition>
            <form action="../../index3.html" method="post">
                <div class="input-group mb-3">
                <input v-model="email" type="email" class="form-control" placeholder="Email">
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                    </div>
                </div>
                </div>
                <div class="input-group mb-3">
                <input type="password" v-model="password" class="form-control" placeholder="Password">
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-8">
                    <div class="icheck-primary">
                    <input type="checkbox" id="remember">
                    </div>
                </div>
                <!-- /.col -->
                <div class="col-12">
                    <button type="button" @click="login()" class="btn btn-primary btn-block">Ingresar</button>
                </div>
                <!-- /.col -->
                </div>
            </form>
        
            <p class="mb-1 text-center mt-2">
                <router-link :to="{ name:'RestablecerContrasena'}">
                    Recuperar contraseña
                </router-link>
            </p>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>
    <!-- /.login-box -->
</template>

<script>
    
    import Auth from '../../providers/Auth';

    const AuthResourse = new Auth();

    export default {
        name:"login-component",
        data () {
            return {
                email: null,
                password: null,
                show_error: false,
                message: null,
                disabled: true
            }
        },
        methods: { 
            login() {
                let formData = {
                    email: this.email,
                    password: this.password
                }
                //let data_user = AuthResourse.login(formData)
                AuthResourse.login(formData).then((response) => {
                    //localStorage.setItem('user', JSON.stringify(miObjeto));
                    this.show_error = false
                    localStorage.setItem('data_user', JSON.stringify(response.data))
                    window.location.href = '/overview';
                    //this.$router.push({name: 'Overview'})
                }).catch(err => {
                    console.log(err)
                    let error = err.response;
                    this.message = this.statusCode(error.status)
                    this.show_error = true
                })
            },
            statusCode(status) {
                switch (status) {
                    case 401:
                        return 'Usuario o contraseña incorrectos'
                        break;
                    case 422:
                        return 'Favor de llenar todos los campos'
                        break;
                }
            }
        },
    }
</script>

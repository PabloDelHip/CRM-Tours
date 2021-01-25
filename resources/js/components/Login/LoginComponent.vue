<template>
    <div class="login-box">
        <!-- /.login-logo -->
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
            <img width="50%" src="/img/Logotipo.png" alt="Logo Caribbean Hollidays">
            </div>
            <div class="card-body">
            <p class="login-box-msg">Regístrese para iniciar su sesión</p>
        
            <form action="../../index3.html" method="post">
                <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email">
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                    </div>
                </div>
                </div>
                <div class="input-group mb-3">
                <input type="password" class="form-control" placeholder="Password">
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
                    <button type="submit" class="btn btn-primary btn-block">Ingresar</button>
                </div>
                <!-- /.col -->
                </div>
            </form>
        
            <p class="mb-1 text-center mt-2">
                <router-link :to="{ name:'restablecer_contrasena'}">
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
    
    export default {
        name:"login-component",
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

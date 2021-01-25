<template>
    <div class="login-box">
        <div class="card-header text-center">
            <img width="50%" src="/img/Logotipo.png" alt="Logo Caribbean Hollidays">
        </div>
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
            <p class="login-box-msg">¿Olvidaste tu contraseña? Aquí puede recuperar fácilmente una nueva contraseña.</p>

            <form action="recover-password.html" method="post">
                <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Email">
                <div class="input-group-append">
                    <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-12">
                    <button type="submit" class="btn btn-primary btn-block">Solicitar nueva contraseña</button>
                </div>
                <!-- /.col -->
                </div>
            </form>

            <p class="mt-3 mb-1">
                <router-link :to="{ name:'login'}">
                    Login
                </router-link>
            </p>
            </div>
            <!-- /.login-card-body -->
        </div>
        </div>
        <!-- /.login-box -->
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<template>
    <div class="login-box">
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
                <img width="50%" src="/img/Logotipo.png" alt="Logo Caribbean Hollidays">
            </div>
            <div class="card-body">
                <p class="login-box-msg">Está a solo un paso de su nueva contraseña, recupere su contraseña ahora.</p>
                <form action="login.html" method="post">
                    <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <div class="input-group mb-3">
                    <input type="password" class="form-control" placeholder="Confirm Password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                        </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-block">Cambiar contraseña</button>
                    </div>
                    <!-- /.col -->
                    </div>
                </form>
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

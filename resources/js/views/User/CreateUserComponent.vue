<template>
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Agregar nuevo usuario</h3>
            </div>
            <form method="POST" action="/user/saveUser">
                <div class="card-body">
                    <div class="form-group">
                        <label for="email">Correo electrónico</label>
                        <input type="email" class="form-control" id="email" placeholder="ejemplo.fulanito@ejemplo.com">
                    </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" class="form-control" id="password" placeholder="Contraseña">
                </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
</template>
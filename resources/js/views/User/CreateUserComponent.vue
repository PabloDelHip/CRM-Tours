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
                                <input type="text" class="form-control" id="nMW" placeholder="John Doe">
                            </div>
                            <div class="form-group">
                                <label for="email">Correo electrónico</label>
                                <input type="email" class="form-control" id="email" placeholder="ejemplo.fulanito@ejemplo.com">
                            </div>
                            <div class="form-group">
                                <label for="emailConfirm">Confirmar correo electrónico</label>
                                <input type="email" class="form-control" id="emailConfirm" placeholder="ejemplo.fulanito@ejemplo.com">
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" class="form-control" id="password" placeholder="Contraseña">
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
                            <button type="submit" class="btn btn-primary">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
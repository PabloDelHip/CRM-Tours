<template>
    <div class="col-md-3">
        <!-- Main content -->
                    <div class="col-md-12 p-0 m-0">

                        <!-- Profile Image -->
                        <div class="card card-primary card-outline">
                        <div class="card-body box-profile">
                            <div class="text-center">
                            <img class="profile-user-img img-fluid img-circle"
                                src="/dist/img/user4-128x128.jpg"
                                alt="User profile picture">
                            </div>

                            <h3 class="profile-username text-center">Nina Mcintire</h3>

                            <!--<p class="text-muted text-center">Software Engineer</p>-->

                            <ul class="list-group list-group-unbordered mb-3">
                            <li class="list-group-item">
                                <b>Tours vendidos</b> <a class="float-right">543</a>
                            </li>
                            <li class="list-group-item">
                                <b>Ciudad</b> <a class="float-right">Cancún</a>
                            </li>
                            <li class="list-group-item">
                                <b>Sucursal</b> <a class="float-right">Cancún ADO</a>
                            </li>
                            </ul>

                            <a href="#" class="btn btn-primary btn-block"><b><i class="fas fa-pen"></i> Editar</b></a>
                        </div>
                        <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
               
                </div>
                <!-- /.row -->
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

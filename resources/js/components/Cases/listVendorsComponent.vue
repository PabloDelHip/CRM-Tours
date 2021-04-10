<template>
    <div class="card-body">
        <!--<pre>
            {{ cases }}
        </pre> -->
        <table id="tableCase" class="table table-bordered table-striped table-responsive">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Usuario</th>
                    <th>Celular</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="_case in cases" :key="_case.id">
                    <td>{{ _case.title }}</td>
                    <td>{{ _case.user.profile.name }} {{ _case.user.profile.last_name }}</td>
                    <td>{{ _case.user.contact.moviles }}</td>
                    <td>{{ _case.user.contact.phones }}</td>
                    <td>{{ _case.user.email }}</td>
                    <td v-if="_case.status" class="text-center">
                        <span class="right badge badge-success text-center">Abierto</span>
                    </td>
                    <td v-else>
                        <span class="right badge badge-danger">Cerrado</span>
                    </td>
                    <td class="table-actions">
                        <router-link class="btn btn-primary btn-sm" :to="{ name:'profileVendor'}">
                            <i class="far fa-eye"></i>
                        </router-link>
                        <a class="btn btn-info btn-sm" @click="$refs.modalFormComponent.openModal(vendor.id);" href="#">
                            <i class="fas fa-pencil-alt"></i>
                        </a>
                        <a v-if="_case.status" href="#" class="btn btn-danger btn-sm">
                            <i class="fas fa-lock"></i>
                        </a>
                        <a v-else href="#" class="btn btn-success btn-sm">
                            <i class="fas fa-lock-open"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- /.card-body -->
    </div>
</template>

<script>
    import Case from '../../providers/Case';

    const caseResourse = new Case();

    export default {
        props: ['id_vendor'],
        data () {
            return {
                cases: []
            }
        },
        methods: { 
            async getCasesVendor() {
                try {
                    this.cases = await caseResourse.getListCaseVendor(this.id_vendor)
                    this.cases = this.cases.data.cases;
                    this.createTable()
                } catch (error) {
                }
            },
            createTable () {
                $(function () {
                //DATA-TABLE
                $("#tableCase").DataTable({
                "responsive": false, "lengthChange": false, "autoWidth": false,
                "buttons": ["copy", "csv", "excel", "pdf", "print"],
                language: {
                    "decimal": "",
                    "emptyTable": "No hay información",
                    "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                    "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                    "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                    "infoPostFix": "",
                    "thousands": ",",
                    "lengthMenu": "Mostrar _MENU_ Entradas",
                    "loadingRecords": "Cargando...",
                    "processing": "Procesando...",
                    "search": "Buscar:",
                    "zeroRecords": "Sin resultados encontrados",
                    "paginate": {
                        "first": "Primero",
                        "last": "Ultimo",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    }
                },
                }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
            })
            }
        },
        mounted () {
            this.getCasesVendor();
        }
    }
</script>
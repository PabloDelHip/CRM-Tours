<template>
    <div class="card-body">
        <table id="tableCase" class="table table-bordered table-striped table-responsive">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Usuario</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="_case in cases" :key="_case.id">
                    <td>{{ _case.title }}</td>
                    <td>{{ _case.user.profile.name }} {{ _case.user.profile.last_name }}</td>
                    <td>{{ _case.user.email }}</td>
                    <td>{{ _case.status }}</td>
                    <td class="table-actions">
                        Acciones
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
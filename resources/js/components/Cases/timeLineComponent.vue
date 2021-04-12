<template>
    <div>
        <div class="col-sm-12 p-2 mb-3" style="background: #fff;">
            <!-- textarea -->
            <div class="form-group">
                <label>Actualizar caso</label>
                <textarea id="editorCase"></textarea>
            </div>
            <button @click="saveCaseHistory()" type="button" class="btn btn-primary">Actualizar Caso</button>
        </div>
        <div class="col-md-12 p-2 contenedor-case-history">
            <!-- The time line -->
            <div class="timeline" v-for="_case in cases" :key="_case.id">
                <!-- timeline time label -->
                <div class="time-label">
                    <span class="bg-success">{{ _case.created_at}}</span>
                </div>
                <!-- /.timeline-label -->
                <!-- timeline item -->
                <div v-for="caseInfo in _case.data" :key="caseInfo.id">
                    <i class="fas fa-comments"></i>
                    <div class="timeline-item">
                        <span class="time"><i class="fas fa-clock"></i> 12:05</span>
                        <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                        <div class="timeline-body">
                            <span v-html="caseInfo.information"></span>
                        </div>
                    </div>
                </div>
                <!-- timeline item -->
                
                <div>
                <i class="fas fa-clock bg-gray"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Case from '../../providers/Case';
    
    const caseResource = new Case();
    export default {
        props: ['id_case'],
        data () {
            return {
                cases: [],
                form: {
                    information: '',
                    status: true,
                    case_id: this.id_case
                }
            }
        },
        methods: {
            async getHistoryCase() {
                this.cases = await caseResource.getCaseHistory(this.id_case)
                this.cases = this.cases.data.case
            },
            async saveCaseHistory() {
                try {
                    this.form.information = $('#editorCase').summernote('code');
                    console.log(this.form)
                    await caseResource.createCaseHistory(this.form)
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Bien',
                        toast: true,
                        position: 'top',
                        timer: 3000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        text: 'Caso modificado de forma correcta',
                    })
                    this.getHistoryCase()
                } catch (error) {
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        toast: true,
                        position: 'top',
                        timer: 3000,
                        showConfirmButton: false,
                        timerProgressBar: true,
                        text: 'Disculpe tuvimos un error',
                    })
                }
            }
        },
        mounted() {
            this.getHistoryCase()
            $(function () {
                //SUMMERNOTE
                $('#editorCase').summernote()
                $('#editorCase').summernote('code', '')
            })
        },
    };
</script>

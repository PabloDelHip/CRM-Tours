<template>
    <div class="card card-warning">
        <div class="card-header">
            <h3 class="card-title" v-if="newContact">Agregar nuevo contacto</h3>
            <h3 class="card-title" v-if="!newContact">Editar contacto</h3>
        </div>
        <div class="card-body">
            <div class="form-group">
                <label for="typeContact">Tipo de contacto</label>
                <select name="typeContact" class="custom-select" v-model.number="typeContact">
                    <option value="1">Usuario</option>
                    <option value="2">Proveedor</option>
                    <option value="3">Cliente</option>
                </select>
            </div>
            <div class="form-group">
                <label for="rfcContact">RFC</label>
                <input type="text" name="rfcContact" class="form-control" v-model="rfcContact" placeholder="CUPU800825569">
            </div>
            <div class="form-group">
                <label for="typePerson">Tipo persona</label>
                <select name="typePerson" class="custom-select" v-model.number="typePerson">
                    <option value="1">Física</option>
                    <option value="2">Moral</option>
                </select>
            </div>
            <div class="form-group">
                <label for="emailsContact">Correos electrónicos</label>
                <input type="text" name="emailsContact" class="form-control" v-model="emailsContact" placeholder="">
            </div>
            <div class="form-group">
                <label for="mobilesContact">Teléfonos móviles</label>
                <input type="text" name="mobilesContact" class="form-control" v-model="mobilesContact" placeholder="">
            </div>
            <div class="form-group">
                <label for="phonesContact">Teléfonos</label>
                <input type="text" name="phonesContact" class="form-control" v-model="phonesContact" placeholder="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                newContact: false,
                typeContact: 1,
                rfcContact: null,
                typePerson: 1,
                emailsContact: null,
                mobilesContact: null,
                phonesContact: null,
            };
        },
        created(){
            this.newContact = true;
        },
    }
</script>

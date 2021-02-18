<template>
    <div class="card card-success">
        <div class="card-header">
            <h3 class="card-title" v-if="newAddress">Agregar nueva dirección</h3>
            <h3 class="card-title" v-if="!newAddress">Editar dirección</h3>
        </div>
        <div class="card-body">
            <div class="form-group">
                <label for="postalCode">Código postal</label>
                <input type="text" name="postalCode" class="form-control" v-model.number="postalCode" placeholder="">
            </div>
            <div class="form-group">
                <label for="street">Calle</label>
                <input type="text" name="street" class="form-control" v-model="street" placeholder="">
            </div>
            <div class="form-group">
                <label for="street1">Calle 1</label>
                <input type="text" name="street1" class="form-control" v-model="street1" placeholder="">
            </div>
            <div class="form-group">
                <label for="street2">Calle 2</label>
                <input type="text" name="street2" class="form-control" v-model="street2" placeholder="">
            </div>
            <div class="form-group">
                <label for="references">Referencias</label>
                <input type="text" name="references" class="form-control" v-model="references" placeholder="">
            </div>
            <div class="form-group">
                <label for="suburb">Suburbio/Fraccionamiento/Region</label>
                <input type="text" name="suburb" class="form-control" v-model="suburb" placeholder="">
            </div>
            <div class="form-group">
                <label for="country">País</label>
                <select name="country" class="custom-select" v-model.number="country">
                    <option value="1">México</option>
                </select>
            </div>
            <div class="form-group">
                <label for="state">Estado</label>
                <select name="state" class="custom-select" v-model.number="state">
                    <option value="1">Quintana Roo</option>
                </select>
            </div>
            <div class="form-group">
                <label for="city">Ciudad</label>
                <select name="city" class="custom-select" v-model.number="city">
                    <option value="1">México</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                newAddress: false,
                postalCode: null,
                street: null,
                street1: null,
                street2: null,
                references: null,
                suburb: null,
                country: 0,
                state: 0,
                city: 0,
            };
        },
        created(){
            this.newAddress = true;
        },
    }
</script>
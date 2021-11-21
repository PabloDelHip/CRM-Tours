<template>
  <div>
    <modal name="add-payment"
      :width="'50%'"
      :height="'auto'"
      :scrollable="true"
    >
      <div class="modal-body row">
        <div class="form-group col-4">
          <label>Monto</label>
          <input 
            type="number"
            class="form-control rounded-0"
            v-model="form.amount"
          >
        </div>
        <div class="form-group col-6">
          <label>Mes Pagando</label>
          <input 
            type="date"
            class="form-control rounded-0"
            v-model="form.month_paying"
          >
        </div>
        <div class="col-sm-12">
          <!-- textarea -->
          <div class="form-group">
            <label>Comentario Adicional</label>
              <textarea
                class="form-control rounded-0"
                id="editorCase"
                v-model="form.comment"
              >
              </textarea>
          </div>
        </div>
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
        <button  @click="savePayment" type="button" class="btn btn-primary">Guardar Pago</button>
      </div>
    </modal>
  </div>
</template>

<script>
import Seller from "../../providers/Seller";

const SellerResource = new Seller();

export default {
  props: {
    sellerId: {
      type: Number,
      required: true,
    },
  },
  data(){
    return{
      form: {
        amount: 0,
        comment: '',
        month_paying: ''
      },
    };
  },
  computed: {
    user: function () {
      return this.$store.state.user
    }
  },
  methods: {
    savePayment() {
      this.form.user_id = this.user.id;
      this.form.seller_id = this.sellerId;
      const response = SellerResource.savePayment(this.form)
      this.$modal.hide('add-payment');
      this.$emit('onFiltroClear')
    }
  },
  mounted() {
    console.log('soy el', this.user.id);
    console.log('idid', this.sellerId)
  }
};
</script>

<style lang="scss" scoped></style>
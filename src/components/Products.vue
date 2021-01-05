<template>
  <div class="container">
    <div class="row">
        <div class="col-12 my-2">
            <button @click="addProduct">
                Add Product
            </button>
        </div>
        <div class="col-12" v-for="(product, index) in products" :key="index">
            <div class="card bg-white w-100 d-flex flex-row justify-content-between p-2">
                <div>Name: {{ product.name }}</div>
                <div>
                    <button class="btn btn-sm btn-dark text-dark bg-light mx-2" @click="viewProduct(product)">
                        View
                    </button>
                    <button class="btn btn-sm btn-primary mx-2">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(['addProduct', 'setProduct']),
    viewProduct(product) {
        this.$router.push('/product/1').then(() => {
            this.setProduct(product);
        });
    }
  }
};
</script>
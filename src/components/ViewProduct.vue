<template>
  <div class="container">
    <div class="row">
        <div class="col-12" >
            <div class="card bg-white w-100 d-flex flex-row justify-content-between p-2">
                <div>Name: {{ product.name }}</div>
                <div>
                    {{ product.price || 'Free' }}
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
    ...mapState(["product"]),
  },
  methods: {
    ...mapActions(['addProduct'])
  }
};
</script>
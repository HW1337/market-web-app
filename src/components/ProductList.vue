<template>
  <div class="card-container">
    <TransitionGroup name="list">
      <ProductItem v-for="product in filteredProducts" :key="product.id" :product="product"/>
    </TransitionGroup>
  </div>
  <div v-intersection="loadProducts"></div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import ProductItem from './ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  mounted() {
    this.loadProducts();
  },

  methods: {
    ...mapActions(['fetchProducts']),
    loadProducts() {
      this.$store.dispatch('increaseLimit', 10);
      this.$store.dispatch('fetchProducts');
    },
  },
  computed: {
    ...mapState(['products', 'productsLimit', 'searchQuery']),
    ...mapGetters(['filteredProducts']),
  },
};
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  padding-top: 80px;
  padding-bottom: 20px;
  justify-content: space-around;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
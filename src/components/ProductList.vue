<template>
  <div class="card-container">
    <ProductItem v-for="product in filteredProducts" :key="product.id" :product="product" />
  </div>
</template>
  
<script>
import axios from 'axios';
import ProductItem from './ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  props: {
    products: Array,
    searchQuery: String,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  },
  methods: {

  },
  computed: {
    filteredProducts() {
      if (!this.searchQuery) {
        return this.products;
      }

      const searchTerm = this.searchQuery.toLowerCase();
      return this.products.filter(product => product.title.toLowerCase().includes(searchTerm));
    },
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
</style>
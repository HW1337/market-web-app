<template>
    <div class="card-container">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ProductCard from './ProductCard.vue';
  
  export default {
    components: {
      ProductCard
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
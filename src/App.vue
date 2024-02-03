<template>
  <SearchHeader @search="updateSearchTerm" />
  <ProductList :products="products" :searchQuery="searchTerm" />
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import SearchHeader from '@/components/SearchHeader.vue';

export default {
  data() {
    return {
      products: [],
      searchTerm: '',
    };
  },
  components: {
    SearchHeader,
    ProductList,
  },
  methods: {
    updateSearchTerm(term) {
      this.searchTerm = term;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Poppins:wght@400;600;700&display=swap');
* {
font-family: 'Fira Sans';
margin: 0;
padding: 0;
box-sizing: border-box;
}

</style>
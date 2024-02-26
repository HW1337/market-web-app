<template>
  <SearchHeader @search="updateSearchTerm" @cart="makeCartVisible"/>
  <ProductList :products="products" :searchQuery="searchTerm" />
  <cart-dialog v-model:show="cartVisible"></cart-dialog>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import SearchHeader from '@/components/SearchHeader.vue';

export default {
  data() {
    return {
      products: [],
      searchTerm: '',
      cartVisible: false,
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
    makeCartVisible() {
      this.cartVisible = true;
    }
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
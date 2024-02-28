<template>
  <SearchHeader @search="updateSearchTerm" @cart="makeCartVisible"/>
  <ProductList :products="products" :searchQuery="searchTerm" @addToCart="addToCart"/>
  <cart-dialog v-model:show="cartVisible" ><Cart :cart="cart"/></cart-dialog>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import SearchHeader from '@/components/SearchHeader.vue';
import Cart from '@/components/Cart.vue';

export default {
  data() {
    return {
      products: [],
      searchTerm: '',
      cartVisible: false,
      cart: []
    };
  },
  components: {
    SearchHeader,
    ProductList,
    Cart,
  },
  methods: {
    updateSearchTerm(term) {
      this.searchTerm = term;
    },
    makeCartVisible() {
      this.cartVisible = true;
    },
    addToCart(item) {
      const existingItem = this.cart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cart.push({ ...item, quantity: 1 })
      }
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
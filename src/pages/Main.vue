<template>
    <div>
    <SearchHeader @search="updateSearchTerm" @cart="makeCartVisible" :cartQuantity="cartQuantity"/>
    <ProductList :products="products" :searchQuery="searchTerm" @addToCart="addToCart"/>
    <cart-dialog v-model:show="cartVisible" ><Cart v-model:show="cartVisible" :cart="cart" @refreshCartQuantity="refreshCartQuantity"/></cart-dialog>
    </div>
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
        cart: [],
        cartQuantity: 0,
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
        this.cartQuantity = this.cart.reduce((acc, el)=> acc + el.quantity, 0)
      },
      refreshCartQuantity () {
        this.cartQuantity = this.cart.reduce((acc, el)=> acc + el.quantity, 0)
      }
    },
  };
  </script>
  
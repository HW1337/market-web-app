<template>
    <div>
    <SearchHeader @cart="makeCartVisible"/>
    <ProductList :products="products"/>
    <cart-dialog v-model:show="cartVisible" ><Cart v-model:show="cartVisible" :cart="cart"/></cart-dialog>
    </div>
  </template>
  
  <script>
  import ProductList from '@/components/ProductList.vue';
  import SearchHeader from '@/components/SearchHeader.vue';
  import Cart from '@/components/Cart.vue';
  import {mapState, mapGetters, mapMutations} from 'vuex'
  
  export default {
    data() {
      return {
        cartVisible: false,
      };
    },
    computed: {
    ...mapState(['products', 'searchTerm', 'cart']),
    ...mapGetters(['cartQuantity']),
  },
    components: {
      SearchHeader,
      ProductList,
      Cart,
    },
    methods: {
      makeCartVisible() {
        this.cartVisible = true;
      },
      ...mapMutations(['updateSearchTerm', 'addToCart'])
    },
  };
  </script>
  
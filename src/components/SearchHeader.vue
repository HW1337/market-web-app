<template>
  <header>
    <div class="headerplus">
      <div><a class="main-link" href="index.html"><img class="logo" src="favicon.ico">HOMESHROOMS</a></div>
      <div class="input-container">
        <search-input :model-value="searchTerm" @update:model-value="updateSearchTerm" type="text" name="query"
          placeholder="Найти на Homeshrooms" class="search"></search-input>
        <cart-button class="cart" @click="this.$emit('cart');">Корзина</cart-button>
        <div class="cart-quantity" v-if="cartQuantity>0">{{cartQuantity}}</div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState(['searchTerm']),
    ...mapGetters(['cartQuantity']),
  },
  methods: {
    ...mapMutations(['updateSearchTerm']),
  },
};
</script>

<style>
header {
  background: #1ead3d;
  padding: 15px;
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.headerplus {
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-link {
  display: flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
}

.logo:hover {
  animation: shake 0.5s ease;
}
.cart-quantity {
  position: absolute;
  top: 2px;
  right: 2px;
  background-color: red;
  border: 1px solid rgb(255, 255, 255) ;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.logo {
  height: 50px;
  margin-right: 10px;
  border-radius: 10px;
  padding: 4px;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.cart {
  position: absolute;
  right: 0;
  margin: 5px;
  font-size: 18px !important;
  background-color: #1ead3d !important;
}

.cart:hover {
  background-color: #14cf3d !important;
}

.cart:active {
  background-color: #25dd4d !important;
}

.search {
  font-size: 20px;
  width: 50vw;
  line-height: 2.5;
  margin-left: 5vw;
}

.search::placeholder {
  color: #acacac;
  font-family: 'Fira Sans';
}

input {
  padding-left: 20px;
  border-radius: 15px;
  border-width: 0px;
}</style>
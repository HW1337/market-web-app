<template>
  <div>
    <div v-if="products" class="product">
        <h2>{{ products.title }}</h2>
        <p><strong>Цена:</strong> ${{ products.price }}</p>
        <p><strong>Описание:</strong> {{ products.description }}</p>
        <p><strong>Категория:</strong> {{ products.category }}</p>
        <img :src="products.image" alt="Фото товара" style="max-width: 300px;">
        <p v-if="products.rating"><strong>Рейтинг:</strong> {{ products.rating.rate }} (на основе {{ products.rating.count }} оценок)</p>
        <p v-else><strong>Рейтинг:</strong> Не доступен</p>
        <cart-button class="add-to-cart" @click="this.$emit('addToCart', product);">В корзину</cart-button>
        <router-link to="/"><cart-button>Вернуться на главную</cart-button></router-link>
    </div>
    <div v-else>
        <p>Нет информации.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        products: {}
      }
    },
    mounted() {
    axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  },
  }
</script>

<style scoped>
.product {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    max-width: 400px;

}
</style>
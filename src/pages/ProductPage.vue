<template>
  <div>
    <div v-if="getProduct(setProducts, this.$route.params.id)" class="product">
      <h2 class="product-title">{{ getProduct(setProducts, this.$route.params.id).title }}</h2>
      <div class="product-details">
        <div class="product-image">
          <img :src="getProduct(setProducts, this.$route.params.id).image" alt="Фото товара">
        </div>
        <div class="product-info">
          <p class="product-price"><strong>Цена:</strong> ${{ getProduct(setProducts, this.$route.params.id).price }}
          </p>
          <p class="product-description"><strong>Описание:</strong> {{ getProduct(setProducts
      , this.$route.params.id).description }}</p>
          <p class="product-category"><strong>Категория:</strong> {{ getProduct(setProducts
      , this.$route.params.id).category }}</p>
          <p v-if="getProduct(setProducts, this.$route.params.id).rating" class="product-rating"><strong>Рейтинг:</strong> {{ getProduct(setProducts
      , this.$route.params.id).rating.rate }} (на
            основе {{ getProduct(setProducts, this.$route.params.id).rating.count }} оценок)</p>
          <p v-else class="product-rating"><strong>Рейтинг:</strong> Не доступен</p>
          <cart-button class="add-to-cart" @click="addToCart(getProduct(setProducts ,this.$route.params.id));">В
            корзину</cart-button>
          <router-link to="/" class="return-to-home"><cart-button>Вернуться на главную</cart-button></router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Нет информации.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions(['addToCart', 'fetchProducts']),
    getProduct(array, id) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id == id) {
          return array[i]
        }
      }
    },
  },
  computed: {
    ...mapState(['products']),
    ...mapGetters(['setProducts']),
  },
  mounted() {
    this.fetchProducts();
  }
}
</script>

<style scoped>
.product {
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  max-width: 90%;
}

.product-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-details {
  display: flex;
  align-items: center;
}

.product-image {
  margin-right: 20px;
  max-width: 500px;
}

.product-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-info {
  flex: 1;
}

.product-price {
  font-size: 18px;
  margin-bottom: 10px;
}

.product-description {
  margin-bottom: 10px;
}

.product-category {
  margin-bottom: 10px;
}

.product-rating {
  margin-bottom: 10px;
}

.add-to-cart,
.return-to-home {
  margin: 10px;
}
</style>
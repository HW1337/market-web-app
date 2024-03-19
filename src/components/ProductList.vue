<template>
  <div class="card-container">
    <TransitionGroup name="list">
      <ProductItem v-for="product in filteredProducts" :key="product.id" :product="product" @addToCart="addToCart" />
    </TransitionGroup>
  </div>
  <div ref="observer"></div>
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
      limit: 10,
    };
  },
  mounted() {
    axios.get('https://fakestoreapi.com/products', {
      params: {
        limit: this.limit
      }
    })
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
      let options = {
        rootMargin: "0px",
        threshold: 1,
      };
      const callback = (entries, observer) => {
        if (entries[0].isIntersecting) {this.loadProducts()}
      };
      let observer = new IntersectionObserver(callback, options);
      observer.observe(this.$refs.observer);
  },

  methods: {
    addToCart(item) {
      this.$emit("addToCart", item)
    },
    loadProducts() {
      this.limit += 10;
      axios.get('https://fakestoreapi.com/products', {
      params: {
        limit: this.limit
      }
    })
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });}
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
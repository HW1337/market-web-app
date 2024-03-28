import axios from 'axios';

export const mainModule = {
  state: () => ({
    products: [],
    searchTerm: '',
    cart: [],
    productsLimit: 10,
    page: 1,
    limit: 4,
  }),
  getters: {
    setCart(state) {
      return state.cart
    },
    setProducts(state) {
      return state.products
    },
    cartItems(state) {
      const startIndex = (state.page - 1) * state.limit;
      const endIndex = startIndex + state.limit;
      return state.cart.slice(startIndex, endIndex);
    },
    cartQuantity(state) {
      return state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    filteredProducts(state) {
      if (!state.searchTerm) {
        return state.products;
      }
      return state.products.filter(product => product.title.toLowerCase().includes(state.searchTerm));
    },
    setPage(state) {
      return state.page
    },
    setLimit(state) {
      return state.limit
    },
    totalPages(state) {
      return Math.ceil(state.cart.length / state.limit);
    },
    calculateTotal(state) {
      return (state.cart.reduce((acc, cartItem) => acc += + cartItem.price * cartItem.quantity, 0)).toFixed(2)
    },
  },
  mutations: {
    updateSearchTerm(state, term) {
      state.searchTerm = term.toLowerCase();
    },
    setProducts(state, products) {
      state.products = products;
    },
    setLimit(state, productsLimit) {
      state.productsLimit = productsLimit;
    },
    addToCart(state, item) {
      let existingItem = state.cart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cart.push({ ...item, quantity: 1 })
      }
    },
    nextPage(state) {
      if (state.page < state.limit) {
        state.page++
      }
    },
    previousPage(state) {
      if (state.page > 1) {
        state.page--;
      }
    },
    addQuantity(state, cartIndex) {
      console.log(cartIndex);
      const actualIndex = (state.page - 1) * state.limit + cartIndex;
      state.cart[actualIndex].quantity++;
    },
    removeQuantity(state, cartIndex) {
      console.log(cartIndex);
      const actualIndex = (state.page - 1) * state.limit + cartIndex;
      if (state.cart[actualIndex].quantity !== 1) {
        state.cart[actualIndex].quantity--;
      } else {
        state.cart.splice(actualIndex, 1);
      }
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit('addToCart', item);
    },
    async fetchProducts({ commit, state }) {
      try {
        const response = await axios.get('https://fakestoreapi.com/products', {
          params: {
            limit: state.productsLimit,
          },
        });
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async increaseLimit({ commit, state }, amount) {
      commit('setLimit', state.productsLimit + amount);
    },
  }
}

import axios from 'axios';

export const mainModule = {
  state: () => ({
    products: [],
    searchTerm: '',
    cart: [],
    productsLimit: 10,
  }),
  getters: {
    cartItems(state) {
      return state.cart;
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

export const mainModule = {
  state: () => ({
    products: [],
    searchTerm: '',
    cart: [],
    page: 1,
    limit: 4,
  }),
  getters: {
    cartQuantity(state) {
      return state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    calculateTotal(state) {
      return (state.cart.reduce((acc, cartItem) => acc += + cartItem.price * cartItem.quantity, 0)).toFixed(2)
    },
    totalPages(state) {
      return Math.ceil(state.cart.length / state.limit);
    },
    paginatedProducts(state) {
      const startIndex = (state.page - 1) * state.limit;
      const endIndex = startIndex + state.limit;
      return state.cart.slice(startIndex, endIndex);
    },
  },
  mutations: {
    updateSearchTerm(state, term) {
      state.searchTerm = term;
    },
    addToCart(state, item) {
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cart.push({ ...item, quantity: 1 })
      }
    },
    setPage(state, page) {
      state.page = page;
    },
    increaseQuantity(state, index) {
      state.cart[index].quantity++;
  },
  decreaseQuantity(state, index) {
    if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
    } else {
        state.cart.splice(index, 1);
    }
},
  },
  actions: {
    addToCart({ commit, dispatch, state }, product) {
      commit('addToCart', product);
      dispatch('refreshCartQuantity');
      if (state.totalPages < state.page) {
        commit('setPage', state.totalPages);
      }
    },
    increaseQuantity({ commit, dispatch }, index) {
      commit('increaseQuantity', index);
      dispatch('refreshCartQuantity');
    },
    decreaseQuantity({ commit, dispatch }, index) {
      commit('decreaseQuantity', index);
      dispatch('refreshCartQuantity');
    },
    nextPage({ commit, state }) {
      if (state.page < state.totalPages) {
        commit('setPage', state.page + 1);
      }
    },
    previousPage({ commit, state }) {
      if (state.page > 1) {
        commit('setPage', state.page - 1);
      }
    },
  }
}
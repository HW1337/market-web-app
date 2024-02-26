<template>
    <div>
        Корзина
    </div>
        <div v-if="cart !== null" v-for="cart in cart" :key="cart.id">
            <div class="item-container">
                <img :src="cart.image" alt="Картинка">
                <h3 class="title">{{ cart.title }}</h3>
                <span class="price">{{ cart.price }}$</span>
            </div>
        </div>
    <div v-if="cart !== null">
        Итого: {{ calculateTotal() }}
    </div>
        <cart-button>Заказать</cart-button>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: {
        cart: Array,
    },
    methods: {
        calculateTotal() {
            return this.cart.reduce((acc, cartItem) => acc += + cartItem.price, 0);
        },
    },
}
</script>

<style scoped>
img {
    width: 40px;
}

</style>
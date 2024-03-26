<template>
    <div class="head">
        <h1>
            Корзина
        </h1>
        <button class="cross" pointer @click.stop="this.$emit('update:show', false)">X</button>
    </div>
    <div class="content" v-if="state.cart.length > 0">
        <div v-for="(product, index) in paginatedProducts" :key="product.id">
            <div class="item-container">
                <img :src="product.image" alt="Картинка">
                <div class="title__content">
                    <h3 class="title">{{ product.title }}</h3>
                    <div class="quantity" v-if="product.quantity > 1">x{{ product.quantity }}</div>
                </div>
                <span><cart-button @click="increaseQuantity(index)" class="add">+</cart-button></span>
                <span><cart-button @click="removeQuantity(index)" class="add">-</cart-button></span>
                <h3 class="price">{{ cart.price }}$</h3>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="pages" v-if="state.cart.length > 0">
            <cart-button class="add" @click="previousPage" v-if="page !== 1">
                < </cart-button>
                    <span> {{ page }} </span>
                    <cart-button class="add" @click="nextPage" v-if="page !== totalPages"> > </cart-button>
        </div>
        <div class="total">
            <h2 v-if="state.cart.length > 0">
                Итого: {{ calculateTotal }}$
            </h2>
            <h2 v-else>
                В корзине нет товаров
            </h2>
            <cart-button class="order" v-if="state.cart.length > 0">Заказать</cart-button>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions(['increaseQuantity', 'decreaseQuantity']),
        ...mapMutations(['addToCart', 'nextPage' , 'previousPage'])
    },
    computed: {
        ...mapState(['cart', 'page']),
        ...mapGetters(['cartQuantity', 'calculateTotal', 'paginatedProducts', 'totalPages']),
    },
}
</script>

<style scoped>
img {
    margin-top: 20px;
    width: 40px;
}

.title__content {
    display: flex;
    align-items: center;
}

.title {
    margin-right: 10px;
}

.add {
    padding: 0.2px !important;
    width: 30px;
}

.pages {
    display: flex;
    justify-content: center;
    margin: 5px;
}

.price {
    margin-bottom: 10px;
}

.total {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.order {
    font-size: 18px !important;
}

.head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cross {
    font-size: 30px;
    color: rgb(70, 70, 70);
    background-color: rgb(202, 202, 202);
    border-radius: 12px;
    padding: 0 9px;
    cursor: pointer;
    border: 0;
}

.content {

    border: 1px solid rgba(128, 128, 128, 0.479);
    border-radius: 12px;
    margin: 15px 0px;
    padding: 15px 15px;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.cross:hover {
    background-color: rgb(190, 190, 190);
}
</style>
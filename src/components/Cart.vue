<template>
    <div class="head">
        <h1>
            Корзина
        </h1>
        <button class="cross" pointer @click.stop="this.$emit('update:show', false)">X</button>
    </div>
    <div class="content" v-if="setCart.length > 0">
        <div v-for="(cart, index) in cartItems" :key="cart.id">
            <div class="item-container">
                <img :src="cart.image" alt="Картинка">
                <div class="title__content">
                    <h3 class="title">{{ truncateTitle(cart.title, 10, 35) }}</h3>
                    <div class="quantity" v-if="cart.quantity > 1">x{{ cart.quantity }}</div>
                </div>
                <span><cart-button @click="addQuantity(index)" class="add">+</cart-button></span>
                <span><cart-button @click="removeQuantity(index)" class="add">-</cart-button></span>
                <h3 class="price">{{ cart.price }}$</h3>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="pages" v-if="setCart.length > setLimit">
            <cart-button class="add" @click="previousPage" v-if="setPage !== 1"> < </cart-button>
                    <span> {{ setPage }} </span>
                    <cart-button class="add" @click="nextPage" v-if="setPage !== totalPages"> > </cart-button>
        </div>
        <div class="total">
            <h2 v-if="setCart.length > 0">
                Итого: {{ calculateTotal }}$
            </h2>
            <h2 v-else>
                В корзине нет товаров
            </h2>
            <cart-button class="order" v-if="setCart.length > 0">Заказать</cart-button>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
    methods: {
        ...mapMutations(['addQuantity', 'removeQuantity', 'nextPage', 'previousPage']),
        truncateTitle(title, wordCount, charLimit) {
            const words = title.split(' ');
            const truncatedWords = words.slice(0, wordCount);
            let truncatedTitle = truncatedWords.join(' ');
            if (truncatedTitle.length > charLimit) {
                const lastSpaceIndex = truncatedTitle.lastIndexOf(' ', charLimit);
                truncatedTitle = truncatedTitle.slice(0, lastSpaceIndex);
                truncatedTitle += '...';
            }
            return truncatedTitle;
        },
    },
    computed: {
    ...mapState(['cart', 'limit', 'page']),
    ...mapGetters(['cartItems', 'setCart', 'setPage', 'setLimit', 'totalPages', 'calculateTotal']),
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
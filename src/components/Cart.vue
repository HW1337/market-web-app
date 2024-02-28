<template>
    <h1>
        Корзина
    </h1>
        <div v-if="cart !== null" v-for="(cart, index) in cart" :key="cart.id">
            <div class="item-container">
                <img :src="cart.image" alt="Картинка">
                <div class="title__content"><h3 class="title">{{ cart.title }}</h3> 
                <h3 v-if="cart.quantity>1">x{{ cart.quantity }}</h3></div>
                <span><cart-button @click="addQuantity(index)" class="add">+</cart-button></span>
                <span><cart-button @click="removeQuantity(index)" class="add">-</cart-button></span>
                <h3 class="price">{{ cart.price }}$</h3>
            </div>
        </div>
    <div class="total"><h2 v-if="cart.length > 0">
        Итого: {{ calculateTotal() }}$
    </h2>
    <h2 v-else>
        В корзине нет товаров
    </h2>
        <cart-button class="order" v-if="cart.length > 0">Заказать</cart-button></div>
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
            return (this.cart.reduce((acc, cartItem) => acc += + cartItem.price * cartItem.quantity, 0)).toFixed(2)
        },
        addQuantity(index) {
            this.cart[index].quantity ++
        },
        removeQuantity(index) {
            if (this.cart[index].quantity !== 1)
            {this.cart[index].quantity --} else {
                this.cart.splice(index, 1);
            }
        }
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

}
.title {
    margin-right: 10px;
}
.add {
    padding: 1px !important;
    width: 30px;
    margin-right: 5px;
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
    
}
</style>
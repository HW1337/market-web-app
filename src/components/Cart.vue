<template>
    <div class="head">
        <h1>
            Корзина
        </h1>
        <button class="cross" pointer @click.stop="this.$emit('update:show', false)">X</button>
    </div> <div class="content">
    <div v-if="cart !== null" v-for="(cart, index) in paginatedProducts" :key="cart.id">
        <div class="item-container">
            <img :src="cart.image" alt="Картинка">
            <div class="title__content">
                <h3 class="title">{{ truncateTitle(cart.title, 10, 35) }}</h3>
                <div class="quantity" v-if="cart.quantity > 1">x{{ cart.quantity }}</div>
            </div>
            <span><cart-button @click="addQuantity(index)" class="add">+</cart-button></span>
            <span><cart-button @click="removeQuantity(index)" class="add">-</cart-button></span>
            <h3 class="price">{{ cart.price }}$</h3>
        </div></div>
    </div>
    <div class="footer">
        <div class="pages" v-if="cart.length > 0">
            <cart-button class="add" @click="previousPage" v-if="page !== 1">
                < </cart-button>
                    <span> {{ page }} </span>
                    <cart-button class="add" @click="nextPage" v-if="page !== totalPages"> > </cart-button>
        </div>
        <div class="total">
            <h2 v-if="cart.length > 0">
                Итого: {{ calculateTotal() }}$
            </h2>
            <h2 v-else>
                В корзине нет товаров
            </h2>
            <cart-button class="order" v-if="cart.length > 0">Заказать</cart-button>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['refreshCartQuantity'],
    data() {
        return {
            page: 1,
            limit: 4,
        };
    },
    props: {
        cart: Array,
        cartQuantity: Number,
    },
    methods: {
        calculateTotal() {
            return (this.cart.reduce((acc, cartItem) => acc += + cartItem.price * cartItem.quantity, 0)).toFixed(2)
        },
        addQuantity(cartIndex) {
            const actualIndex = (this.page - 1) * this.limit + cartIndex;
            this.cart[actualIndex].quantity++;
            this.$emit("refreshCartQuantity");
        },
        removeQuantity(cartIndex) {
            const actualIndex = (this.page - 1) * this.limit + cartIndex;
            if (this.cart[actualIndex].quantity !== 1) {
                this.cart[actualIndex].quantity--;
            } else {
                this.cart.splice(actualIndex, 1);
            }
            this.$emit("refreshCartQuantity");
        },
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
        nextPage() {
            if (this.page < this.limit) {
                this.page++;
            }
        },
        previousPage() {
            if (this.page > 1) {
                this.page--;
            }
        },
    },
    computed: {
        totalPages() {
            return Math.ceil(this.cart.length / this.limit);
        },
        paginatedProducts() {
            const startIndex = (this.page - 1) * this.limit;
            const endIndex = startIndex + this.limit;
            return this.cart.slice(startIndex, endIndex);
        },
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
<template>
    <div class="card">
        <div class="image-container">
            <img :src="product.image" alt="Картинка" @click="$router.push(`/products/${product.id}`)">
        </div>
        <h3 class="title">{{ truncateTitle(product.title, 12, 60) }}</h3>
        <div class="buy">
            <span class="price">{{ product.price }}$</span>
            <cart-button class="add-to-cart" @click="addToCart(product)">В корзину</cart-button>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
        methods: {
        ...mapActions(['addToCart']),
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

}

</script>

<style scoped>
.card {
    border: 1px solid #797979;
    border-radius: 8px;
    width: 220px;
    height: 420px;
    margin-top: 40px;
    margin-left: 15px;
    margin-right: 15px;
    text-align: center;
    transition: transform 0.3s ease;
    position: relative;
    box-shadow: 3px 3px 15px grey;
}

.card:hover {
    transform: scale(1.1);
}
.add-to-cart {
    opacity: 0;
    box-shadow: 3px 3px 15px grey;
}
.card:hover .add-to-cart {
    opacity: 1;
}

.image-container {
    width: 219px;
    height: 295px;
    display: flex;
    border-bottom: 1px solid #636363;
    justify-content: center;
    align-items: center;
}

.image-container img {
    max-width: 95%;
    max-height: 95%;
    cursor: pointer;
}

.title {
    width: 218px;
    height: 80px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.price {
    color: #e44d26;
    font-weight: bold;
    font-size: 25px;
    margin-right: 10px;
}

.buy {
    position: absolute;
    bottom: 10px;
    width: 100%;
}
</style>
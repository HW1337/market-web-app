<template>
    <button class="button"><slot></slot></button>
</template>

<script>
    export default {
        name: 'cart-button'
    }
</script>

<style scoped>
.button {
    background-color: rgb(51, 151, 68);
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    transition: opacity 0.5s ease;
}
.button:hover {
    background-color: rgb(57, 175, 77);
}

.button:active {
    animation: shake 0.1s ease;
    background-color: rgb(0, 185, 15);
}

@keyframes shake {

    0%,
    100% {
        transform: translateY(0);
    }

    25%,
    75% {
        transform: translateY(2px);
    }

    50% {
        transform: translateY(-1px);
    }
}
</style>
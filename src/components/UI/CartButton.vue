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
    opacity: 0;
    transition: opacity 0.5s ease;
}
</style>
<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog" @scroll.stop="">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

    export default {
        name: 'cart-dialog',
        mixins: [toggleMixin]
    }
</script>

<style scoped>
.dialog {
    top: 80px;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
}
.dialog__content {
    margin: auto;
    background-color: white;
    border-radius: 12px;
    padding: 25px;
    min-width: 450px;
    width: max-content;
}
</style>
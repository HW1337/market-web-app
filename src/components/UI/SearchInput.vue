<template>
    <input :value="modelValue" @input="updateModel">
</template>

<script>
export default {
    name: 'search-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateModel(event) {
            this.$emit("update:modelValue", event.target.value)
        }
    },
}
</script>

<style scoped></style>
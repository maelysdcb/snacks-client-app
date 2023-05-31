<script setup>
import SearchBar from '../components/SearchBar.vue';
import Product from '../components/Product.vue';
import { useProductStore } from '@/stores/ProductStore.js'

const store = useProductStore();
</script>

<template>
    <main>
        <SearchBar></SearchBar>
        <h1>Products</h1>
        <Product v-for="product in store.products" :product="product"></Product>
    </main>
</template>

<style scoped>
main {
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    gap: 2em;
}
</style>
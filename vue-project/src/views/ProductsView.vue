<script setup>
import SearchBar from '../components/SearchBar.vue';
import Product from '../components/Product.vue';
import { useProductStore } from '@/stores/ProductStore.js'

const store = useProductStore();
</script>

<template>
    <main>
        <SearchBar></SearchBar>
        <div v-if="store.filteredProduct.length === 0" class="product-missing">
            <span>We don't have any product that starts by : "{{ store.researchProduct }}"</span>
            <img src="../assets/svg/product-unavailable.svg" alt="">
        </div>
        <div v-else class="grid-products">
            <h1>Products</h1>
            <Product v-for="product in store.filteredProduct" :product="product"></Product>
        </div>
    </main>
</template>

<style scoped>
main {
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    gap: 2em;
}

.grid-products {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 3em;
}

.product-missing {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:5em;
}

.product-missing > img {
width: 100%;
}

</style>
<script setup>
import SearchBar from '../components/SearchBar.vue';
import Product from '../components/Product.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';


    const products = ref(null);
    
    const fetchData = () =>{
        axios
            .get('http://localhost:8000/api/products')
            .then(response => {products.value = response.data;})
    }
    
    onMounted(async () => {
        fetchData();
    })
    
    const displayData = (infos) => {
        console.log(infos)
    }
</script>

<template>
    <main>
        <SearchBar></SearchBar>
        <h1>Products</h1>
        <Product v-for="product in products" :product="product" @button-clicked="displayData"></Product>
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
<script setup>
import CartItem from '../components/CartItem.vue';
function displayCart(name) {
    console.log('Mon panier' + name)
}
</script>

<template>
    <h1>Mon panier</h1>
    <CartItem @addToCart="displayCart"></CartItem>
</template>

<style>
</style>
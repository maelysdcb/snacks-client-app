<script setup>
import CartItem from '../components/CartItem.vue';
import { useProductStore } from '@/stores/ProductStore.js'
import { useCartStore } from '../stores/CartStore';

const store = useProductStore();
const cart = useCartStore();

</script>

<template>
    <main>
        <h1>My Cart</h1>
        <div v-if="store.cart.length > 0">
            <div class="grid-card">
                <CartItem v-for="item in store.cart" :item="item"></CartItem>
            </div>
            <div class="subtotal">
                <h2>Subtotal</h2>
                <p >{{ cart.calculTotal(store.cart) }}</p>
            </div>
            <button @click="">Pay</button>
        </div>
        <div v-else class="empty-card">
            <img src="../assets/svg/empty-cart.svg" alt="empty-cart-illustration">
            <span>Your cart is empty !</span>
        </div>
    </main>
</template>

<style scoped>
main {
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
}

.grid-card {
    display: grid;
    grid-template-columns: 1fr;
    gap:2em;
}

.subtotal {
    padding:2em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

button {
    border-radius: 5px;
    padding: 0.5em;
    color: var(--font-color);
    font-size: 20px;
    font-weight: 600;
    border: none;
    background-color: var(--green-color);
    width: 100%;
}

.empty-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:2em;
}
</style>
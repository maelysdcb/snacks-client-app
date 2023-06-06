<script setup>
import CartItem from '../components/CartItem.vue';
import { useCartStore } from '../stores/CartStore';

const cart = useCartStore();

</script>

<template>
    <main>
        <h1>My cart</h1>
        <div v-if="cart.products.length > 0">
            <div class="grid-card">
                <CartItem v-for="item in cart.products" :item="item"></CartItem>
            </div>
            <div class="subtotal">
                <h2>Subtotal</h2>
                <p>{{ cart.subTotal() }}€</p>
            </div>
            <button>Pay</button>
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
    gap: 5em;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.test {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100vh;
}

.grid-card {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
}

.subtotal {
    padding: 2em 0;
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
    gap: 2em;
}
</style>
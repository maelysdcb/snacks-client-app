<script setup>
import { ref, computed } from 'vue';
import { useProductStore } from '../stores/ProductStore';
import { useCartStore } from '../stores/CartStore';

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const cart = useCartStore();
const store = useProductStore();

const addToCart = (quantity) => {
    cart.addProduct(props.product, quantity);
}

const iconClicked = ref(false);

const changeIcon = () => {
    iconClicked.value = !iconClicked.value;
}
const iconSource = computed(() => {
    console.log(iconClicked.value)
    return iconClicked.value ? '../assets/svg/checkmark-circle.svg' : '../assets/svg/add-circle-outline.svg'
})
</script>

<template>
    <div class="grid-products">
        <div v-if="product.quantity <= 0">
            <div class="card unavailable">
                <img class="card-header" src="../assets/svg/no-image.svg" :alt="product.name">
                <div class="card-body">
                    <h3>{{ product.name }}</h3>
                    <div class="card-body-content">
                        <div class="card-body-content-infos">
                            <span>Out of stock</span>
                        </div>
                        <div class="card-body-content-action">
                            <img class="ion-icon" src="../assets/svg/close-circle-outline.svg" alt="plus-icon"
                                @click="addToCart(product.quantity)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="card available">
                <img class="card-header" :src="product.image" :alt="product.name">
                <div class="card-body">
                    <h3>{{ product.name }}</h3>
                    <div class="card-body-content">
                        <div class="card-body-content-infos">
                            <span>Price :
                                {{ product.price }}€</span>
                        </div>
                        <div class="card-body-content-action">
                            <a @click="changeIcon">
                                <img class="ion-icon" :src="iconSource" alt="plus-icon"
                                    @click="addToCart(product.quantity)">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid-products {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 3em;
}

.card {
    color: var(--font-color);
    border-radius: 0.5em;
}

.available {
    background-color: var(--nav-card-color);
}

.unavailable {
    background: #FF3333;
}

.card-header {
    border-radius: 0.5em 0.5em 0 0;
    object-fit: cover;
    width: 100%;
    height: 125px;
}

.card-body {
    padding: 1em;
}

.card-body-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
}
</style>


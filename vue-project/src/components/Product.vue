<script setup>
import { invokeArrayFns } from '@vue/shared';
import axios from 'axios';
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    product :{
        type: Object,
        required:true
    }
})

const emit = defineEmits(['buttonClicked']);
const handleButtonClicked = (infos) => {
    const displayData = {id:infos.id}
    emit('buttonClicked', displayData)
}

const count = ref(0);
const increment = () => {
    count.value++
}
const cart = ref([]);
const router = useRouter();

// goToCart function after client picked its products
// const goToCart = () => {
//     setTimeout(() => {
//         router.push({ name: 'cart' })
//     }, 1000)
// }

function addToCart(stockQuantity) {
    if (stockQuantity <= 0) {
        alert('This product is sold out !')
    } else {
        // Consume one product in database
        axios
            .get(`http://localhost:8000/api/products/consume?id=${props.product.id}`)
            .then(response => {
                cart.value = response.data
                console.log(cart.value)
                handleButtonClicked(cart.value)
            })

        if (count.value <= 4) {
            increment();
            // goToCart();
            // cart.value = count.value;
            // console.log(cart.value);
        } else {
            console.log('Vous ne pouvez pas acheter plus de 5 fois le même produit')
        }
    }
}
</script>

<template>
    <div class="grid">
        <div v-if="product.quantity <= 0">
            <div class="card unavailable">
                <img class="card-header" src="../assets/svg/no-image.svg" :alt="product.name">
                <div class="card-body">
                    <h3>{{ product.name }}</h3>
                    <div class="card-body-content">
                        <div class="card-body-content-infos">
                            <span>Rupture de stock</span>
                        </div>
                        <div class="card-body-content-action">
                            <a href="#">
                                <img class="ion-icon" src="../assets/svg/add-circle-outline.svg" alt="plus-icon"
                                    @click="addToCart(product.quantity)">
                            </a>
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
                            <a href="#" @click="handleButtonClicked">
                                <img class="ion-icon" src="../assets/svg/add-circle-outline.svg" alt="plus-icon"
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
.grid {
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


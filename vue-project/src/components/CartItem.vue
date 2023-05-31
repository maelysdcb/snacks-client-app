<script setup>
import { useProductStore } from '@/stores/ProductStore.js'
const store = useProductStore();

const props = defineProps({
    item :{
        type: Object,
        required:true
    }
})
</script>

<template>
    <div class="card">
        <div class="card-header">
            <div class="card-content">
                <h3>{{ item.name }}</h3>
            </div>
            <img :src="item.image" :alt="item.name">
        </div>
        <div class="card-footer">
            <div class="card-actions">
                <button class="actions"><img src="../assets/svg/trash-outline.svg" alt="trash-icon"></button>
                <span class="quantity">#</span>
                <button class="actions"><img src="../assets/svg/add-outline.svg" alt="add-quantity-icon"></button>
            </div>
            <span>{{ item.price }}€</span>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    gap:1em;
    padding:1em;
    background-color:var(--nav-card-color);
    border-radius: 0.7em;
    box-sizing: border-box;
}
.card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.card-header > img {
    width: 100px;
    height: 100%;
}

.card-actions {
    display: flex;
    align-items: center;
}
.card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.quantity {
    height:20px;
    background-color: var(--font-color);
    color:var(--nav-card-color)
}
button {
    border:none;
  
}
.card-actions > button:first-child {
    background-color: var(--font-color);
    border-radius:1em 0 0 1em;
    width: 30px;
}
.card-actions > button:last-child {
    background-color: var(--font-color);
    border-radius: 0 1em 1em 0;
    width: 30px;

}

</style>
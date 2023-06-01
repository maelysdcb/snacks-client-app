import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", () => {

    const calculTotal = (cart) => {
        console.log(cart)
        return cart.reduce((acc, item) => acc + item, 0);
    }

    const removeProduct = (itemId, cart) => {
        const index = cart.findIndex(item => item.id === itemId);
        if (index !== -1) {
            cart.splice(index, 1);
        }
    }
    
    return {removeProduct, calculTotal}
});
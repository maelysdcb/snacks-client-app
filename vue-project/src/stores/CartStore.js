import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("CartStore", () => {
  const products = ref([]);

  const calculTotal = () =>
    products.value.reduce((acc, item) => acc + parseFloat(item.price), 0);

  const removeProduct = (itemId) => {
    const index = products.value.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      products.value.splice(index, 1);
    }
  };

  // Add to cart
  const addProduct = (product, quantity) => {
    const existingProduct = products.value.find(
      (item) => item.id === product.id
    );
    if (quantity <= 0) {
      alert("This product is sold out !");
    } else {
      if (!existingProduct) {
        count.value++;
        // axios.get(
        //   `http://localhost:8000/api/products/consume?id=${product.id}`
        // );
        products.value.push(product);
      } else {
        alert("Ce produit existe déjà dans le panier");
      }
    }
  };

  const count = () => products.value.length;

  return { products, removeProduct, calculTotal, addProduct, count };
  
});

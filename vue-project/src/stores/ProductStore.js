import { defineStore } from "pinia";
import axios from "axios";
import { ref, onMounted } from "vue";

export const useProductStore = defineStore("ProductStore", () => {

  // State
  const products = ref(null);
  const cart = ref([]);
  const count = ref(0);

  // Fetch datas from back-office API
  const fetchData = () => {
    axios.get("http://localhost:8000/api/products").then((response) => {
      products.value = response.data;
      console.log(products.value);
    });
  };

  onMounted(async () => {
    fetchData();
  });

  // Add to cart
  const addProduct = (product, quantity) => {
    const existingProduct = cart.value.find((item) => item.id === product.id);
    if (quantity <= 0) {
      alert("This product is sold out !");
    } else {
      if (!existingProduct) {
        count.value++;
        // axios.get(
        //   `http://localhost:8000/api/products/consume?id=${product.id}`
        // );
        cart.value.push(product);
      } else {
        alert("Ce produit existe déjà dans le panier");
      }
    }
  };

  return { products, cart, count, addProduct };
});

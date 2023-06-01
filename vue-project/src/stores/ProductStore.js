import { defineStore } from "pinia";
import axios from "axios";
import { ref, onMounted } from "vue";

export const useProductStore = defineStore("ProductStore", () => {
  // State
  const products = ref(null);

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

  return { products };
});

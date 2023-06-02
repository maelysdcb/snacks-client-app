import { defineStore } from "pinia";
import axios from "axios";
import { ref, onMounted, computed } from "vue";

export const useProductStore = defineStore("ProductStore", () => {
  // State
  const products = ref(null);
  const filteredProduct = ref([]);
  const researchProduct = ref("");

  // Filter
  const filterProduct = (entries) => {
      const filter = products.value.filter((item) =>
        item.name.toLowerCase().includes(entries.toLowerCase())
      );
        filteredProduct.value = filter;
    }

  // Fetch datas from back-office API
  const fetchData = () => {
    axios.get("http://localhost:8000/api/products").then((response) => {
      products.value = response.data;
      filteredProduct.value = products.value
    });
  };

  onMounted(async () => {
    fetchData();
  });

  return { products, filterProduct, filteredProduct, researchProduct };
});

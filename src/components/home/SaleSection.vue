<template>
  <body class="m-2 ss-bg">
    <h4>Hot Items Fors You!</h4>
    <div v-if="listItems != null">
      <div
        v-for="item in listItems.products"
        :key="item.id"
        class="grid-list-items"
      >
        <ItemCard :itemDetail="item" />
      </div>
    </div>
    <div v-else>
      <i
        v-if="isLoading"
        class="pi pi-spin pi-spinner"
        style="font-size: 2rem"
      ></i>
      null
    </div>
  </body>
</template>

<script setup>
import { ref, onMounted } from "vue";

const listItems = ref(null);
const isLoading = ref(true);

onMounted(() => {
  getItem();
});

async function getItem() {
  const rndInt = Math.floor(Math.random() * 89) + 1;
  isLoading.value = true;
  const response = await fetch(
    "https://dummyjson.com/products?limit=12&skip=" + rndInt
  );
  const items = await response.json();
  isLoading.value = false;
  console.log(items);
  listItems.value = items;
}
// }
</script>

<style scoped>
/* @media (min-width: 768px) {
  .ss-bg {
    width: 100% !important;
  }
} */
.grid-list-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  /* grid-auto-rows: minmax(100px, auto); */
}
</style>

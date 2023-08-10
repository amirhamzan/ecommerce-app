<template>
  <div class="container-fluid p-0">
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: 85px; background-color: #1f2d40"
    >
      <h5 class="text-light">E-Commerce App</h5>
    </div>
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary"
      style="background-color: #eaeff3"
    >
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">E-Commerce App</a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click="getCategories()"
                href="javascript:void(0);"
                >Categories</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Order</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Profile</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  <Dialog
    v-model:visible="visible"
    modal
    header="Categories"
    :style="{ width: '50vw' }"
  >
    <div v-if="isLoading" class="text-center">
      <i class="pi pi-spin pi-spinner" style="font-size: 4rem"></i>
    </div>
    <div v-else>
      <div class="mb-2">Please select the category:</div>
      <div class="text-center">
        <Button
          v-for="category in categories"
          :key="category"
          :label="category"
          severity="help"
          class="m-2"
        />
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from "vue";

const categories = ref(null);
const visible = ref(false);
const isLoading = ref(false);

async function getCategories() {
  isLoading.value = true;
  setTimeout(() => isLoading.value = false, 1000);
  visible.value = true;
  const response = await fetch("https://dummyjson.com/products/categories");
  const listCategories = await response.json();
  categories.value = listCategories;
  console.log(categories.value);
}
</script>
